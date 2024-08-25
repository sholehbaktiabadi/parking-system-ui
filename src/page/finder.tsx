import React, { useRef, useState } from "react"
import { ParkingSystemService } from "../api/parking-system"
import { Alert } from "../component/alert"
import { Visitor } from "../interface/visitor"
import { formatDate } from "../helper/date"

function Finder() {
    const IDref = useRef(0)
    const [ID, setID] = useState(0)
    const [error, setError] = useState<string | null>(null);
    const [visitor, setVisitor] = useState<Visitor>({
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        uniqueId: "AE2344XC",
        type: "SCOOTER",
        price: 2000,
        reason: null,
        quantity: 2,
        grandTotal: 4000,
        status: "COMPLETED",
        timeUnit: "hour",
        paymentType: "CASH",
        departedAt: new Date()
    })

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setID(IDref.current)
        if (e.key == "Enter") {
            ParkingSystemService.getDetail(IDref.current)
                .then(res => setVisitor(res.message))
                .catch(err => {
                    setError(err.response.data.message);
                    console.log(err.response.data.message);
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                })
            console.log(visitor)
        }
    }
    return (
        <>
            <div className="w-[100%]">
                <div className="mx-auto mb-10">
                    <label className="input-bordered flex items-center gap-10">
                        Scan Barcode
                        <input
                            type="text"
                            name="id"
                            value={ID}
                            placeholder="Tap here"
                            className="input bg-transparent input-bordered input-accent w-full max-w-xs"
                            onChange={(e) => IDref.current = +e.target.value}
                            onKeyUp={(e) => onEnter(e)}
                            autoFocus
                        />
                    </label>
                </div>

                {error && <Alert props={error} />}

                <div className="w-[60%] block bg-base-200 rounded-xl p-10">
                    <p className="my-10">
                        Transaction Detail:
                    </p>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">ID</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.id} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Unique</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.uniqueId} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Type</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.type} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Status</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.status} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Price</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.price} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Payment</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.paymentType} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Quantity</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.quantity} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Total</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.grandTotal} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Unit</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.timeUnit} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">DepartedAt</div>
                        <div className="flex-initial w-full">
                            <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                                <input type="text" className="grow" value={visitor.departedAt ? formatDate(visitor.departedAt): "-"} />
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-outline btn-warning my-5">Set As Departed</button>
                </div>
            </div>
        </>
    )
}

export default Finder