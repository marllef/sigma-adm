// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Budget, Cliente } from "@prisma/client";
import Database from "~/database/DatabaseClient";

type Data = Budget | Budget[] | null;

const { budget } = Database.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        const budgets = await budget.findMany({
          orderBy: {
            id: "asc",
          },
          include: {
            details: true,
          },
        });

        res.status(200).json(budgets);
        break;
      case "POST":
        const { name, email, gender, tel, cpf, address } =
          typeof req.body !== "object" ? JSON.parse(req.body) : req.body;

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
