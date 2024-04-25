import { httpCall } from "../../Services/HttpService";
import { API_URL } from "../../Utils/Urls";

export const getStudents = params => {
    return httpCall({
        url: API_URL.GET_STUDENTS,
        method: "post",
        data: params
    }).then(response => {
        return response;
    });
};