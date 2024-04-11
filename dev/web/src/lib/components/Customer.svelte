<script>
    import * as Table from "$lib/components/ui/table";
    import * as Card from "$lib/components/ui/card";

    let guest_name = "John Doe";
    let ro_opened = "4-9-2022 9:45AM";
    let license = "123456";
    let vin = "123456";
    let phone_number = "123456";
    let service_advisor = "Shirley Smith";
    let last_service_date = "4-9-2022 9:45AM";
    let tag_number = "123456";

    let customer_notes = "Customer hears strange noises when driving";

</script>

<main>
    <Table.Root>
        <Table.Body>
            {#each [{ label: "Guest Name:", value: guest_name }, { label: "RO Opened:", value: ro_opened }, { label: "License:", value: license }, { label: "VIN Number:", value: vin }, { label: "Phone Number:", value: phone_number }, { label: "Service Advisor:", value: service_advisor }, { label: "Last Service Date:", value: last_service_date }, { label: "Tag Number:", value: tag_number }] as { label, value }}
                <Table.Row>
                    <Table.Cell class="font-medium">{label}</Table.Cell>
                    <Table.Cell>{value}</Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>

    <Card.Root class="m-2">
        <Card.Header>
            <Card.Title>Customer Notes</Card.Title>
        </Card.Header>

        <Card.Root class="m-4">
            <Card.Content>
                {customer_notes}
            </Card.Content>
        </Card.Root>
    </Card.Root>
</main>