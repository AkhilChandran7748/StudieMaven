import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const getCountry = params => {
    return httpCall({
        url: API_URL.GET_COUNTRIES,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addCountry = params => {
    return httpCall({
        url: API_URL.ADD_COUNTRY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateCountry = params => {
    return httpCall({
        url: API_URL.UPDATE_COUNTRY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getPaymentStatus = params => {
    return httpCall({
        url: API_URL.GET_PAYMENT_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const addPaymentStatus = params => {
    return httpCall({
        url: API_URL.ADD_PAYMENT_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getColors = params => {
    return httpCall({
        url: API_URL.GET_ALL_COLORS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addColors = params => {
    return httpCall({
        url: API_URL.ADD_COLOR,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateColor= params => {
    return httpCall({
        url: API_URL.UPDATE_COLOR,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getStatus = params => {
    return httpCall({
        url: API_URL.GET_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addStatus = params => {
    return httpCall({
        url: API_URL.ADD_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateStatus= params => {
    return httpCall({
        url: API_URL.UPDATE_COLOR,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getVisaStatus = params => {
    return httpCall({
        url: API_URL.GET_VISA_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addVisaStatus = params => {
    return httpCall({
        url: API_URL.ADD_VISA_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateVisaStatus= params => {
    return httpCall({
        url: API_URL.UPDATE_VISA_STATUS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

export const getAgents = params => {
    return httpCall({
        url: API_URL.GET_AGENTS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addAgents = params => {
    return httpCall({
        url: API_URL.ADD_AGENT,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateAgent= params => {
    return httpCall({
        url: API_URL.UPDATE_AGENT,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const getUniversities = params => {
    return httpCall({
        url: API_URL.GET_UNIVERSITY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addUniversity = params => {
    return httpCall({
        url: API_URL.ADD_UNIVERSITY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const updateUniversity= params => {
    return httpCall({
        url: API_URL.UPDATE_UNIVERSITY,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
