import axios from "axios";
import { env } from "../config/env";
import { parseResponse } from "../helper/api";
import Cookies from "js-cookie";

export class ParkingSystemService {
    static token = `Bearer ${Cookies.get("jwt")}`
    static async getServerHealth() {
        return await axios.get(env.VITE_PARKING_SYSTEM_URL)
    }

    static async verifyToken() {
        const data = await axios.get(env.VITE_PARKING_SYSTEM_URL, { headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

    static async serverHealth() {
        const data = await axios.get(env.VITE_PARKING_SYSTEM_URL)
        const parse = parseResponse(data)
        return parse
    }

    static async getVisitor() {
        const queryParams = { limit: 10, page: 1 }
        const data = await axios.get(env.VITE_PARKING_SYSTEM_URL + '/visitor', { params: queryParams, headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

    static async getDetail(id: number) {
        const data = await axios.get(env.VITE_PARKING_SYSTEM_URL + '/visitor/' + id, { headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

    static async setAsDeparted(id: number, visitor: any) {
        const body = {...visitor}
        const data = await axios.patch(env.VITE_PARKING_SYSTEM_URL + '/visitor/' + id, body ,{ headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

    static async login(email: string, password: string) {
        const body = { email, password }
        const data = await axios.post(env.VITE_PARKING_SYSTEM_URL + '/auth/login', body ,{ headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

    static async createVisitor(uniqueId: string, type: string) {
        const body = { uniqueId, type }
        const data = await axios.post(env.VITE_PARKING_SYSTEM_URL + '/visitor', body ,{ headers: { Authorization: ParkingSystemService.token } })
        const parse = parseResponse(data)
        return parse
    }

}