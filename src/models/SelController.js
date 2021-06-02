import {pageContractByParamUsingGET,pageSupplierByParamUsingGET} from '@/services'

export default{
    namespace: 'SelController',
    state: {
           selContract: [],
           selSupplier: [],
    },
    effects: {
        *queryPageContractByParamUsingGET({payload}, { call, put }){
            const res = yield call(pageContractByParamUsingGET, payload);
            yield put({
                type: 'setPageContractByParamUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageSupplierByParamUsingGET({payload}, { call, put }){
            const res = yield call(pageSupplierByParamUsingGET, payload);
            yield put({
                type: 'setPageSupplierByParamUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setPageContractByParamUsingGET(state, { payload }){
            return{
                ...state,
                selContract: payload.result            
            }
        },
        setPageSupplierByParamUsingGET(state, { payload }){
            return{
                ...state,
                selSupplier: payload.result            
            }
        },
    },
}