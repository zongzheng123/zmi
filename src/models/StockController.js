import {pageCkLogUsingGET,pageRkLogUsingGET,pageStockUsingGET} from '@/services'

export default{
    namespace: 'StockController',
    state: {
           productCkLog: [],
           productRkLog: [],
           productStockPage: [],
    },
    effects: {
        *queryPageCkLogUsingGET({payload}, { call, put }){
            const res = yield call(pageCkLogUsingGET, payload);
            yield put({
                type: 'setPageCkLogUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageRkLogUsingGET({payload}, { call, put }){
            const res = yield call(pageRkLogUsingGET, payload);
            yield put({
                type: 'setPageRkLogUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageStockUsingGET({payload}, { call, put }){
            const res = yield call(pageStockUsingGET, payload);
            yield put({
                type: 'setPageStockUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setPageCkLogUsingGET(state, { payload }){
            return{
                ...state,
                productCkLog: payload.result            
            }
        },
        setPageRkLogUsingGET(state, { payload }){
            return{
                ...state,
                productRkLog: payload.result            
            }
        },
        setPageStockUsingGET(state, { payload }){
            return{
                ...state,
                productStockPage: payload.result            
            }
        },
    },
}