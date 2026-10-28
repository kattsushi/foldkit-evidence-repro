const result = await Bun.build({
  entrypoints: ["./example/main.ts"],
  outdir: "./dist",
  target: "browser"
})
if (!result.success) {
  for (const log of result.logs) console.error(log)
  process.exit(1)
}
const port = Number(process.env.PORT ?? 5346)
const server = Bun.serve({
  port,
  hostname: "127.0.0.1",
  fetch(request) {
    const path = new URL(request.url).pathname
    if (path === "/") return new Response(Bun.file("./example/index.html"))
    if (path === "/main.js") return new Response(Bun.file("./dist/main.js"))
    return new Response("Not found", { status: 404 })
  }
})
console.log(`Foldkit task board: ${server.url}`)
