<script>
    import * as Menubar from "$lib/components/ui/menubar";
    import * as HoverCard from "$lib/components/ui/hover-card";
    import Button from "./ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";

    import { CaretRight } from "svelte-radix";
</script>

<main>
    <Menubar.Root class="p-10 w-[100%] justify-between">
        <Menubar.Menu>
            <Menubar.Item
                class="text-[22px] text-black font-bold italic hover:text-green-500 transition ease-in-out duration-300"
                >CAR-RILLO</Menubar.Item
            >

            <div class="flex hidden md:flex">
                <Menubar.Item class="text-lg hover:text-green-500"
                    ><HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>Products</HoverCard.Trigger>
                        <HoverCard.Content>Coming soon!</HoverCard.Content>
                    </HoverCard.Root></Menubar.Item
                >

                <Menubar.Item class="text-lg hover:text-green-500"
                    ><HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>Solutions</HoverCard.Trigger>
                        <HoverCard.Content>Coming soon!</HoverCard.Content>
                    </HoverCard.Root></Menubar.Item
                >
                <Menubar.Item class="text-lg hover:text-green-500"
                    ><HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>Developers</HoverCard.Trigger>
                        <HoverCard.Content>Coming soon!</HoverCard.Content>
                    </HoverCard.Root></Menubar.Item
                >
                <Menubar.Item class="text-lg hover:text-green-500"
                    ><HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>Resources</HoverCard.Trigger>
                        <HoverCard.Content>Coming soon!</HoverCard.Content>
                    </HoverCard.Root></Menubar.Item
                >
                <Menubar.Item class="text-lg hover:text-green-500"
                    ><HoverCard.Root openDelay={50} closeDelay={50}>
                        <HoverCard.Trigger>Pricing</HoverCard.Trigger>
                        <HoverCard.Content>Coming soon!</HoverCard.Content>
                    </HoverCard.Root></Menubar.Item
                >
            </div>

            <div class="flex float-right">
                <Menubar.Item class="text-lg group">
                    <Button class="p-2 bg-none pr-8"
                        >Contact Us
                        <CaretRight class="m-2 w-[20px] absolute right-3" />
                        <CaretRight class="m-2 w-[20px] transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 absolute right-3" />
                    </Button>
                </Menubar.Item>

                <Menubar.Item class="text-lg justify-self-right p-2 group">
                    <Button
                        on:click={() => (window.location.href = "/portal")}
                        class="p-2 flex pr-8"
                    >
                        Dealership Portal
                        <CaretRight class="m-2 w-[20px] absolute right-3" />
                        <CaretRight class="m-2 w-[20px] transition-transform duration-500 ease-in-out transform group-hover:translate-x-2 absolute right-3" />
                    </Button>
                </Menubar.Item>
            </div>
        </Menubar.Menu>
    </Menubar.Root>
</main>
