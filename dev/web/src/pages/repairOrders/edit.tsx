import { useOne, useUpdate } from "@refinedev/core"

export const EditRepairOrder = () => {
    const { data, isLoading } = useOne( {resource: "repairOrders", id: "z1mkthmjev35ybl"}) 
    const { mutate, isLoading: isUpdating } = useUpdate();

    const handleUpdate = async () => {
        await mutate({
            resource: "repairOrders",
            id: "z1mkthmjev35ybl",
            values: { vin: 123 }
        });
    }

    return (
        <div>
            {isLoading ? <div>Loading...</div> : (
                <div>
                    <div>Repair vin: {data?.data.vin}</div>
                    <button onClick={handleUpdate}>Update</button>
                    {isUpdating && <div>Updating...</div>}
                </div>
            )}
        </div>
    )

}