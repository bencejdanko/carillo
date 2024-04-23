<script>
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import { Progress } from "$lib/components/ui/progress";
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
                    {#each [{ service: "Oil Change", status: "Completed", value: "$78.00", time: "0.5 Hours" }, { service: "Tire Rotation", status: "In Progress", value: "$50.00", time: "1 Hour" }, { service: "Brake Inspection", status: "Not Started", value: "$0.00", time: "0.5 Hours" }] as { service, status, value, time }}
                        <Table.Row>
                            <Table.Cell class="font-medium"
                                >{service}</Table.Cell
                            >
                            <Table.Cell>{status}</Table.Cell>
                            <Table.Cell>{value}</Table.Cell>
                            <Table.Cell>{time}</Table.Cell>
                            <Table.Cell>
                                <ToggleGroup.Root type="single">
                                    <ToggleGroup.Item value="start"
                                        >Start</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="pause"
                                        >Pause</ToggleGroup.Item
                                    >
                                    <ToggleGroup.Item value="complete"
                                        >Complete</ToggleGroup.Item
                                    >
                                </ToggleGroup.Root>
                            </Table.Cell>
                        </Table.Row>
                    {/each}
                </Table.Body>
            </Table.Root>

            <Card.Root class="m-4">
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
                        {#each [{ service: "Tire Pressures", status: "fail" }, { service: "Left Front Tire / Tire Depth and or Condition", status: "pass" }, { service: "Right Front Tire / Tire Depth and or Condition", status: "pass" }, { service: "Left Rear Tire / Tire Depth and or Condition", status: "pass" }, { service: "Right Rear Tire / Tire Depth and or Condition", status: "pass" }, { service: "Tire Recommendations", status: "fail" }, { service: "Inspect Tires Condition / TPMS", status: "fail" }, { service: "Rims / wheels / lugnuts", status: "fail" }, { service: "Alignment", status: "fail" }] as { service, status }}
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
