import database from '@src/db';
import { User } from '@src/models/User';


export const findByEmail = async (email: string) => {
	const strQuery = `select * from "Users" where email = '${email}'`;
	const result = await database.query(strQuery);

	return result[0][0];
};

export const createUser = async (
	fullname: string,
	email: string,
	password: string
) => {
	const strQuery = `insert into "Users"(fullname, email, password, role, status)
     values ('${fullname}', '${email}', '${password}', 0, ${false})`;

	await database.query(strQuery);

	return true;
};