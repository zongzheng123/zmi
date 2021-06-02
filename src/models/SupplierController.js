import {pageByParamUsingGET_3,pageByParamUsingGET_4,pageProjectUsingGET,pageRkLogUsingGET_1,pageThByParamUsingGET,detailUsingGET_4} from '@/services'

export default{
    namespace: 'SupplierController',
    state: {
           supplierLogPage: [],
           supplierPage: [],
           supplierProjectPage: [],
           supplierRkLogPage: [],
           supplierThPage: [],
           supplier: {
	address: '',
	aptitudeList: [],
	bizLicense: '',
	bizLicenseAddress: '',
	bizLicenseCity: '',
	bizLicenseCounty: '',
	bizLicenseEndDate: '',
	bizLicenseImg: '',
	bizLicenseProvince: '',
	bizLicenseStartDate: '',
	certType: '',
	certTypeValue: '',
	city: '',
	comType: '',
	comTypeValue: '',
	contactPerson: '',
	contactTel: '',
	county: '',
	creator: '',
	dockPerson: '',
	dockPersonValue: '',
	dockTel: '',
	id: undefined,
	idCardList: [],
	idCards: '',
	legalPersonImgList: [],
	legalPersonImgs: '',
	legalPersonName: '',
	level: '',
	levelValue: '',
	mainProduct: '',
	modifier: '',
	name: '',
	otherCertType: '',
	province: '',
	remark: '',
	source: '',
	status: '',
	statusValue: '',
	supplierBankList: [],
	type: '',
	typeValue: ''
},
    },
    effects: {
        *queryPageByParamUsingGET_3({payload}, { call, put }){
            const res = yield call(pageByParamUsingGET_3, payload);
            yield put({
                type: 'setPageByParamUsingGET_3',
                payload: res,
            })    
            return res
        },
        *queryPageByParamUsingGET_4({payload}, { call, put }){
            const res = yield call(pageByParamUsingGET_4, payload);
            yield put({
                type: 'setPageByParamUsingGET_4',
                payload: res,
            })    
            return res
        },
        *queryPageProjectUsingGET({payload}, { call, put }){
            const res = yield call(pageProjectUsingGET, payload);
            yield put({
                type: 'setPageProjectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageRkLogUsingGET_1({payload}, { call, put }){
            const res = yield call(pageRkLogUsingGET_1, payload);
            yield put({
                type: 'setPageRkLogUsingGET_1',
                payload: res,
            })    
            return res
        },
        *queryPageThByParamUsingGET({payload}, { call, put }){
            const res = yield call(pageThByParamUsingGET, payload);
            yield put({
                type: 'setPageThByParamUsingGET',
                payload: res,
            })    
            return res
        },
        *queryDetailUsingGET_4({payload}, { call, put }){
            const res = yield call(detailUsingGET_4, payload);
            yield put({
                type: 'setDetailUsingGET_4',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setPageByParamUsingGET_3(state, { payload }){
            return{
                ...state,
                supplierLogPage: payload.result            
            }
        },
        setPageByParamUsingGET_4(state, { payload }){
            return{
                ...state,
                supplierPage: payload.result            
            }
        },
        setPageProjectUsingGET(state, { payload }){
            return{
                ...state,
                supplierProjectPage: payload.result            
            }
        },
        setPageRkLogUsingGET_1(state, { payload }){
            return{
                ...state,
                supplierRkLogPage: payload.result            
            }
        },
        setPageThByParamUsingGET(state, { payload }){
            return{
                ...state,
                supplierThPage: payload.result            
            }
        },
        setDetailUsingGET_4(state, { payload }){
            return{
                ...state,
                supplier: payload.result            
            }
        },
    },
}