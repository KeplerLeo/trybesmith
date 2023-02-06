import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const productId = result.insertId;
    return { id: productId, name, amount };
  }

  public async findAll(): Promise<Product[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return rows as Product[];
  }
}
