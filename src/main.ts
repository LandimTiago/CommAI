import { createServer } from "./infrastructure/http/fastify-server";
import { container } from "./infrastructure/di/container";

async function bootstrap() {
  const server = await createServer(container);
  await server.listen({ port: 3000, host: "0.0.0.0" });
}

bootstrap().catch((err) => {
  console.error("Error starting server:", err);
  process.exit(1);
});
