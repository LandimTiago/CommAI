import Fastify from "fastify";
import { Container } from "inversify";
import { registerRoutes } from "./routes";

export async function createServer(container: Container) {
  const server = Fastify();

  // Registrar rotas
  registerRoutes(server, container);

  return server;
}
