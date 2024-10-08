import { useEffect, useState } from "react"
import { ParkingSystemService } from "../api/parking-system"
import { getStatusColor } from "../helper/transaction"
import { APiResponse } from "../interface/response"
import { CurrencyFmt } from "../helper/formatter"

function VisitorList() {
  const [retrievedData, setRetrievedData] = useState<APiResponse>({ statusCode: 1, type:"success", message: [], isHasNextPage: false, total: 0, totalPage: 0 })
  useEffect(() => {
    const data = ParkingSystemService.getVisitor()
    data.then(res => {
      setRetrievedData(res)
    })
  }, [])
  return (
    <>
      <div className="flex w-[90%]">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Unique ID</th>
              <th>Status</th>
              <th>Type</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Grand Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {retrievedData.message.map(({ id, uniqueId, status, type, price, quantity, grandTotal }: any) => (
              <tr key={id}>
                <th>{id}</th>
                <td>{uniqueId}</td>
                <td>
                  <div className={`badge bg-green-500 p-3 ${getStatusColor(status)}`}><p className="text-white">{status}</p></div>
                </td>
                <td>{type}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{CurrencyFmt(grandTotal)}</td>
                <td><button className="btn btn-neutral">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default VisitorList
