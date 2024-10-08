import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"

export const decodeJwt  = () => {
    const token = Cookies.get("jwt")
    if(!token) return null
    return jwtDecode(token)
}