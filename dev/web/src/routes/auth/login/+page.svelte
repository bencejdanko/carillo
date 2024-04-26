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

    import { SeparatorVertical } from "lucide-svelte";

    import { login } from "$lib/api/pocketbase";

    const frameworks = [
        {
            value: "https://preview.car-rillo.com",
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

<Card.Root class='p-5 m-10 items-center'>

    <Card.Header>
        <Card.Title>Sign In</Card.Title>
    </Card.Header>

    <Input type="email" placeholder="Email" />

    <Input class='mt-3' type="password" placeholder="Password" />

    <Separator class='mt-3' />

    <Button class="w-full mt-5" on:click={() => {
        // login()
    }}>Login</Button>

</Card.Root>
