// Generated by kea-typegen on Mon, 23 May 2022 22:29:51 GMT. DO NOT EDIT THIS FILE MANUALLY.

import type { Logic } from 'kea'

export interface typedFormDemoLogicType extends Logic {
    actionCreators: {
        submitForm: () => {
            type: 'submit form (typed-builder.typedFormDemoLogic)'
            payload: {
                value: boolean
            }
        }
    }
    actionKeys: {
        'submit form (typed-builder.typedFormDemoLogic)': 'submitForm'
    }
    actionTypes: {
        submitForm: 'submit form (typed-builder.typedFormDemoLogic)'
    }
    actions: {
        submitForm: () => void
    }
    defaults: {
        form: Record<string, any>
    }
    events: {}
    key: undefined
    listeners: {}
    path: ['typed-builder', 'typedFormDemoLogic']
    pathString: 'typed-builder.typedFormDemoLogic'
    props: Record<string, unknown>
    reducer: (
        state: any,
        action: any,
        fullState: any,
    ) => {
        form: Record<string, any>
    }
    reducers: {
        form: (state: Record<string, any>, action: any, fullState: any) => Record<string, any>
    }
    selector: (state: any) => {
        form: Record<string, any>
    }
    selectors: {
        form: (state: any, props?: any) => Record<string, any>
    }
    sharedListeners: {}
    values: {
        form: Record<string, any>
    }
    _isKea: true
    _isKeaWithKey: false
    __keaTypeGenInternalExtraInput: {
        form:
            | {
                  default?: Record<string, any>
                  submit?: (form: Record<string, any>) => void
              }
            | ((logic: typedFormDemoLogicType) => {
                  default?: Record<string, any>
                  submit?: (form: Record<string, any>) => void
              })
    }
}
