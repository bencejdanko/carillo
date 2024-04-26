<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input/index.js";

    import Check from "svelte-radix/Check.svelte";
    import CaretSort from "svelte-radix/CaretSort.svelte";
    import { tick } from "svelte";
    import * as Command from "$lib/components/ui/command/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { cn } from "$lib/utils.js";
    import { Separator } from "$lib/components/ui/separator";

    import IndexNav from "$lib/components/IndexNav.svelte";

    const frameworks = [
        {
            value: "/repair",
            label: "Preview",
        },
    ];

    let open = false;
    let value = "";

    $: selectedValue =
        frameworks.find((f) => f.value === value) ??
        {label: "Select a find a dealership", value: ""};

    // We want to refocus the trigger button when the user selects
    // an item from the list so users can continue navigating the
    // rest of the form with the keyboard.
    function closeAndFocusTrigger(triggerId: string) {
        open = false;
        tick().then(() => {
            document.getElementById(triggerId)?.focus();
        });
    }
</script>

<IndexNav />

<Card.Root class='p-5 m-10 items-center'>

    <Card.Header>
        <Card.Title>Dealerships</Card.Title>
    </Card.Header>

    <Popover.Root bind:open let:ids>
        <Popover.Trigger asChild let:builder>
            <Button
                builders={[builder]}
                variant="outline"
                role="combobox"
                aria-expanded={open}
                class="w-[100%] flex"
            >
                {selectedValue.label}
                <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </Popover.Trigger>
        <Popover.Content class="w-[80%] flex p-0">
            <Command.Root>
                <Command.Input placeholder="Search dealership..." class="h-9" />
                <Command.Empty>No framework found.</Command.Empty>
                <Command.Group>
                    {#each frameworks as framework}
                        <Command.Item
                            value={framework.value}
                            onSelect={(currentValue) => {
                                value = currentValue;
                                closeAndFocusTrigger(ids.trigger);
                            }}
                        >
                            <Check
                                class={cn(
                                    "mr-2 h-4 w-4",
                                    value !== framework.value &&
                                        "text-transparent",
                                )}
                            />
                            {framework.label}
                        </Command.Item>
                    {/each}
                </Command.Group>
            </Command.Root>
        </Popover.Content>
    </Popover.Root>

    <Button class="w-full mt-5" on:click={() => {
        const url = selectedValue.value
        window.location.href = url;
    }}>Go to company portal</Button>

</Card.Root>
