import axios from 'axios'

export const ServiceApi = axios.create({
  baseURL: 'http://docflow-web.tk/api',
  headers: {
    'Content-Type': 'application/json',
'Accept': 'application/json'
  },
  
});


export const authorizeServiceApi = (token) => {
  ServiceApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const unauthorizeServiceApi = () => {
  ServiceApi.defaults.headers.common['Authorization'] = undefined;
};


export const routes = {
    userLogin : '/Home/Login',
//     createUser : '/Home/CreateUser',
//     userLogout : '/Home/Logout',
//     createExpenseDocument : "/Documents/Create/ExpenseDocument",
//     createExpenseType: "/ExpenseType/Create",
//     getAllExpenseTypeDocumentForReview: "/Documents/GetExpenseTypeDocsForReview",
//     getAllAvailableReviwers: "/Documents/GetAvailableReviewers",
//     createNonExpenseDocument: "/Documents/Create/NonExpenseDocument",
//     getAllDocumentTemplate: 'DocumentType/GetAllDocumentTemplate',
//     getAllReports: "/Reports/GetReports",
//     getPendingApprovals: "/Approvals/GetAwaitingApprovals",
//     getDashboardMetrics: "/Home/Dashboard/metrics",
//     generateRequestNo: "Documents/RequestNumber",
//     createCreditRequest: "/Documents/Create/CreditRequest",
//     getAllDocuments: "/Documents/GetAllDocuments",
//     getAllAwaitingReviews: "/Review/GetAwaitingReview",
//     postReview: "/Approvals/ReviewDocument",
//     getApprovalsAuditInfo: "Approvals/GetApproverAudit",
}