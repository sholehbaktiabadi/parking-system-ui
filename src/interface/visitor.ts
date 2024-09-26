export interface Visitor{
    id: number
    uniqueId: string
    type: string
    price: number
    reason: string
    quantity: number
    grandTotal: number
    status: string
    timeUnit: string
    paymentType: string
    departedAt: Date
    createdAt: Date
    updatedAt: Date
}