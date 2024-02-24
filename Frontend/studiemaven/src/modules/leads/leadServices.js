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