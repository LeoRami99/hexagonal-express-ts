import { User } from "../entities/User";

export interface UserRepository {
	findAll(): Promise<User[]>;
	findById(id: string): Promise<User | null>;
	save(user: User): Promise<void>;
	findByEmail?(email: string): Promise<User | null>;
}
