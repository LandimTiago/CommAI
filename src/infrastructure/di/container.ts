import { Container } from "inversify";
import { WatsonXService } from "../sdk/watsonx/watsonx-service";
import { InfobipService } from "../sdk/infobip/infobip-service";

// Criar o container de injeção de dependências
const container = new Container();

// Registrar serviços
container.bind(WatsonXService).toSelf();
container.bind(InfobipService).toSelf();

export { container };
