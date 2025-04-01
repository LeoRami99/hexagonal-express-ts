import { UserRepository } from "../../../domain/ports/UserRepository";
import { User } from "../../../domain/entities/User";
import { injectable, inject } from "tsyringe";
import { HttpException } from "../errors/HttpException";

@injectable()
export class UserService {
	constructor(
		@inject("UserRepository")
		private readonly userRepository: UserRepository
	) {}
	async getAllUsers(): Promise<User[]> {
		return this.userRepository.findAll();
	}
	async create(user: User): Promise<void> {
		if (!user.name || !user.email) {
			throw new HttpException(400, "Name and email are required");
		}
		const existing = await this.userRepository.findByEmail?.(user.email);
		if (existing?.email) {
			throw new HttpException(409, "User with this email already exists");
		}
		return this.userRepository.save(user);
	}
}
