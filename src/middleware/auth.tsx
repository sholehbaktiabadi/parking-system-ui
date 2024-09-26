import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

export const AuthWrapper: React.FC<({ children: ReactNode })> = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get("jwt")
        if (!token) return navigate("/auth/login")
    }, [navigate])
    return <>{children}</>
}