export function getStatusColor(status: string){
    switch (status) {
        case "INPROGRESS":
            return "bg-yellow-500"            
        case "COMPLETED":
            return "bg-green-500"            
        case "FAILED":
            return "bg-red-500"            
        default:
            return "bg-slate-700"            
    }
}