import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const userId = result.insertId;
    return { id: userId, username, vocation, level, password };
  }
}
