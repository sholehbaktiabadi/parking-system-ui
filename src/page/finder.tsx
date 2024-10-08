import React, { useRef, useState } from "react"
import { ParkingSystemService } from "../api/parking-system"
import { FailureAlert, SuccessAlert } from "../component/alert"
import { Visitor } from "../interface/visitor"
import { formatDate } from "../helper/date"
import { getStatusColor } from "../helper/transaction"
import { getHttpStatus } from "../helper/api"
import { HttpStatusType } from "../enum/http"
import { PaymentType } from "../enum/payment"
import { CurrencyFmt } from "../helper/formatter"

function Finder() {
    const IDref = useRef(0)
    const [ID, setID] = useState<number>()
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [trxDisplay, setTrxDisplay] = useState("hidden")
    const paymentType = useRef(PaymentType.CASH)
    const [visitor, setVisitor] = useState<Visitor>({
        id: 0, createdAt: new Date(), updatedAt: new Date(), uniqueId: "-", type: "-", price: 0, reason: null, quantity: 0, grandTotal: 0, status: "-", timeUnit: "-", paymentType: null, departedAt: new Date()
    })

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = +e.target.value
        IDref.current = id
        setID(id)
        if (IDref.current) {
            ParkingSystemService.getDetail(IDref.current)
                .then(res => {
                    setVisitor((prev) => ({ ...prev, ...res.message}))
                    setTrxDisplay("block")
                })
                .catch(err => {
                    setTrxDisplay("hidden")
                    setError(err.response.data.message);
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                })
        } else {
            setTrxDisplay("hidden")
        }
    }

    const updateButtonClick = () => {
        console.log({ paymentType: visitor.paymentType, quantity: visitor.quantity, grandTotal: visitor.grandTotal })
        ParkingSystemService.setAsDeparted(IDref.current, { paymentType: visitor.paymentType ?? paymentType.current, quantity: visitor.quantity, grandTotal: visitor.grandTotal })
            .then(res => {
                console.log(res.message)
                setVisitor((prev) => ({ ...prev, ...res.message }))
                setSuccess("Berhasil Update")
                setTimeout(() => {
                    setSuccess(null)
                }, 2000);
            })
            .catch(err => {
                const httpStatus = getHttpStatus(err.response.status)
                if ([HttpStatusType.BR, HttpStatusType.FDB, HttpStatusType.ISE].includes(httpStatus)) {
                    setError(httpStatus);
                    setTimeout(() => {
                        setError(null);
                    }, 2000);
                }
            })
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
                            onChange={onInputChange}
                        />
                    </label>
                </div>

                {error && <FailureAlert props={error} />}

                <div className={`w-[100%] lg:w-[70%]  block bg-base-200 rounded-xl ${trxDisplay} p-14`}>
                    <div className="flex my-2">
                        <div className="flex-initial w-[50%] bg-slate-800 h-14 rounded mr-1 flex items-center justify-center"><p className="text-lg font-bold">{visitor.uniqueId}</p></div>
                        <div className={`flex-initial w-[50%] ${getStatusColor(visitor.status)} h-14 rounded ml-1 flex items-center justify-center`}><p className="text-lg font-bold">{visitor.status}</p></div>
                    </div>

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
                                <input type="text" className="grow" value={CurrencyFmt(visitor.grandTotal)} />
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
                                <input type="text" className="grow" value={visitor.departedAt ? formatDate(visitor.departedAt) : "-"} />
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="flex-initial w-[20%]">Payment</div>
                        <div className="flex-initial w-full">
                            <label className="bg-base-200 flex items-center gap-x-14 my-2">
                                <select
                                    value={visitor.paymentType}
                                    onChange={(e) => setVisitor((prev) => ({ ...prev, paymentType: e.target.value }))}
                                    className="select select-bordered w-full max-w-xs">
                                    <option>CASH</option>
                                    <option>CASHLESS</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <button
                        onClick={updateButtonClick}
                        autoFocus={true}
                        className="btn btn-outline btn-warning my-5">
                        Set As Departed
                    </button>
                    {success && <SuccessAlert props={success} />}
                </div>
            </div>
        </>
    )
}

export default Finder