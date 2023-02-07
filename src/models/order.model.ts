import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findAll(): Promise<Order[]> {
    const [rows] = await this.connection.execute(
      `SELECT  orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders JOIN Trybesmith.products 
      ON products.order_id = orders.id GROUP BY orders.id`,
    );
    return rows as Order[];
  }
}
