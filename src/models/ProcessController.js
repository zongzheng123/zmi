import {tmpUsingPOST,detailByInstanceIdUsingGET} from '@/services'

export default{
    namespace: 'ProcessController',
    state: {
           processAddTmp: "",
           processContract: {},
    },
    effects: {
        *queryTmpUsingPOST({payload}, { call, put }){
            const res = yield call(tmpUsingPOST, payload);
            yield put({
                type: 'setTmpUsingPOST',
                payload: res,
            })    
            return res
        },
        *queryDetailByInstanceIdUsingGET({payload}, { call, put }){
            const res = yield call(detailByInstanceIdUsingGET, payload);
            yield put({
                type: 'setDetailByInstanceIdUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setTmpUsingPOST(state, { payload }){
            return{
                ...state,
                processAddTmp: payload.result            
            }
        },
        setDetailByInstanceIdUsingGET(state, { payload }){
            return{
                ...state,
                processContract: payload.result            
            }
        },
    },
}