{{#imports}}
import {{module}} from '{{{from}}}'
{{/imports}}

export default{
    namespace: '{{moduleKey}}',
    state: {
        {{#states}}
           {{stateName}}: {{{value}}},
        {{/states}}
    },
    effects: {
        {{#apis}}
        *query{{apiNameUpper}}({payload}, { call, put }){
            const res = yield call({{apiName}}, payload);
            yield put({
                type: 'set{{apiNameUpper}}',
                payload: res,
            })    
            return res
        },
        {{/apis}}
    },
    reducers: {
        {{#apis}}
        set{{apiNameUpper}}(state, { payload }){
            return{
                ...state,
                {{responseName}}: payload.result            
            }
        },
        {{/apis}}  
    },
}