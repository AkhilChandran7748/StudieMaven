import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const getStaffs = params => {
    return httpCall({
        url: API_URL.GET_STAFFS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const addStaffs = params => {
    return httpCall({
        url: API_URL.ADD_STAFFS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};