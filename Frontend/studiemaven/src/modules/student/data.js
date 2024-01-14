export const studentData = [{
    id: '1',
    name: 'Akhil',
    email: 'akhil@123.com',
    phone: '8086047283',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    status: 'COL',
    visaStatus: 'Appointemnt Scheduled',
    appointmentDate: '12/11/23',
    isPostponed : true,
    paymentStatus : 'Paid',
    deleteStatus: 'Pending'
}, {
    id: '1',
    name: 'Ram',
    agentName: 'Mustafa',
    leadOwner: 'Sreejith',
    university: 'EU Education',
    course: 'IBM',
    intake:'December/2023',
    status: 'UOL',
    visaStatus: 'Rejected',
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Akhil',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    status: 'Accepted',
    visaStatus: 'Pending',
    paymentStatus : 'Partially Paid'
}, {
    id: '1',
    name: 'Ron',
    agentName: 'Hidas',
    leadOwner: 'Sreejith',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'Rejected',
    paymentStatus : 'Partially Paid',    
    deleteStatus: 'Pending'
}, {
    id: '1',
    name: 'Aji',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'COL',
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Yzang',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'UOL',    
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Tony',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    visaStatus: 'Granted',
    course: 'IBM',
    intake: 'January/2023',
    status: 'Accepted',    
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Keerthan',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'Rejected',    
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Rijo',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake:'January/2023',
    visaStatus: 'Granted',
    status: 'COL',    
    paymentStatus : 'Paid'
}, {
    id: '1',
    name: 'Sam',
    agentName: 'Mustafa',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake:'January/2023',
    status: 'COL',
    visaStatus: 'Granted',  
    paymentStatus : 'Paid'
},]

export const student = {
    id: '1',
    name: 'Allen Mathew',
    address: 'qwerty',
    email: 'abc@gmail.com',
    secondaryEmail: 'xyz@gmail.com',
    phone: '8899776655',
    graduation: 'BCA',
    status: 'Document Updated',
    documents: [
        {
            documentName: 'Degree Certificate',
            id: '',
            path: '',
        },
        {
            documentName: 'Degree Certificate',
            id: '',
            path: '',
        }, ,
        {
            documentName: 'Degree Certificate',
            id: '',
            path: '',
        }, ,
        {
            documentName: 'Degree Certificate',
            id: '',
            path: '',
        }, ,
        {
            documentName: 'Degree Certificate',
            id: '',
            path: '',
        },
    ]
}
export const docTypes = [
    {
        documentName: '10th',
        id: '1'
    }, {
        documentName: '12th',
        id: '2'
    }, {
        documentName: 's S L C',
        id: '3'
    }, {
        documentName: 'Degree',
        id: '4'
    }, 

]
export const universityList = [
    {
        universityName: 'Berlin',
        id: '1'
    }, {
        universityName: 'AU',
        id: '2'
    }, {
        universityName: 'MG',
        id: '3'
    }, 

]
export const countries = [
    {
        countryName:'Germany',
        id: '1'
    }, {
        countryName: '12th',
        id: '2'
    },

]
export const paymentOptions = [
    {
        status:'Pending',
        color: 'red',
        id: '1'
    }, {
        status:'Paid',
        color: 'green',
        id: '1'
    },

]
export const statusOptions = [
    {
        status: 'Rejected',
        color: 'red',
        id: '1'
    },
    {
        status: 'Approved',
        color: 'green',
        id: '1'
    },

]
export const visaStatusOptions = [
    {
        status: 'Rejected',
        color: 'red',
        hasDate: false,
        id: '1'
    },
    {
        status: 'Approved',
        color: 'green',
        hasDate: true,
        id: '1'
    },

]
export const staffs = [
    {
        name: 'Sreejith',
        email: 's@s.com',
        phone: '8086047283',
        id: '1'
    },
]
export const documentsData = [
    {
        documentName : 'SSLC',
        modifiedDate : 'dd',
        documentNotes: 'Obtained 85%',
        verifyStatus: 'Pending'

    },
    {
        documentName : 'Degree',
        modifiedDate : 'dd',
        documentNotes: 'BCA Degree from Mg University',        
        verifyStatus: 'Pending'

    },
    {
        documentName : 'Work Exp',
        modifiedDate : 'dd',
        documentNotes: ''

    },
]