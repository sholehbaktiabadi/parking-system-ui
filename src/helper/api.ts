import { AxiosResponse } from "axios";
import { APiResponse } from "../interface/response";

export function parseResponse(r: AxiosResponse<any, any>): APiResponse {
    var isSuccess : boolean = true
    if (r.status !== 200) isSuccess = true 
    const response: APiResponse = {
        statusCode: r.status,
        message: r.data.message,
        isSuccess,
        total: r.data.total,
        totalPage: r.data.totalPage,
        isHasNextPage: r.data.isHasNextPage
    }
    return response
}