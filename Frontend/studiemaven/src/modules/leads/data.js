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
    isPostponed: true,
}, {
    id: '1',
    name: 'Ram',
    agentName: 'Mustafa',
    leadOwner: 'Sreejith',
    university: 'EU Education',
    course: 'IBM',
    intake: 'December/2023',
    status: 'UOL',
    visaStatus: 'Rejected'
}, {
    id: '1',
    name: 'Akhil',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    status: 'Accepted',
    visaStatus: 'Pending'
}, {
    id: '1',
    name: 'Ron',
    agentName: 'Hidas',
    leadOwner: 'Sreejith',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'Rejected'
}, {
    id: '1',
    name: 'Aji',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'COL'
}, {
    id: '1',
    name: 'Yzang',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'UOL'
}, {
    id: '1',
    name: 'Tony',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    visaStatus: 'Granted',
    course: 'IBM',
    intake: 'January/2023',
    status: 'Accepted'
}, {
    id: '1',
    name: 'Keerthan',
    agentName: 'Own',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'Rejected'
}, {
    id: '1',
    name: 'Rijo',
    agentName: 'Hidas',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    visaStatus: 'Granted',
    status: 'COL'
}, {
    id: '1',
    name: 'Sam',
    agentName: 'Mustafa',
    leadOwner: 'Varda',
    university: 'EU Education',
    course: 'IBM',
    intake: 'January/2023',
    status: 'COL',
    visaStatus: 'Granted',
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
export const countries = [
    {
        countryName: 'Germany',
        id: '1'
    }, {
        countryName: '12th',
        id: '2'
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
        documentName: 'SSLC',
        modifiedDate: 'dd',
        documentNotes: 'Obtained 85%'

    },
    {
        documentName: 'Degree',
        modifiedDate: 'dd',
        documentNotes: 'BCA Degree from Mg University'

    },
    {
        documentName: 'Work Exp',
        modifiedDate: 'dd',
        documentNotes: ''

    },
]

export const leadsData = [
    {
        name: 'Helen',
        contact: '9966554411',
        qualification: 'MCA',
        APS: 'Yes',
        ielts: {
            isQualified: true,
            read: 7,
            listen: 8,
            write: 9,
            speak: 4,
            expiryData: '12/12/23'
        },
        leadOwner: 'Varda',
        country: 'Germany',
        notes: [
            {
                author: 'Sreejith',
                time: '12/11/23 13:10 PM',
                content: 'Looking for IBM In Berlin university'
            }
        ],
        reference: 'Social Media',

    },
    {
        name: 'Ron',
        contact: '9966554411',
        qualification: 'MCA',
        APS: 'Yes',
        ielts: {
            isQualified: false,
        },
        leadOwner: 'Varda',
        country: 'Germany',
        notes: [
            {
                author: 'Sreejith',
                time: '12/11/23 13:10 PM',
                content: 'Looking for IBM In Berlin university'
            }
        ],
        reference: 'Social Media',

    }
]