import {getBisContractUsingGET,getChangeContractVOUsingGET,pageMainContractProjectUsingGET,mobileContractDetailUsingGET,pageByParamUsingGET,listByParamUsingGET,pageProjectByParamUsingGET,saveUsingPOST,updateUsingPOST,pageLogUsingGET,listProcessHistoryUsingGET,detailUsingGET,checkApprovalUsingGET,rckCompareUsingGET} from '@/services'

export default{
    namespace: 'ContractController',
    state: {
           contractBisType: "",
           contractChangeVo: {
	changeContractAmount: undefined,
	changeContractList: [],
	mainContractAmount: undefined,
	totalContractAmount: undefined
},
           contractMainProjectSelect: [],
           contractMobileDetail: {
	amount: undefined,
	arrival: '',
	arrivalValue: '',
	ascription: '',
	changeContractList: [],
	changeReason: '',
	contract: {},
	contractCode: '',
	contractName: '',
	contractProcess: '',
	contractProcessValue: '',
	contractProjectExtList: [],
	contractType: '',
	createTime: '',
	creator: '',
	depart: '',
	fatherId: undefined,
	fileList: [],
	id: undefined,
	instanceId: '',
	instanceStatus: '',
	instanceStatusValue: '',
	originAmount: undefined,
	pages: undefined,
	paidAmount: undefined,
	paidPer: '',
	payProcess: '',
	payProcessValue: '',
	payWay: '',
	projectList: [],
	purchaseClassify: '',
	purchaseClassifyValue: '',
	purchaseSubType: '',
	purchaseType: '',
	purchaseTypeValue: '',
	purchaser: '',
	receRkExcelUrl: '',
	rkExcelUrl: '',
	signDate: '',
	status: '',
	statusValue: '',
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
		city: '',
		comType: '',
		contactPerson: '',
		contactTel: '',
		county: '',
		creator: '',
		dockPerson: '',
		dockTel: '',
		id: undefined,
		idCards: '',
		legalPersonImgs: '',
		legalPersonName: '',
		level: '',
		mainProduct: '',
		modifier: '',
		name: '',
		otherCertType: '',
		province: '',
		remark: '',
		source: '',
		status: '',
		supplierBankList: [],
		type: ''
	},
	supplierId: undefined,
	taskId: undefined,
	totalAmount: undefined,
	warrantyEndTime: ''
},
           contractPage: [],
           contractProductList: [],
           contractProjectPage: [],
           contractSave: {
	createTime: '',
	creator: '',
	defId: '',
	defaultCcs: [],
	extFormProperties: {},
	id: '',
	remark: '',
	thirdApprovers: [],
	title: '',
	updateTime: ''
},
           contractUpdate: {},
           contractLogPage: [],
           contractProcessHistory: [],
           contract: {
	amount: undefined,
	arrival: '',
	ascription: '',
	changeReason: '',
	contractCode: '',
	contractName: '',
	contractProcess: '',
	contractProjectExtList: [],
	contractType: '',
	contractTypeValue: '',
	createTime: '',
	creator: '',
	creatorValue: '',
	depart: '',
	departValue: '',
	fatherId: undefined,
	fileList: [],
	id: undefined,
	instanceId: '',
	instanceStatus: '',
	instanceStatusValue: '',
	originAmount: undefined,
	pages: undefined,
	paidAmount: undefined,
	paidPer: '',
	payProcess: '',
	payWay: '',
	projectList: [],
	purchaseClassify: '',
	purchaseClassifyValue: '',
	purchaseSubType: '',
	purchaseSubTypeValue: '',
	purchaseType: '',
	purchaseTypeValue: '',
	purchaser: '',
	purchaserValue: '',
	receRkExcelUrl: '',
	rkExcelUrl: '',
	signDate: '',
	status: '',
	statusValue: '',
	supplier: {},
	supplierId: undefined,
	taskId: undefined,
	totalAmount: undefined,
	warrantyEndTime: ''
},
           contractCheckApproval: false,
           contractRckCompare: [],
    },
    effects: {
        *queryGetBisContractUsingGET({payload}, { call, put }){
            const res = yield call(getBisContractUsingGET, payload);
            yield put({
                type: 'setGetBisContractUsingGET',
                payload: res,
            })    
            return res
        },
        *queryGetChangeContractVOUsingGET({payload}, { call, put }){
            const res = yield call(getChangeContractVOUsingGET, payload);
            yield put({
                type: 'setGetChangeContractVOUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageMainContractProjectUsingGET({payload}, { call, put }){
            const res = yield call(pageMainContractProjectUsingGET, payload);
            yield put({
                type: 'setPageMainContractProjectUsingGET',
                payload: res,
            })    
            return res
        },
        *queryMobileContractDetailUsingGET({payload}, { call, put }){
            const res = yield call(mobileContractDetailUsingGET, payload);
            yield put({
                type: 'setMobileContractDetailUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageByParamUsingGET({payload}, { call, put }){
            const res = yield call(pageByParamUsingGET, payload);
            yield put({
                type: 'setPageByParamUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListByParamUsingGET({payload}, { call, put }){
            const res = yield call(listByParamUsingGET, payload);
            yield put({
                type: 'setListByParamUsingGET',
                payload: res,
            })    
            return res
        },
        *queryPageProjectByParamUsingGET({payload}, { call, put }){
            const res = yield call(pageProjectByParamUsingGET, payload);
            yield put({
                type: 'setPageProjectByParamUsingGET',
                payload: res,
            })    
            return res
        },
        *querySaveUsingPOST({payload}, { call, put }){
            const res = yield call(saveUsingPOST, payload);
            yield put({
                type: 'setSaveUsingPOST',
                payload: res,
            })    
            return res
        },
        *queryUpdateUsingPOST({payload}, { call, put }){
            const res = yield call(updateUsingPOST, payload);
            yield put({
                type: 'setUpdateUsingPOST',
                payload: res,
            })    
            return res
        },
        *queryPageLogUsingGET({payload}, { call, put }){
            const res = yield call(pageLogUsingGET, payload);
            yield put({
                type: 'setPageLogUsingGET',
                payload: res,
            })    
            return res
        },
        *queryListProcessHistoryUsingGET({payload}, { call, put }){
            const res = yield call(listProcessHistoryUsingGET, payload);
            yield put({
                type: 'setListProcessHistoryUsingGET',
                payload: res,
            })    
            return res
        },
        *queryDetailUsingGET({payload}, { call, put }){
            const res = yield call(detailUsingGET, payload);
            yield put({
                type: 'setDetailUsingGET',
                payload: res,
            })    
            return res
        },
        *queryCheckApprovalUsingGET({payload}, { call, put }){
            const res = yield call(checkApprovalUsingGET, payload);
            yield put({
                type: 'setCheckApprovalUsingGET',
                payload: res,
            })    
            return res
        },
        *queryRckCompareUsingGET({payload}, { call, put }){
            const res = yield call(rckCompareUsingGET, payload);
            yield put({
                type: 'setRckCompareUsingGET',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setGetBisContractUsingGET(state, { payload }){
            return{
                ...state,
                contractBisType: payload.result            
            }
        },
        setGetChangeContractVOUsingGET(state, { payload }){
            return{
                ...state,
                contractChangeVo: payload.result            
            }
        },
        setPageMainContractProjectUsingGET(state, { payload }){
            return{
                ...state,
                contractMainProjectSelect: payload.result            
            }
        },
        setMobileContractDetailUsingGET(state, { payload }){
            return{
                ...state,
                contractMobileDetail: payload.result            
            }
        },
        setPageByParamUsingGET(state, { payload }){
            return{
                ...state,
                contractPage: payload.result            
            }
        },
        setListByParamUsingGET(state, { payload }){
            return{
                ...state,
                contractProductList: payload.result            
            }
        },
        setPageProjectByParamUsingGET(state, { payload }){
            return{
                ...state,
                contractProjectPage: payload.result            
            }
        },
        setSaveUsingPOST(state, { payload }){
            return{
                ...state,
                contractSave: payload.result            
            }
        },
        setUpdateUsingPOST(state, { payload }){
            return{
                ...state,
                contractUpdate: payload.result            
            }
        },
        setPageLogUsingGET(state, { payload }){
            return{
                ...state,
                contractLogPage: payload.result            
            }
        },
        setListProcessHistoryUsingGET(state, { payload }){
            return{
                ...state,
                contractProcessHistory: payload.result            
            }
        },
        setDetailUsingGET(state, { payload }){
            return{
                ...state,
                contract: payload.result            
            }
        },
        setCheckApprovalUsingGET(state, { payload }){
            return{
                ...state,
                contractCheckApproval: payload.result            
            }
        },
        setRckCompareUsingGET(state, { payload }){
            return{
                ...state,
                contractRckCompare: payload.result            
            }
        },
    },
}