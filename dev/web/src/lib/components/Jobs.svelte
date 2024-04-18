<script>
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import * as Table from "$lib/components/ui/table";
    import { Button } from "$lib/components/ui/button";
    import { Progress } from "$lib/components/ui/progress";
</script>

<main>
    <div class="grid grid-cols-2 m-2 gap-2">
        <Card.Root>
            <div class="grid grid-cols-2 m-2 gap-2">
                <Card.Root>
                    <Card.Header>
                        <Card.Title>Clayton Carillo</Card.Title>
                        <Card.Description>Checkin Time</Card.Description>
                    </Card.Header>

                    <Table.Root>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell class="font-medium"
                                    >RO # Tag</Table.Cell
                                >
                                <Table.Cell class="font-medium"
                                    >Customer Vehicle</Table.Cell
                                >
                                <Table.Cell class="font-medium"
                                    >Promised</Table.Cell
                                >
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>15423</Table.Cell>
                                <Table.Cell>Toyota Honda</Table.Cell>
                                <Table.Cell
                                    >{new Date(
                                        Date.now(),
                                    ).toISOString()}</Table.Cell
                                >
                                <Table.Cell>
                                    <Button>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            ><path
                                                d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                            ></path></svg
                                        >
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Current</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Assigned</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Completed</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>

                </Card.Root>

                <Card.Root>
                    <Card.Header>
                        <Card.Title>Clayton Carillo</Card.Title>
                        <Card.Description>Checkin Time</Card.Description>
                    </Card.Header>

                    <Table.Root>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell class="font-medium"
                                    >RO # Tag</Table.Cell
                                >
                                <Table.Cell class="font-medium"
                                    >Customer Vehicle</Table.Cell
                                >
                                <Table.Cell class="font-medium"
                                    >Promised</Table.Cell
                                >
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>15423</Table.Cell>
                                <Table.Cell>Toyota Honda</Table.Cell>
                                <Table.Cell
                                    >{new Date(
                                        Date.now(),
                                    ).toISOString()}</Table.Cell
                                >
                                <Table.Cell>
                                    <Button>
                                        <svg
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            ><path
                                                d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                                                fill="currentColor"
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                            ></path></svg
                                        >
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Current</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Assigned</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>

                    <Card.Root class="m-2">
                        <Card.Header>
                            <Card.Title>Completed</Card.Title>
                        </Card.Header>

                        <Card.Content>
                            <Card.Root>
                                <Card.Content>
                                    <Card.Header>Oil Change</Card.Header>
                                    <Progress value="50" />
                                    2.0 Hours
                                </Card.Content>
                            </Card.Root>
                        </Card.Content>
                    </Card.Root>
                    
                </Card.Root>
            </div>
        </Card.Root>

        <Card.Root>
            <Card.Header>
                <Card.Title>Open Repair Orders</Card.Title>
            </Card.Header>

            <Table.Root>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell class="font-medium">RO # Tag</Table.Cell>
                        <Table.Cell class="font-medium"
                            >Customer Vehicle</Table.Cell
                        >
                        <Table.Cell class="font-medium">Opened</Table.Cell>
                        <Table.Cell class="font-medium">Promised</Table.Cell>
                        <Table.Cell class="font-medium">Updated</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>15423</Table.Cell>
                        <Table.Cell>Toyota Honda</Table.Cell>
                        <Table.Cell
                            >{new Date(Date.now()).toISOString()}</Table.Cell
                        >
                        <Table.Cell
                            >{new Date(Date.now()).toISOString()}</Table.Cell
                        >
                        <Table.Cell
                            >{new Date(Date.now()).toISOString()}</Table.Cell
                        >
                        <Table.Cell>
                            <Button>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    ><path
                                        d="M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z"
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                    ></path></svg
                                >
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Card.Root>
    </div>
</main>
