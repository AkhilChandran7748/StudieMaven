import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const addLead = params => {
    return httpCall({
        url: API_URL.ADD_LEAD,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const getLeads = params => {
    return httpCall({
        url: API_URL.GET_LEADS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const getNotes = params => {
    return httpCall({
        url: API_URL.GET_NOTES,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const addNote = params => {
    return httpCall({
        url: API_URL.ADD_NOTES,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const updateIELTS = params => {
    return httpCall({
        url: API_URL.UPDATE_IELTS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const updateLEAD = params => {
    return httpCall({
        url: API_URL.UPDATE_LEAD,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const searchLead = params => {
    return httpCall({
        url: API_URL.SEARCH_LEADS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
export const convertLead = params => {
    return httpCall({
        url: API_URL.CONVERT_LEADS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
}
