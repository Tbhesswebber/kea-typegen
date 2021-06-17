// Generated by kea-typegen on Thu, 17 Jun 2021 23:02:42 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic } from 'kea'

import { Dashboard, Repository } from './types'
import { T1, T2, T3, T4 } from './autoImportTypes'
import { KeaPlugin } from '../node_modules/kea/lib/index.d'

export interface autoImportLogicType<L1, L2, Timeout> extends Logic {
    actionCreators: {
        actionT1: (
            local1: L1,
            local2: L2,
            param1: T1,
            param2: T2,
            param3: T3,
            param4: T4,
            keaPlugin: KeaPlugin,
            stringType: string,
        ) => {
            type: 'action t1 (autoImportLogic)'
            payload: {
                local1: 'haha'
                local2: L2
                param1: T1
                param2: 't2'
                param3: T3
                param4: T4
                keaPlugin: KeaPlugin
                stringType: string
            }
        }
        complexAction: (
            element: HTMLElement,
            timeout: Timeout,
        ) => {
            type: 'complex action (autoImportLogic)'
            payload: {
                element: HTMLElement
                timeout: Timeout
            }
        }
        setRepositories: (repositories: Repository[]) => {
            type: 'set repositories (autoImportLogic)'
            payload: {
                repositories: Repository[]
            }
        }
    }
    actionKeys: {
        'action t1 (autoImportLogic)': 'actionT1'
        'complex action (autoImportLogic)': 'complexAction'
        'set repositories (autoImportLogic)': 'setRepositories'
    }
    actionTypes: {
        actionT1: 'action t1 (autoImportLogic)'
        complexAction: 'complex action (autoImportLogic)'
        setRepositories: 'set repositories (autoImportLogic)'
    }
    actions: {
        actionT1: (
            local1: L1,
            local2: L2,
            param1: T1,
            param2: T2,
            param3: T3,
            param4: T4,
            keaPlugin: KeaPlugin,
            stringType: string,
        ) => void
        complexAction: (element: HTMLElement, timeout: Timeout) => void
        setRepositories: (repositories: Repository[]) => void
    }
    constants: {}
    defaults: {}
    events: {}
    key: undefined
    listeners: {}
    path: ['autoImportLogic']
    pathString: 'autoImportLogic'
    props: Record<string, unknown>
    reducer: (state: any, action: () => any, fullState: any) => {}
    reducerOptions: {}
    reducers: {}
    selector: (state: any) => {}
    selectors: {
        dashboard: (state: any, props?: any) => Dashboard | null
    }
    sharedListeners: {}
    values: {
        dashboard: Dashboard | null
    }
    _isKea: true
    _isKeaWithKey: false
}
