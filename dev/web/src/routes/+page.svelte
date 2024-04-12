<script lang="ts">
    import IndexNav from "$lib/components/IndexNav.svelte";
    import * as Accordion from "$lib/components/ui/accordion";
    import * as Card from "$lib/components/ui/card";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import { Root } from "postcss";
    import { EMPTY_PATH } from "zod";
</script>

<main>
    <IndexNav />

    <!-- <div
        class="w-[200px] h-[400px] absolute m-2"
        style="
        left: 50%;
    border-radius: 10px;
    background: #f6f9fc;
    box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0 -2px 6px 0 rgba(10, 37, 64, 0.35);
    padding: 20px; 
    "
    >
        <div
            style="
    position: relative;
    margins: 20px;
    border-radius: 10px;
    background: white;
    overflow: hidden;

    "
        >
            <div
                style="
        height: 100%;
        padding: 20px;
        border-radius: 10px;
        width: 80%;
    "
            >
                <Accordion.Root>
                    <Accordion.Item value="item-1">
                        <Accordion.Trigger>GRX</Accordion.Trigger>
                        <Accordion.Content></Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </div>
        </div>
    </div> -->

    <!-- <div
        class="absolute w-screen h-0
    border-t-[0px] border-t-transparent
    border-r-[700px] border-r-[#55c280] border-opacity-40
    border-b-[400px] border-b-transparent"
    ></div> -->

    <div class="grid grid-cols-2 justify-center">
        <div class="gradient-container m-5">
            <div class="gradient-background">
                <h1 class="text-5xl">
                    Driving Efficiency, Powering Performance: Your Dealership's
                    Ultimate Service Solution
                </h1>
            </div>
        </div>
      
        <div style="display: flex; justify-content: center; align-items: center;">
    <img src="/logo.png" alt="logo" />
</div>

    </div>

    <h2 class="h2 m-5 text-lg font-medium text-[gray] relative w-[50%]">
        One simple login for your entire service pipeline. Car-Rillo is poised
        to revolutionize the way automotive dealerships manage their service
        operations. A comprehensive, end-to-end platform that streamlines the
        entire vehicle servicing process.
    </h2>

    <Card.Root class="m-5 p-5 self-bottom">
        <Card.Title>Our Team</Card.Title>

        <div class="grid grid-cols-4 p-5 gap-5">
            {#each [{ name: "Shawheen Wingrove", email: "shawheen@wingrove.org", linkedin: "https://www.linkedin.com/in/shawheenw/" }, { name: "Clayton Carrillo", linkedin: "www.linkedin.com/in/clayton-carrillo-822bb1264" }, { name: "影尘 白(David)", email: "crysisbai2001@gmail.com", linkedin: "https://www.linkedin.com/in/yingchen-bai/" }, { name: "Robert Schacherbauer", email: "robert.schacherbauer@sjsu.edu" }, { name: "Sohan Bairaboina", email: 'Sohanb152@gmail.com' }, { name: "Bence Danko", email: "bence.danko@sjsu.edu", linkedin: "https://www.linkedin.com/in/bence-jordan-danko/" }, { name: "Trung Tran", email: "trungtran63470@gmail.com", linkedin: "https://www.linkedin.com/in/trung-tran1234/" }] as { name, email, linkedin }}
                <Card.Root class="p-2 relative">
                    <Card.Title>{name}</Card.Title>
                    <Card.Content class="p-2">
                        <!-- <Avatar.Image src="cc.JPG" /> -->
                        {#if email}
                            <b>Email:</b>
                            {email}
                        {/if}

                        {#if linkedin}
                            <b>LinkedIn:</b>
                            {linkedin}
                        {/if}
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>
    </Card.Root>

    <script lang="ts">
        import * as Card from "$lib/components/ui/card/index.js";
        import * as Carousel from "$lib/components/ui/carousel/index.js";
    </script>
</main>
