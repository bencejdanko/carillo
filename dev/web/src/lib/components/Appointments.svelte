<script>
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import { Button } from "$lib/components/ui/button";
</script>

<main>
    <Card.Root class="m-2">
        <Card.Header>
            <Card.Title>Appointments</Card.Title>
        </Card.Header>

        <Table.Root>
            <Table.Body>
                <Table.Row>
                    <Table.Cell class="font-medium">Name</Table.Cell>
                    <Table.Cell class="font-medium">Time</Table.Cell>
                    <Table.Cell class="font-medium">Details</Table.Cell>
                    <Table.Cell class=''>Status</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Pablo Picasso</Table.Cell>
                    <Table.Cell
                        >{new Date(Date.now()).toISOString()}</Table.Cell
                    >
                    <Table.Cell>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </Table.Cell>
                    <Table.Cell>

                        input
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table.Root>
    </Card.Root>
</main>