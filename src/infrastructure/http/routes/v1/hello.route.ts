import { Router } from "express";
import HelloController from "../../controllers/hello.controller";
import { GreetinServiceImpl } from "../../services/GreetingServiceImpl";

const router = Router();

const greetingService = new GreetinServiceImpl();

const helloController = new HelloController(greetingService);

router.get("/hello", helloController.helloController);

export default router;
