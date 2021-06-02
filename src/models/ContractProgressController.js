import {detailUsingGET_1} from '@/services'

export default{
    namespace: 'ContractProgressController',
    state: {
           contractProgressDetail: {
	amount: undefined,
	arrival: '',
	arrivalValue: '',
	ascription: '',
	cargoReceiptList: [],
	changeReason: '',
	contractCode: '',
	contractName: '',
	contractProcess: '',
	contractProcessValue: '',
	contractType: '',
	createTime: '',
	creator: '',
	depart: '',
	fatherId: undefined,
	fileList: [],
	id: undefined,
	instanceId: '',
	operator: '',
	originAmount: undefined,
	pages: undefined,
	paidAmount: undefined,
	paidPer: '',
	payProcess: '',
	payProcessValue: '',
	payWay: '',
	paymentLogExtList: [],
	productRkExtList: [],
	projectList: [],
	purchaseClassify: '',
	purchaseSubType: '',
	purchaseType: '',
	purchaser: '',
	receRkExcelUrl: '',
	receiptRkExtList: [],
	receiptRkList: [],
	rkExcelUrl: '',
	signDate: '',
	status: '',
	supplierId: undefined,
	taskId: undefined,
	totalAmount: undefined,
	warrantyEndTime: ''
},
    },
    effects: {
        *queryDetailUsingGET_1({payload}, { call, put }){
            const res = yield call(detailUsingGET_1, payload);
            yield put({
                type: 'setDetailUsingGET_1',
                payload: res,
            })    
            return res
        },
    },
    reducers: {
        setDetailUsingGET_1(state, { payload }){
            return{
                ...state,
                contractProgressDetail: payload.result            
            }
        },
    },
}