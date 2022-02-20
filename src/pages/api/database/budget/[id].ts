import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente, Budget } from "@prisma/client";
import { ClienteWithAddress, BudgetWithDetails } from "~/interfaces/Prisma";
import { parse } from "~/utils/parse-json";
import Database from "~/database/DatabaseClient";

type Data = BudgetWithDetails | null;

const { budget } = Database.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { id } = req.query;

    switch (req.method) {
      case "GET":
        const getCliente = await budget.findUnique({
          where: {
            id: Number(id),
          },
          include: {
            details: true,
          },
        });
        res.status(200).json(getCliente);
        break;
      case "PUT":
        const { name, tel, address } = parse<ClienteWithAddress>(req);

        break;
      case "DELETE":
        break;
      default:
        throw new Error(
          `The HTTP ${req.method} method is not supported at this route.`
        );
    }
  } catch (err: any) {
    console.log(err.message);
  }
}
