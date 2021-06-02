import {pageContractSelectUsingGET,getCkNumberUsingGET,listMappingUsingGET,pageByParamUsingGET_1,listProjectSelectUsingGET,pagePurCkUsingGET,pageRkSelectUsingGET,detailUsingGET_2} from '@/services'

export default{
    namespace: 'ProductCkController',
    state: {
           productCkContractSelect: [],
           productCkHead: {
	number: '',
	rckDate: ''
},
           productCkMappingList: [],
           productCkPage: [],
           productCkProjectSelect: [],
           productCkPubRkMappingPage: [],
           productCkRkSelectPage: [],
           productCk: {
	amount: undefined,
	chargePerson: '',
	chargePersonValue: '',
	ckDate: '',
	contractClassify: '',
	contractCode: '',
	contractId: undefined,
	contractName: '',
	creator: '',
	id: undefined,
	number: '',
	productCkMappingExtList: [],
	productCkMappingList: [],
	projectCode: '',
	projectId: undefined,
	projectName: '',
	quantity: undefined,
	type: '',
	typeValue: ''
},
    },
    effects: {
        *queryPageContractSelectUsingGET({payload}, { call, put }){
            const res = yield call(pageContractSelectUsingGET, payload);
            yield put({
                type: 'setPageContractSelectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryGetCkNumberUsingGET({payload}, { call, put }){
            const res = yield call(getCkNumberUsingGET, payload);
            yield put({
                type: 'setGetCkNumberUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListMappingUsingGET({payload}, { call, put }){
            const res = yield call(listMappingUsingGET, payload);
            yield put({
                type: 'setListMappingUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageByParamUsingGET_1({payload}, { call, put }){
            const res = yield call(pageByParamUsingGET_1, payload);
            yield put({
                type: 'setPageByParamUsingGET_1',
                payload: res,
            })    
            return res
        },
        *queryListProjectSelectUsingGET({payload}, { call, put }){
            const res = yield call(listProjectSelectUsingGET, payload);
            yield put({
                type: 'setListProjectSelectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPagePurCkUsingGET({payload}, { call, put }){
            const res = yield call(pagePurCkUsingGET, payload);
            yield put({
                type: 'setPagePurCkUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageRkSelectUsingGET({payload}, { call, put }){
            const res = yield call(pageRkSelectUsingGET, payload);
            yield put({
                type: 'setPageRkSelectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryDetailUsingGET_2({payload}, { call, put }){
            const res = yield call(detailUsingGET_2, payload);
            yield put({
                type: 'setDetailUsingGET_2',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setPageContractSelectUsingGET(state, { payload }){
            return{
                ...state,
                productCkContractSelect: payload.result            
            }
        },
        setGetCkNumberUsingGET(state, { payload }){
            return{
                ...state,
                productCkHead: payload.result            
            }
        },
        setListMappingUsingGET(state, { payload }){
            return{
                ...state,
                productCkMappingList: payload.result            
            }
        },
        setPageByParamUsingGET_1(state, { payload }){
            return{
                ...state,
                productCkPage: payload.result            
            }
        },
        setListProjectSelectUsingGET(state, { payload }){
            return{
                ...state,
                productCkProjectSelect: payload.result            
            }
        },
        setPagePurCkUsingGET(state, { payload }){
            return{
                ...state,
                productCkPubRkMappingPage: payload.result            
            }
        },
        setPageRkSelectUsingGET(state, { payload }){
            return{
                ...state,
                productCkRkSelectPage: payload.result            
            }
        },
        setDetailUsingGET_2(state, { payload }){
            return{
                ...state,
                productCk: payload.result            
            }
        },
    },
}