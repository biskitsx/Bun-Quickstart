import figlet from "figlet";

const server = Bun.serve({
    fetch() {
        const body = figlet.textSync("Bun Quickstart!");
        return new Response(body);
    },
    port: 3000,
});