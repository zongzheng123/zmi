import {parseListUsingPOST} from '@/services'

export default{
    namespace: 'ExcelController',
    state: {
           excelParse: [],
    },
    effects: {
        *queryParseListUsingPOST({payload}, { call, put }){
            const res = yield call(parseListUsingPOST, payload);
            yield put({
                type: 'setParseListUsingPOST',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setParseListUsingPOST(state, { payload }){
            return{
                ...state,
                excelParse: payload.result            
            }
        },
    },
}