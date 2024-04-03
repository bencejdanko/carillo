import { useList } from "@refinedev/core";

export const ListRepairOrders = () => {
  //filtering and sorting guide: https://refine.dev/tutorial/essentials/data-fetching/listing-data/
  const { data, isLoading } = useList({ 
    resource: "repairOrders",
    pagination: { current: 1, pageSize: 10 },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Return Orders</h1>
      <ul>
        {data?.data?.map((repairOrder) => (
          <li key={repairOrder.id}>
            <p>
              {repairOrder.id}
              <br />
              VIN: {repairOrder.vin}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};