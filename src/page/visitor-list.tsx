import { useEffect, useState } from "react"
import { ParkingSystemService } from "../api/parking-system"
import { PaginationResponse } from "../interface/pagination"

function VisitorList() {
  const [retrievedData, setRetrievedData] = useState<PaginationResponse>({ message: [], isHasNextPage: false, total: 0, totalPage: 0 })
  useEffect(() => {
    const data = ParkingSystemService.getVisitor()
    data.then(res => setRetrievedData(res.data))
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
            {retrievedData.message.map(({ id, uniqueId, status, type, price, quantity, grandTotal }): any => (
            <tr>
              <th>{id}</th>
              <td>{uniqueId}</td>
              <td>{status}</td>
              <td>{type}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{grandTotal}</td>
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
