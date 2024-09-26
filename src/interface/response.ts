export interface APiResponse{
        statusCode: number
        message: any | any[]
        type: string 
        total?: number
        totalPage?: number
        isHasNextPage?: boolean
}