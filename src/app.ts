import express, { Application } from "express";
import HelloRoute from "./infrastructure/http/routes/v1/hello.route";

export default class App {
  public app: Application;
  private readonly port: number | string;

  constructor(port: number | string = 3000) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    // Podés agregar middlewares como cors, helmet, morgan, etc. aquí
  }

  private initializeRoutes(): void {
    this.app.use("/api/v1", HelloRoute);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
    });
  }

  public getServer(): Application {
    return this.app;
  }
}
