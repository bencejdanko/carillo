<script>
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";

    import { useChat } from "ai/svelte";
    const { input, handleSubmit, messages } = useChat();

</script>

<main>
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
</main>
