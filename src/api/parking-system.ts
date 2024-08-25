import axios from "axios";
import { env } from "../config/env";
import { parseResponse } from "../helper/api";

export class ParkingSystemService {
    static async getServerHealth() {
        return await axios.get(env.VITE_PARKING_SYSTEM_URL)
    }

    static async getVisitor() {
        return await axios.get(env.VITE_PARKING_SYSTEM_URL + '/visitor', { params: { "limit": "10", "page": "1", "type": "SCOOTER" }, headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFiYSIsImVtYWlsIjoic2hvbGVoYmFrdGlhYmFkaUBnbWFpbC5jb20iLCJyb2xlIjoiU1VQRVJfVVNFUiIsInN1YnNjcmlwdGlvbiI6Ik5PTkUiLCJpYXQiOjE3MjQ1NzU1MDN9.jAkr_-SI2PItNs4B1c_dmKmLeyTufph11ZdROjd5I0U" } })
    }

    static async getDetail(id: number) {
        const data = await axios.get(env.VITE_PARKING_SYSTEM_URL + '/visitor/' + id, { headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFiYSIsImVtYWlsIjoic2hvbGVoYmFrdGlhYmFkaUBnbWFpbC5jb20iLCJyb2xlIjoiU1VQRVJfVVNFUiIsInN1YnNjcmlwdGlvbiI6Ik5PTkUiLCJpYXQiOjE3MjQ1NzU1MDN9.jAkr_-SI2PItNs4B1c_dmKmLeyTufph11ZdROjd5I0U" } })
        const parse = parseResponse(data)
        return parse
    }
}