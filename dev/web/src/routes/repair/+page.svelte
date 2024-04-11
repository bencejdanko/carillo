<script lang="ts">
    import { Button, Root } from "$lib/components/ui/button";
    import * as Menubar from "$lib/components/ui/menubar";
    import * as Card from "$lib/components/ui/card";
    import * as Table from "$lib/components/ui/table";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    import * as Tabs from "$lib/components/ui/tabs";
    import { Input } from "$lib/components/ui/input";
    import { Progress } from "$lib/components/ui/progress";

    import Nav from "$lib/components/Nav.svelte";
    import Customer from "$lib/components/Customer.svelte";
    import Repair from "$lib/components/Repair.svelte";
    import Parts from "$lib/components/Parts.svelte";
    import Assistant from "$lib/components/Assistant.svelte";

    
</script>

<main>
    <Nav />

    <Tabs.Root value="parts" class="w-screen">
        <Tabs.List class="m-2">
            <Tabs.Trigger value="repair">Repair Order</Tabs.Trigger>
            <Tabs.Trigger value="customer">Customer Info</Tabs.Trigger>
            <Tabs.Trigger value="parts"
                >Vehicle & Parts Information</Tabs.Trigger
            >
            <Tabs.Trigger value="assistant">Digital Assistant</Tabs.Trigger>
            <Tabs.Trigger value="chat">Chat</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="parts">
            <Parts />
        </Tabs.Content>

        <Tabs.Content value="customer">
            <Customer />
        </Tabs.Content>

        <Tabs.Content value="assistant">
            <Assistant />
        </Tabs.Content>

        <Tabs.Content value="repair">
            <Repair />
        </Tabs.Content>

        <Tabs.Content value="chat">testing</Tabs.Content>
    </Tabs.Root>
</main>
