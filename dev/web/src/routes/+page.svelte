<script lang="ts">
    import IndexNav from "$lib/components/IndexNav.svelte";
    import * as Accordion from "$lib/components/ui/accordion";
    import * as Card from "$lib/components/ui/card";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<style>
    @media (max-width: 768px) {
        .big-title {
            font-size: 1.25rem; /* Smaller font size for mobile */
            padding: 0 1rem; /* Add padding to prevent text from touching the edges */
        }
        .card-grid {
            grid-template-columns: repeat(1, 1fr); /* Single column layout for cards on mobile */
        }
        .responsive-text {
            font-size: 0.875rem; /* Smaller text for better readability on mobile */
            line-height: 1.25rem; /* Increased line height for better text spacing */
            padding: 0 1rem; /* Add padding to prevent text from touching the edges */
        }
        .padded-container {
            padding: 0 1rem; /* Ensuring consistent padding across all mobile containers */
        }
    }
</style>

<main>
    <IndexNav />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 rounded-lg shadow-lg padded-container">
            <h1 class="text-xl md:text-5xl big-title">
                Driving Efficiency, Powering Performance: Your Dealership's
                Ultimate Service Solution
            </h1>
        </div>

        <div class="flex justify-center items-center padded-container">
            <img src="/logo.png" alt="logo" class="max-w-full h-auto" />
        </div>
    </div>

    <h2 class="responsive-text text-sm md:text-lg font-medium text-gray-600 p-5">
        One simple login for your entire service pipeline. Car-Rillo is poised
        to revolutionize the way automotive dealerships manage their service
        operations. A comprehensive, end-to-end platform that streamlines the
        entire vehicle servicing process.
    </h2>

    <div class="p-5 grid card-grid grid-cols-2 md:grid-cols-4 gap-5">
        {#each [{ name: "Shawheen Wingrove", email: "shawheen@wingrove.org", linkedin: 'https://www.linkedin.com/in/shawheenw/' }, { name: "Clayton Carrillo", linkedin: "www.linkedin.com/in/clayton-carrillo-822bb1264" }, { name: "影尘 白(David)", email: "crysisbai2001@gmail.com", linkedin: 'https://www.linkedin.com/in/yingchen-bai/' }, { name: "Robert Schacherbauer", email: 'robert.schacherbauer@sjsu.edu' }, { name: "Sohan Bairaboina" }, { name: "Bence Danko", email: "bence.danko@sjsu.edu", linkedin: 'https://www.linkedin.com/in/bence-jordan-danko/' }, { name: "Trung Tran", email: "trungtran63470@gmail.com", linkedin: "https://www.linkedin.com/in/trung-tran1234/" }] as { name, email, linkedin }}
            <Card.Root class="relative shadow-lg p-2 rounded-lg padded-container">
                <Card.Title>{name}</Card.Title>
                <Card.Content class="p-2">
                    {#if email}
                        <p>{email}</p>
                    {/if}
                    {#if linkedin}
                        <a href={linkedin} target="_blank">{linkedin}</a>
                    {/if}
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</main>
