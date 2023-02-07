import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../statusCodes';

export default class ProductController {
  constructor(private service = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
    res.status(statusCodes.CREATED).send(product);
  };

  public findAll = async (_req: Request, res: Response) => {
    const products = await this.service.findAll();
    res.status(statusCodes.OK).send(products);
  };
}
