<script>
    import IndexNav from "$lib/components/IndexNav.svelte";
    import * as Accordion from "$lib/components/ui/accordion";

</script>

<link rel="stylesheet" href="/styles.css" />

<main>
    <IndexNav />

    <div
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
                  <Accordion.Content>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
        </div>
    </div>

    <div
        class="absolute w-screen h-0
    border-t-[0px] border-t-transparent
    border-r-[700px] border-r-[#ee8c7e] border-opacity-40
    border-b-[400px] border-b-transparent"
    >
        <div class="grid grid-col-2">
            <div class="gradient-container m-5">
                <div class="gradient-background">
                    <h1 class="text-8xl">Driving Efficiency, Powering Performance: Your Dealership's Ultimate Service Solution</h1>
                </div>
            </div>
        </div>
        <h2 class="h2 m-5 text-lg">Streamline your service pipeline</h2>
    </div>
</main>
