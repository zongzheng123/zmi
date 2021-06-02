import {listDocUsingGET} from '@/services'

export default{
    namespace: 'DocController',
    state: {
           docList: [],
    },
    effects: {
        *queryListDocUsingGET({payload}, { call, put }){
            const res = yield call(listDocUsingGET, payload);
            yield put({
                type: 'setListDocUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setListDocUsingGET(state, { payload }){
            return{
                ...state,
                docList: payload.result            
            }
        },
    },
}