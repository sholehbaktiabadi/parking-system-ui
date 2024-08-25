export interface APiResponse{
        statusCode: number
        message: any | any[]
        isSuccess: boolean 
        total?: number
        totalPage?: number
        isHasNextPage?: boolean
}