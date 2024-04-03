import { useForm } from "@refinedev/core";

export const CreateRepairOrder = () => {
  const { onFinish, mutationResult } = useForm({
    action: "create",
    resource: "repairOrders",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Using FormData to get the form values and convert it to an object.
    const data = Object.fromEntries(new FormData(event.target).entries());
    // Calling onFinish to submit with the data we've collected from the form.
    onFinish(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">VIN</label>
      <input type="text" id="vin" name="vin" />

      {mutationResult.isSuccess && <span>successfully submitted!</span>}
      <button type="submit">Submit</button>
    </form>
  );
};