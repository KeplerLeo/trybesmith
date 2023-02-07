import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCodes from '../statusCodes';

export default class OrderController {
  constructor(private service = new OrderService()) {}

  public findAll = async (_req: Request, res: Response) => {
    const orders = await this.service.findAll();
    res.status(statusCodes.OK).send(orders);
  };
}
