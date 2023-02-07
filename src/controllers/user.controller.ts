import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../statusCodes';

export default class UserController {
  constructor(private service = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);
    res.status(statusCodes.CREATED).send({ token });
  };
}
