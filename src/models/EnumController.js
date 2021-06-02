import {listEnumUsingGET} from '@/services'

export default{
    namespace: 'EnumController',
    state: {
           enumList: {},
    },
    effects: {
        *queryListEnumUsingGET({payload}, { call, put }){
            const res = yield call(listEnumUsingGET, payload);
            yield put({
                type: 'setListEnumUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setListEnumUsingGET(state, { payload }){
            return{
                ...state,
                enumList: payload.result            
            }
        },
    },
}