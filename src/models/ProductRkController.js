import {contractSelectUsingGET,listProjectByMainContractIdUsingGET,getNumberUsingGET,listMappingUsingGET_1,pageByParamUsingGET_2,listByParamUsingGET_2,detailUsingGET_3} from '@/services'

export default{
    namespace: 'ProductRkController',
    state: {
           productRkContractSelect: [],
           productRkContractProjectList: [],
           productRkHead: {},
           productRkMappingList: [],
           productRkPage: [],
           productRkProductList: [],
           productRk: {
	amount: undefined,
	buyer: '',
	buyerValue: '',
	contractClassify: '',
	contractCode: '',
	contractId: undefined,
	contractName: '',
	creator: '',
	id: undefined,
	keeper: '',
	keeperValue: '',
	number: '',
	productNames: '',
	productRkMappingList: [],
	projectCode: '',
	projectId: undefined,
	projectName: '',
	quantity: undefined,
	rkDate: '',
	supplierValue: '',
	unCkAmount: undefined,
	unCkQuantity: undefined,
	warehouse: ''
},
    },
    effects: {
        *queryContractSelectUsingGET({payload}, { call, put }){
            const res = yield call(contractSelectUsingGET, payload);
            yield put({
                type: 'setContractSelectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListProjectByMainContractIdUsingGET({payload}, { call, put }){
            const res = yield call(listProjectByMainContractIdUsingGET, payload);
            yield put({
                type: 'setListProjectByMainContractIdUsingGET',
                payload: res,
            })    
            return res
        },
        *queryGetNumberUsingGET({payload}, { call, put }){
            const res = yield call(getNumberUsingGET, payload);
            yield put({
                type: 'setGetNumberUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListMappingUsingGET_1({payload}, { call, put }){
            const res = yield call(listMappingUsingGET_1, payload);
            yield put({
                type: 'setListMappingUsingGET_1',
                payload: res,
            })    
            return res
        },
        *queryPageByParamUsingGET_2({payload}, { call, put }){
            const res = yield call(pageByParamUsingGET_2, payload);
            yield put({
                type: 'setPageByParamUsingGET_2',
                payload: res,
            })    
            return res
        },
        *queryListByParamUsingGET_2({payload}, { call, put }){
            const res = yield call(listByParamUsingGET_2, payload);
            yield put({
                type: 'setListByParamUsingGET_2',
                payload: res,
            })    
            return res
        },
        *queryDetailUsingGET_3({payload}, { call, put }){
            const res = yield call(detailUsingGET_3, payload);
            yield put({
                type: 'setDetailUsingGET_3',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setContractSelectUsingGET(state, { payload }){
            return{
                ...state,
                productRkContractSelect: payload.result            
            }
        },
        setListProjectByMainContractIdUsingGET(state, { payload }){
            return{
                ...state,
                productRkContractProjectList: payload.result            
            }
        },
        setGetNumberUsingGET(state, { payload }){
            return{
                ...state,
                productRkHead: payload.result            
            }
        },
        setListMappingUsingGET_1(state, { payload }){
            return{
                ...state,
                productRkMappingList: payload.result            
            }
        },
        setPageByParamUsingGET_2(state, { payload }){
            return{
                ...state,
                productRkPage: payload.result            
            }
        },
        setListByParamUsingGET_2(state, { payload }){
            return{
                ...state,
                productRkProductList: payload.result            
            }
        },
        setDetailUsingGET_3(state, { payload }){
            return{
                ...state,
                productRk: payload.result            
            }
        },
    },
}