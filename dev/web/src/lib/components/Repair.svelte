<script>
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import { Progress } from "$lib/components/ui/progress";

    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import Button from "./ui/button/button.svelte";

    /*
     * The (service.service) after as service is a key expression. It ensures that each service is treated as a separate entity, even if the data changes. This is necessary because Svelte's reactivity system is based on assignment, and array methods like push and splice don't trigger updates.
     */
    let services = [
        {
            service: "Oil Change",
            status: "Completed",
            value: "$78.00",
            time: "0.5 Hours",
            selected: undefined,
        },
        {
            service: "Tire Rotation",
            status: "In Progress",
            value: "$50.00",
            time: "1 Hour",
            selected: undefined,
        },
        {
            service: "Brake Inspection",
            status: "Not Started",
            value: "$0.00",
            time: "0.5 Hours",
            selected: undefined,
        },
    ];

    let MPI = [
        { service: "Tire Pressures", selected: undefined },
        {
            service: "Left Front Tire / Tire Depth and or Condition",
            selected: undefined,
        },
        {
            service: "Right Front Tire / Tire Depth and or Condition",
            selected: undefined,
        },
        {
            service: "Left Rear Tire / Tire Depth and or Condition",
            selected: undefined,
        },
        {
            service: "Right Rear Tire / Tire Depth and or Condition",
            selected: undefined,
        },
        { service: "Tire Recommendations", selected: undefined },
        { service: "Inspect Tires Condition / TPMS", selected: undefined },
        { service: "Rims / wheels / lugnuts", selected: undefined },
        { service: "Alignment", selected: undefined },
    ];
</script>

<main>
    <div class="grid grid-cols-3 gap-2 m-2">
        <Card.Root class="col-span-2">
            <Card.Header>
                <Card.Title>RO Form</Card.Title>
                <Card.Description>RO Number:</Card.Description>
            </Card.Header>

            <Table.Root>
                <Table.Body>
                    {#each services as service (service.service)}
                        <Table.Row>
                            <Table.Cell class="font-medium"
                                >{service.service}</Table.Cell
                            >
                            <Table.Cell>{service.status}</Table.Cell>
                            <Table.Cell>{service.value}</Table.Cell>
                            <Table.Cell>{service.time}</Table.Cell>
                            <Table.Cell>
                                <ToggleGroup.Root
                                    type="single"
                                    bind:value={service.selected}
                                >
                                    <ToggleGroup.Item
                                        value="start"
                                        class="data-[state=on]:bg-orange-500"
                                    >
                                        Start
                                    </ToggleGroup.Item>

                                    <ToggleGroup.Item
                                        value="pause"
                                        class="data-[state=on]:bg-yellow-500"
                                    >
                                        Pause
                                    </ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value="complete"
                                        class="data-[state=on]:bg-green-500"
                                    >
                                        Complete
                                    </ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                </Table.Body>
            </Table.Root>

            <Card.Header>
                <Card.Title>MPI Inspection</Card.Title>
            </Card.Header>

            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Head class="w-[100px]">Tires</Table.Head>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {#each MPI as service (service.service)}
                        <Table.Row>
                            <Table.Cell class="font-medium"
                                >{service.service}</Table.Cell
                            >
                            <Table.Cell>
                                <ToggleGroup.Root type="single"
                                bind:value={service.selected}>
                                    <ToggleGroup.Item value="pass"
                                    class="data-[state=on]:bg-green-500"
                                        >Pass</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="caution"
                                    class="data-[state=on]:bg-yellow-500"
                                        >Caution</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="fail"
                                    class="data-[state=on]:bg-red-500"
                                        >Fail</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="na"
                                    class="data-[state=on]:bg-gray-500"
                                        >N/A</ToggleGroup.Item
                                    >
                                </ToggleGroup.Root>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                </Table.Body>
            </Table.Root>

            <Table.Root>
                <Table.Header>
                    <Table.Row>
                        <Table.Head class="w-[100px]">Brakes</Table.Head>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {#each [{ service: "Front Brake Pads", status: "fail" }] as { service, status }}
                        <Table.Row>
                            <Table.Cell class="font-medium"
                                >{service}</Table.Cell
                            >
                            <Table.Cell>
                                <ToggleGroup.Root type="single">
                                    <ToggleGroup.Item value="pass"
                                        >Pass</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="caution"
                                        >Caution</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="fail"
                                        >Fail</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="na"
                                        >N/A</ToggleGroup.Item
                                    >
                                </ToggleGroup.Root>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                </Table.Body>
            </Table.Root>
        </Card.Root>

        <Card.Root>
            <Card.Root class="m-4">
                <Card.Header>
                    <Card.Title>Schedule Lineup</Card.Title>
                </Card.Header>
                <Card.CardTitle class="m-2">Time left: 1 hour</Card.CardTitle>
                <Progress class="m-2 w-4/3 self-center" value={33} />

                <Card.Root class="m-4">
                    <Card.Header>
                        <Card.Title>RO #333</Card.Title>
                    </Card.Header>
                    <Card.Root class="m-4 border-none shadow-none">
                        <Card.Content>
                            <p>Oil change</p>
                            <p>MPI</p>
                        </Card.Content>
                    </Card.Root>
                </Card.Root>

                <Card.Root class="m-4">
                    <Card.Header>
                        <Card.Title>RO #333</Card.Title>
                    </Card.Header>
                    <Card.Root class="m-4 border-none shadow-none">
                        <Card.Content>
                            <p>Oil change</p>
                            <p>MPI</p>
                        </Card.Content>
                    </Card.Root>
                </Card.Root>
            </Card.Root>
        </Card.Root>
    </div>
</main>
