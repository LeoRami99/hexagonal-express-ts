import { Request, Response } from "express";

import { GreetinServiceImpl } from "../services/GreetingServiceImpl";

export default class HelloController {
  constructor(private readonly greetingService: GreetinServiceImpl) {}
  helloController = async (req: Request, res: Response) => {
    const message = this.greetingService.getGreeting();
    res.json({ message });
  };
}
