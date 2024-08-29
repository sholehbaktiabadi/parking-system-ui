import { FormEvent, useState } from "react"
import { ParkingSystemService } from "../api/parking-system"
import { FailureAlert, SuccessAlert } from "../component/alert";

export const Create: React.FC<{ type: string }> = ({ type }) => {
    const [uniqueID, setUniqueID] = useState("")
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const onButtonSubmit = (e: FormEvent) => {
        e.preventDefault()
        ParkingSystemService.createVisitor(uniqueID, type)
        .then(res => {
            setSuccess("Added new Inventory")
            setTimeout(() => {
                setSuccess(null)
            }, 2000);
            console.log(res.message)
        })
        .catch(err => {
            console.log(err.response.data.message)
            setError(err.response.data.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        })
    }
    return (
        <>
            <div className="w-[100%] lg:w-[70%]  block bg-base-200 rounded-xl p-14">
                <form onSubmit={onButtonSubmit}>
                <div className="flex items-center">
                    <div className="flex-initial w-[20%]">Unique ID</div>
                    <div className="flex-initial w-full">
                        <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                            <input type="text" className="grow" onChange={(e) => setUniqueID(e.target.value)} />
                        </label>
                    </div>
                </div>

                <div className="flex items-center">
                    <div className="flex-initial w-[20%]">Type</div>
                    <div className="flex-initial w-full">
                        <label className="input bg-base-200 input-bordered flex items-center gap-x-14 my-2">
                            <input type="text" className="grow" value={type} />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline btn-warning my-5">Create</button>
                </form>
                {success && <SuccessAlert props={success} />}
                {error && <FailureAlert props={error} />}
            </div>
        </>
    )
}