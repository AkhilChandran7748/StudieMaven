import { httpCall, httpUpload } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const getAllDocuments = params => {
    return httpCall({
        url: API_URL.GET_ALL_DOCUMENTS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};
export const uploadDocuments = params => {
    return httpUpload({
        url: API_URL.UPLOAD_DOCUMENT,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};

