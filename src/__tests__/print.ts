import { programFromSource } from '../utils'
import { visitProgram } from '../visit'
import { logicToTypeString } from '../print'

test('logicToTypeString', () => {
    const logicSource = `
        import { kea } from 'kea'
        
        const logic = kea({
            actions: () => ({
                updateName: (name: string) => ({ name }),
                updateOtherName: (otherName: string) => ({ otherName }),
            })
        })
    `
    const [parsedLogic] = visitProgram(programFromSource(logicSource))
    const string = logicToTypeString(parsedLogic)

    expect(string).toEqual(
        `
export interface logicType {
    actionCreators: {
        updateName: (name: string) => ({
            type: string;
            payload: { name: string; };
        });
        updateOtherName: (otherName: string) => ({
            type: string;
            payload: { otherName: string; };
        });
    };
    actions: {
        updateName: (name: string) => ({
            type: string;
            payload: { name: string; };
        });
        updateOtherName: (otherName: string) => ({
            type: string;
            payload: { otherName: string; };
        });
    };
    reducers: {};
    reducer: (state: any, action: () => any) => {};
    selectors: {};
}`.trim(),
    )
})