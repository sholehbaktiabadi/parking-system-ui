import { JwtPayload } from "jwt-decode"


export interface User extends JwtPayload {
    id?: number
    
    name?: string
    
    email?: string
    
    role?: string
    
    subscription?: string
}