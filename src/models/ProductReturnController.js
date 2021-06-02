import {listByParamUsingGET_1} from '@/services'

export default{
    namespace: 'ProductReturnController',
    state: {
           productReturnList: [],
    },
    effects: {
        *queryListByParamUsingGET_1({payload}, { call, put }){
            const res = yield call(listByParamUsingGET_1, payload);
            yield put({
                type: 'setListByParamUsingGET_1',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setListByParamUsingGET_1(state, { payload }){
            return{
                ...state,
                productReturnList: payload.result            
            }
        },
    },
}