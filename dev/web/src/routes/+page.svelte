<script lang="ts">
    import IndexNav from "$lib/components/IndexNav.svelte";
    import * as Accordion from "$lib/components/ui/accordion";
    import * as Card from "$lib/components/ui/card";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    import * as Menubar from "$lib/components/ui/menubar";
    import * as HoverCard from "$lib/components/ui/hover-card";
    import Button from "$lib/components/ui/button/button.svelte";

    import { CaretRight } from "svelte-radix";
    import { Play } from "svelte-radix";
    import Autoplay from "embla-carousel-autoplay";
    import { LinkedinLogo } from "svelte-radix";
    import { Video } from "svelte-radix";
</script>

<link rel="stylesheet" href="styles.css" />

<main>
    <div
        class="absolute top-0 left-0 md:w-[50%] w-[100%] h-[70%] bg-gradient-to-b from-green-500 to-[#069e78] rounded-br-[50px]"
    ></div>
    <div class="triangle bg-gray-200"></div>

    <div class="z-10 relative">
        <IndexNav />

        <div class="grid frid-cols-1 md:grid-cols-2">
            <div>
                <div class="gradient-background">
                    <h2 class="text-5xl p-10">
                        Driving Efficiency<br />
                        Powering Performance<br />
                        Your Dealership's Ultimate Service Solution
                    </h2>
                </div>

                <h2
                    class="text hidden lg:flex lg:text-xl font-medium text-white p-5 "
                >
                    One simple login for your entire service pipeline. Car-Rillo
                    is poised to revolutionize the way automotive dealerships
                    manage their service operations. A comprehensive, end-to-end
                    platform that streamlines the entire vehicle servicing
                    process.
                </h2>
            </div>

            <div class="p-5 hidden md:block">
                <div class='shadow overflow-hidden pb-5'>
                    <div class='m-5 bg-white'>
                        <img style='height: 80%;' src="s1.png" alt='s1'/>
                    </div>
                </div>
            </div>
            <div class="p-5 hidden lg:block absolute top-0 right-0 z-[-1] transform translate-x-2 translate-y-[350px]">
                <div class='shadow overflow-hidden pb-5'>
                    <div class='m-5 bg-white'>
                        <img style='height: 80%;' src="s2.png" alt='s2'/>
                    </div>
                </div>
            </div>

            
        </div>

        <div class="p-5 flex">
            <Button class="bg-[#deb887] m-2">Request a Demo</Button>
            <Button class="bg-[#deb887] m-2 "
                >Watch our video <Video class="m-2" />
            </Button>
        </div>

        <Card.Root class="p-20 m-2 bg-white bg-opacity-0 border-none">
            <Card.Header>
                <Card.Title>Meet the Team!</Card.Title>
            </Card.Header>

            <Carousel.Root
                class="w-full max-w"
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <Carousel.Content class="-ml-1">
                    {#each [{ name: "Shawheen Wingrove", email: "shawheen@wingrove.org", linkedin: "https://www.linkedin.com/in/shawheenw/", isrc: "sw.JPG" }, { isrc: "cc.JPG", name: "Clayton Carrillo", linkedin: "www.linkedin.com/in/clayton-carrillo-822bb1264" }, { isrc: "tt.JPG", name: "Trung Tran", email: "trungtran63470@gmail.com", linkedin: "https://www.linkedin.com/in/trung-tran1234/" }, { isrc: "dd.JPG", name: "影尘 白(David)", email: "crysisbai2001@gmail.com", linkedin: "https://www.linkedin.com/in/yingchen-bai/" }, { isrc: "rr.JPG", name: "Robert Schacherbauer", email: "robert.schacherbauer@sjsu.edu" }, { isrc: "ss.JPG", name: "Sohan Bairaboina", email: "Sohanb152@gmail.com" }, { isrc: "bb.JPG", name: "Bence Danko", email: "bence.danko@sjsu.edu", linkedin: "https://www.linkedin.com/in/bence-jordan-danko/" }] as { name, email, linkedin, isrc }}
                        <Carousel.Item class="pl-1 md:basis-1/3 lg:basis-1/3">
                            <div class="p-1">
                                <Card.Root>
                                    <Card.Content
                                        class="grid grid-cols-1 aspect-square items-center justify-center p-6"
                                    >
                                        <Card.Root class="p-2 m-3">
                                            <div class="self-center">
                                                {name}
                                            </div>
                                        </Card.Root>

                                        {#if isrc}
                                            <div>
                                                <Avatar.Root class="w-13 h-13">
                                                    <Avatar.Image src={isrc} />
                                                    <Avatar.Fallback
                                                        >CN</Avatar.Fallback
                                                    >
                                                </Avatar.Root>
                                            </div>
                                        {/if}

                                        <Card.Root>
                                            <Card.Content
                                                class="p-2 overflow-hidden"
                                            >
                                                {#if email}
                                                    <p>{email}</p>
                                                {/if}
                                                {#if linkedin}
                                                    <a
                                                        href={linkedin}
                                                        target="_blank"
                                                        >{linkedin}</a
                                                    >
                                                {/if}
                                            </Card.Content>
                                        </Card.Root>
                                    </Card.Content>
                                </Card.Root>
                            </div>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous />
                <Carousel.Next />
            </Carousel.Root>
        </Card.Root>
    </div>
</main>
