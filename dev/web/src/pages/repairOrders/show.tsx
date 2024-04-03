import { useOne } from "@refinedev/core"

export const ShowRepairOrder = () => {
    const { data, isLoading } = useOne( {resource: "repairOrders", id: "z1mkthmjev35ybl"})

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <div>Repair vin: {data?.data.vin}</div>
    
}