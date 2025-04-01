import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { container } from "tsyringe";

const userService = container.resolve(UserService);
export class UserController {
	async getAllUsers(req: Request, res: Response) {
		const users = await userService.getAllUsers();
		res.json(users);
	}
	async createUser(req: Request, res: Response) {
		const { name, email } = req.body;
		const user = await userService.create({
			name,
			email,
		});
		res.status(201).json({ ok: true, user });
	}
}
