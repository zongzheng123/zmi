import {listByMainContactIdUsingGET,listUsingGET} from '@/services'

export default{
    namespace: 'ContractFileController',
    state: {
           contractFileContractList: [],
           contractFileList: [],
    },
    effects: {
        *queryListByMainContactIdUsingGET({payload}, { call, put }){
            const res = yield call(listByMainContactIdUsingGET, payload);
            yield put({
                type: 'setListByMainContactIdUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListUsingGET({payload}, { call, put }){
            const res = yield call(listUsingGET, payload);
            yield put({
                type: 'setListUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setListByMainContactIdUsingGET(state, { payload }){
            return{
                ...state,
                contractFileContractList: payload.result            
            }
        },
        setListUsingGET(state, { payload }){
            return{
                ...state,
                contractFileList: payload.result            
            }
        },
    },
}