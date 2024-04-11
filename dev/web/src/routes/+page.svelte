<script lang="ts">
    import { Button, Root } from "$lib/components/ui/button";
    import * as Menubar from "$lib/components/ui/menubar";
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import * as Tabs from "$lib/components/ui/tabs";
    import { Progress } from "$lib/components/ui/progress";

    import { useChat } from "ai/svelte";
    import MenubarItem from "$lib/components/ui/menubar/menubar-item.svelte";
    const { input, handleSubmit, messages } = useChat();

    let guest_name = "John Doe";
    let ro_opened = "4-9-2022 9:45AM";
    let license = "123456";
    let vin = "123456";
    let phone_number = "123456";
    let service_advisor = "Shirley Smith";
    let last_service_date = "4-9-2022 9:45AM";
    let tag_number = "123456";


    let bookmarks = false;
        let fullUrls = true;
       
        const profileRadioValue = "benoit";
</script>

<main>
       
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>
              New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Share</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Email link</Menubar.Item>
                <Menubar.Item>Messages</Menubar.Item>
                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>
              Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>
              Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Find</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Search the web</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Find...</Menubar.Item>
                <Menubar.Item>Find Next</Menubar.Item>
                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.CheckboxItem bind:checked={bookmarks}
              >Always Show Bookmarks Bar</Menubar.CheckboxItem
            >
            <Menubar.CheckboxItem bind:checked={fullUrls}>
              Always Show Full URLs
            </Menubar.CheckboxItem>
            <Menubar.Separator />
            <Menubar.Item inset>
              Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item inset>
              Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Profiles</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.RadioGroup value={profileRadioValue}>
              <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
              <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
              <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
            </Menubar.RadioGroup>
            <Menubar.Separator />
            <Menubar.Item inset>Edit...</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Add Profile...</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>

    <Tabs.Root value="repair" class="w-screen m-2">
        <Tabs.List>
            <Tabs.Trigger value="repair">Repair Order</Tabs.Trigger>
            <Tabs.Trigger value="customer">Customer Info</Tabs.Trigger>
            <Tabs.Trigger value="parts">Vehicle & Parts Information</Tabs.Trigger>
            <Tabs.Trigger value="assistant">Digital Assistant</Tabs.Trigger>
            <Tabs.Trigger value="chat">Chat</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="customer">

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
                        Customer hears strange noises when driving
                    </Card.Content>
                </Card.Root>
            </Card.Root>
        </Tabs.Content>

        <Tabs.Content value="assistant">
            <Card.Root class="m-2">
                <Card.Root class="m-2 h-50">
                    <Card.Content>
                        <ul>
                            {#each $messages as message}
                                <li>{message.role}: {message.content}</li>
                            {/each}
                        </ul>
                    </Card.Content>
                </Card.Root>

                <form on:submit={handleSubmit}>
                    <input bind:value={$input} />
                    <Button type="submit">Send</Button>
                </form>
            </Card.Root>
        </Tabs.Content>

        <Tabs.Content value="repair">
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
                            <Card.Title>MIP Inspection</Card.Title>
                        </Card.Header>

                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.Head class="w-[100px]"
                                        >Tires</Table.Head
                                    >
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
                                                <ToggleGroup.Item
                                                    value="caution"
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
                                    <Table.Head class="w-[100px]"
                                        >Brakes</Table.Head
                                    >
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
                                                <ToggleGroup.Item
                                                    value="caution"
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
                        <Card.CardTitle class='m-2'>
                            Time left: 1 hour
                        </Card.CardTitle>
                        <Progress class='m-2 w-4/3 self-center' value={33} />

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
        </Tabs.Content>

        <Tabs.Content value="chat">
            testing
        </Tabs.Content>
    </Tabs.Root>
</main>
