import jwt from 'jsonwebtoken';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<string> {
    const { username, vocation, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const payload = { id: result.insertId, username, vocation, level };
    const token = jwt.sign(payload, process.env.JWT_SECRET as string);
    return token;
  }
}
