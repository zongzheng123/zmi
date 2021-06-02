import {listProductUsingGET} from '@/services'

export default{
    namespace: 'BizController',
    state: {
           bizProductList: [],
    },
    effects: {
        *queryListProductUsingGET({payload}, { call, put }){
            const res = yield call(listProductUsingGET, payload);
            yield put({
                type: 'setListProductUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setListProductUsingGET(state, { payload }){
            return{
                ...state,
                bizProductList: payload.result            
            }
        },
    },
}