import { GreetingService } from "../../../domain/ports/GreetingService";

export class GreetinServiceImpl implements GreetingService {
  getGreeting(): string {
    return "Hola mundo";
  }
}
