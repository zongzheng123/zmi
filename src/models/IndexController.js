import {pageContractUsingGET,getIndexHeadUsingGET,pagePaymentUsingGET,pageProductUsingGET,pageReceRkUsingGET,pageRkUsingGET} from '@/services'

export default{
    namespace: 'IndexController',
    state: {
           indexContract: [],
           indexHead: {
	contractDayAmount: undefined,
	contractList: [],
	contractQoq: undefined,
	contractTotalAmount: undefined,
	contractYoy: undefined,
	paymentDayAmount: undefined,
	paymentList: [],
	paymentQoq: undefined,
	paymentTotalAmount: undefined,
	paymentYoy: undefined,
	receDayAmount: undefined,
	receList: [],
	receQoq: undefined,
	receTotalAmount: undefined,
	receYoy: undefined,
	rkDayAmount: undefined,
	rkList: [],
	rkQoq: undefined,
	rkTotalAmount: undefined,
	rkYoy: undefined
},
           indexPayment: [],
           indexProduct: [],
           indexReceiptRk: [],
           indexRk: [],
    },
    effects: {
        *queryPageContractUsingGET({payload}, { call, put }){
            const res = yield call(pageContractUsingGET, payload);
            yield put({
                type: 'setPageContractUsingGET',
                payload: res,
            })    
            return res
        },
        *queryGetIndexHeadUsingGET({payload}, { call, put }){
            const res = yield call(getIndexHeadUsingGET, payload);
            yield put({
                type: 'setGetIndexHeadUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPagePaymentUsingGET({payload}, { call, put }){
            const res = yield call(pagePaymentUsingGET, payload);
            yield put({
                type: 'setPagePaymentUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageProductUsingGET({payload}, { call, put }){
            const res = yield call(pageProductUsingGET, payload);
            yield put({
                type: 'setPageProductUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageReceRkUsingGET({payload}, { call, put }){
            const res = yield call(pageReceRkUsingGET, payload);
            yield put({
                type: 'setPageReceRkUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageRkUsingGET({payload}, { call, put }){
            const res = yield call(pageRkUsingGET, payload);
            yield put({
                type: 'setPageRkUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setPageContractUsingGET(state, { payload }){
            return{
                ...state,
                indexContract: payload.result            
            }
        },
        setGetIndexHeadUsingGET(state, { payload }){
            return{
                ...state,
                indexHead: payload.result            
            }
        },
        setPagePaymentUsingGET(state, { payload }){
            return{
                ...state,
                indexPayment: payload.result            
            }
        },
        setPageProductUsingGET(state, { payload }){
            return{
                ...state,
                indexProduct: payload.result            
            }
        },
        setPageReceRkUsingGET(state, { payload }){
            return{
                ...state,
                indexReceiptRk: payload.result            
            }
        },
        setPageRkUsingGET(state, { payload }){
            return{
                ...state,
                indexRk: payload.result            
            }
        },
    },
}