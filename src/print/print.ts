import * as ts from 'typescript'
import * as fs from 'fs'
import * as path from 'path'
import { version } from '../../package.json'
import { ParsedLogic } from '../types'
import { printActions } from './printActions'
import { printReducers } from './printReducers'
import { printReducer } from './printReducer'
import { printSelector } from './printSelector'
import { printSelectors } from './printSelectors'
import { printValues } from './printValues'
import { printSelectorTypeHelp } from './printSelectorTypeHelp'

export function printToFiles(parsedLogics: ParsedLogic[], verbose: boolean = false) {
    const groupedByFile: Record<string, ParsedLogic[]> = {}
    parsedLogics.forEach((parsedLogic) => {
        if (!groupedByFile[parsedLogic.fileName]) {
            groupedByFile[parsedLogic.fileName] = []
        }
        groupedByFile[parsedLogic.fileName].push(parsedLogic)
    })

    Object.entries(groupedByFile).forEach(([fileName, parsedLogics]) => {
        const output = parsedLogics.map(parsedLogicToTypeString).join('\n\n')
        fileName = fileName.replace(/\.[tj]sx?$/, '.type.ts')
        const finalOutput = `// Auto-generated with kea-typegen. DO NOT EDIT!\n\n${output}`

        let existingOutput

        try {
            existingOutput = fs.readFileSync(fileName)
        } catch (error) {}

        if (existingOutput?.toString() !== finalOutput) {
            fs.writeFileSync(fileName, finalOutput)
            console.log(`!! Writing: ${path.relative(process.cwd(), fileName)}`)
        } else {
            if (verbose) {
                console.log(`>> Unchanged: ${path.relative(process.cwd(), fileName)}`)
            }
        }
    })
}

export function parsedLogicToTypeString(parsedLogic: ParsedLogic) {
    const logicType = printLogicType(parsedLogic)
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
    const sourceFile = ts.createSourceFile('logic.ts', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
    return printer.printNode(ts.EmitHint.Unspecified, logicType, sourceFile)
}

export function printLogicType(parsedLogic: ParsedLogic) {
    const printProperty = (name, typeNode) =>
        ts.createPropertySignature(undefined, ts.createIdentifier(name), undefined, typeNode, undefined)

    const addSelectorTypeHelp = parsedLogic.selectors.filter((s) => s.functionTypes.length > 0).length > 0

    const pathString = path
        .relative(process.cwd(), parsedLogic.fileName)
        .replace(/^.\//, '')
        .replace(/\.[jt]sx?$/, '')
        .replace(/\//g, '.')

    return ts.createInterfaceDeclaration(
        undefined,
        [ts.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.createIdentifier(`${parsedLogic.logicName}Type`),
        parsedLogic.logicTypeArguments.map((text) =>
            ts.createTypeParameterDeclaration(ts.createIdentifier(text), undefined),
        ),
        undefined,
        [
            printProperty('actionCreators', printActions(parsedLogic)),
            // actionKeys
            printProperty('actions', printActions(parsedLogic)),
            // build
            printProperty(
                'cache',
                ts.createTypeReferenceNode(ts.createIdentifier('Record'), [
                    ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                    ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
                ]),
            ),
            // connections
            // constants
            // defaults
            // events
            // extend
            // inputs
            // listeners
            // mount
            printProperty(
                'path',
                ts.createTupleTypeNode(pathString.split('.').map((p) => ts.createLiteralTypeNode(ts.createStringLiteral(p)))),
            ),
            printProperty('pathString', ts.createStringLiteral(pathString)),
            // propTypes
            printProperty(
                'props',
                ts.createTypeReferenceNode(ts.createIdentifier('Record'), [
                    ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                    ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
                ]),
            ),
            printProperty('reducer', printReducer(parsedLogic)),
            // reducerOptions
            printProperty('reducers', printReducers(parsedLogic)),
            printProperty('selector', printSelector(parsedLogic)),
            printProperty('selectors', printSelectors(parsedLogic)),
            // sharedListeners
            printProperty('values', printValues(parsedLogic)),
            // wrap
            printProperty('_isKea', ts.createTrue()),
            // _isKeaWithKey,
            addSelectorTypeHelp ? printProperty('__selectorTypeHelp', printSelectorTypeHelp(parsedLogic)) : null,
        ].filter((a) => a),
    )
}
