<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Menubar from "$lib/components/ui/menubar";
    import * as Card from "$lib/components/ui/card";

    let guest_name = "John Doe";
    let ro_opened = "4-9-2022 9:45AM";
    let license = "123456";
    let vin = "123456";
    let phone_number = "123456";
    let service_advisor = "Shirley Smith";
    let last_service_date = "4-9-2022 9:45AM";
    let tag_number = "123456";

    let customer_info_expanded = false;
    let digital_assistant_expanded = false;
</script>

<Menubar.Root class='m-2'>
    <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
            <Menubar.Item>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
        </Menubar.Content>
    </Menubar.Menu>
</Menubar.Root>

<Card.Root class="m-2">
    <Button
        class="center self-center m-2"
        on:click={() => (customer_info_expanded = !customer_info_expanded)}
    >
        {customer_info_expanded ? "Show Customer Info" : "Hide Customer Info"}
    </Button>

    <Button
        class="center self-center m-2"
        on:click={() =>
            (digital_assistant_expanded = !digital_assistant_expanded)}
    >
        {digital_assistant_expanded
            ? "Show Digital Assistant"
            : "Hide Digital Assistant"}
    </Button>
</Card.Root>

{#if customer_info_expanded}
    <Card.Root class="m-2">
        <div class="grid grid-cols-4">
            {#each [{ label: "Guest Name:", value: guest_name }, { label: "RO Opened:", value: ro_opened }, { label: "License:", value: license }, { label: "VIN Number:", value: vin }, { label: "Phone Number:", value: phone_number }, { label: "Service Advisor:", value: service_advisor }, { label: "Last Service Date:", value: last_service_date }, { label: "Tag Number:", value: tag_number }] as { label, value }}
                <Card.Root class="border-none shadow-none">
                    <Card.Content>
                        <b>{label}</b>
                        <p>{value}</p>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>
    </Card.Root>
{/if}

<div class="grid grid-cols-2 gap-2 m-2">
    <Card.Root>
        <Card.Header>
            <Card.Title>RO Form</Card.Title>
            <Card.Description>RO Number:</Card.Description>
        </Card.Header>

        <Card.Root class="grid grid-cols-2 gap-2 m-4">
            <Card.Root class="m-4 border-none shadow-none">
                <Card.Header>
                    <Card.Title>Service 1</Card.Title>
                    <Card.Description>Progress:</Card.Description>
                </Card.Header>
            </Card.Root>

            <Card.Root class="m-4 border-none shadow-none">
                <Card.Header>
                    <Card.Title>Service 1</Card.Title>
                    <Card.Description>Progress:</Card.Description>
                </Card.Header>
            </Card.Root>
        </Card.Root>
    </Card.Root>

    <Card.Root>
        <Card.Root class="m-4">
            <Card.Header>
                <Card.Title>Service 1</Card.Title>
                <Card.Description>Progress:</Card.Description>
            </Card.Header>
        </Card.Root>
    </Card.Root>
</div>
