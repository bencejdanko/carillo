<script lang='ts'>
    import MNav from '$lib/components/MNav.svelte';
    import Jobs from '$lib/components/Jobs.svelte';

    import * as Card from "$lib/components/ui/card";
    import MRepairs from '$lib/components/MRepairs.svelte';
    import Appointments from '$lib/components/Appointments.svelte';
    import Analytics from '$lib/components/Analytics.svelte';

</script>

<main>
    <MNav />

    <div class='grid grid-cols-2 m-2 gap-2'>
        <Jobs />

        <Card.Root class='p-2'>
            <MRepairs />
            <Appointments />
            <Analytics />
        </Card.Root>
    </div>
</main>