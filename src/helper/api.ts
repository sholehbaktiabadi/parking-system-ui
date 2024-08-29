import { AxiosResponse } from "axios";
import { APiResponse } from "../interface/response";
import { HttpStatusType } from "../enum/http";

export function getHttpStatus(httpStatus: number){
    var type : HttpStatusType = HttpStatusType.OK
    switch (httpStatus) {
        case 200:
        case 201:            
            type = HttpStatusType.OK
            break;
        case 400:
            type = HttpStatusType.BR
            break;
        case 401:
            type = HttpStatusType.UNA
            break;
        case 403:
            type = HttpStatusType.FDB
            break;
        case 404:
            type = HttpStatusType.NF
            break;
        default:
            type = HttpStatusType.ISE
            break;
    }
    return type
}

export function parseResponse(r: AxiosResponse<any, any>): APiResponse {
    const type = getHttpStatus(r.status)
    const response: APiResponse = {
        statusCode: r.status,
        message: r.data.message,
        type,
        total: r.data.total,
        totalPage: r.data.totalPage,
        isHasNextPage: r.data.isHasNextPage
    }
    return response
}