// Generated by kea-typegen on Sun, 03 Apr 2022 20:54:12 GMT. DO NOT EDIT THIS FILE MANUALLY.

import { Logic, NotReallyHereButImportedBecausePlugin } from 'kea'

export interface pluginLogicType extends Logic {
    actionCreators: {
        inlineAction: () => {
            type: 'inline action (pluginLogic)'
            payload: {
                value: boolean
            }
        }
        submitForm: () => {
            type: 'submit form (pluginLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'inline action (pluginLogic)': 'inlineAction'
        'submit form (pluginLogic)': 'submitForm'
    }
    actionTypes: {
        inlineAction: 'inline action (pluginLogic)'
        submitForm: 'submit form (pluginLogic)'
    }
    actions: {
        inlineAction: () => void
        submitForm: () => void
    }
    constants: {}
    defaults: {
        inlineReducer: {
            asd: boolean
        }
        form: {
            name: string
            age: number
        }
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['pluginLogic']
    pathString: 'pluginLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any,
    ) => {
        inlineReducer: {
            asd: boolean
        }
        form: {
            name: string
            age: number
        }
    }
    reducerOptions: {}
    reducers: {
        inlineReducer: (
            state: {
                asd: boolean
            },
            action: any,
            fullState: any,
        ) => {
            asd: boolean
        }
        form: (
            state: {
                name: string
                age: number
            },
            action: any,
            fullState: any,
        ) => {
            name: string
            age: number
        }
    }
    selector: (state: any) => {
        inlineReducer: {
            asd: boolean
        }
        form: {
            name: string
            age: number
        }
    }
    selectors: {
        inlineReducer: (
            state: any,
            props?: any,
        ) => {
            asd: boolean
        }
        form: (
            state: any,
            props?: any,
        ) => {
            name: string
            age: number
        }
    }
    sharedListeners: {}
    values: {
        inlineReducer: {
            asd: boolean
        }
        form: {
            name: string
            age: number
        }
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalExtraInput: {
        form:
            | {
                  default?: Record<string, any>
                  submit?: (form: { name: string; age: number }) => void
              }
            | ((logic: pluginLogicType) => {
                  default?: Record<string, any>
                  submit?: (form: { name: string; age: number }) => void
              })
    }
}


export interface anotherPluginLogicType extends Logic {
    actionCreators: {
        submitForm: () => {
            type: 'submit form (pluginLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'submit form (pluginLogic)': 'submitForm'
    }
    actionTypes: {
        submitForm: 'submit form (pluginLogic)'
    }
    actions: {
        submitForm: () => void
    }
    constants: {}
    defaults: {
        form: {
            name: string
            age: number
        }
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['pluginLogic']
    pathString: 'pluginLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any,
    ) => {
        form: {
            name: string
            age: number
        }
    }
    reducerOptions: {}
    reducers: {
        form: (
            state: {
                name: string
                age: number
            },
            action: any,
            fullState: any,
        ) => {
            name: string
            age: number
        }
    }
    selector: (state: any) => {
        form: {
            name: string
            age: number
        }
    }
    selectors: {
        form: (
            state: any,
            props?: any,
        ) => {
            name: string
            age: number
        }
    }
    sharedListeners: {}
    values: {
        form: {
            name: string
            age: number
        }
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalExtraInput: {
        form:
            | {
                  default?: Record<string, any>
                  submit?: (form: { name: string; age: number }) => void
              }
            | ((logic: anotherPluginLogicType) => {
                  default?: Record<string, any>
                  submit?: (form: { name: string; age: number }) => void
              })
    }
}
