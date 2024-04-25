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