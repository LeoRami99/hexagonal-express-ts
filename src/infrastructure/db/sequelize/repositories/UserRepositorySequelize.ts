import { UserRepository } from "../../../../domain/ports/UserRepository";
import { User } from "../../../../domain/entities/User";
import { UserModel } from "../models/user.model";

export class UserRepositorySequelize implements UserRepository {
	async findAll(): Promise<User[]> {
		const users = await UserModel.findAll();
		return users.map((u) => new User(u.id, u.name, u.email));
	}

	async findById(id: string): Promise<User | null> {
		const user = await UserModel.findByPk(id);
		return user ? new User(user.id, user.name, user.email) : null;
	}

	async save(user: User): Promise<void> {
		await UserModel.create({
			id: user.id,
			name: user.name,
			email: user.email,
		});
	}

	async findByEmail(email: string): Promise<User | null> {
		const user = await UserModel.findOne({ where: { email } });
		return user ? new User(user.id, user.name, user.email) : null;
	}
}
