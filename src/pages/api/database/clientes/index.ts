// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente, PrismaClient } from "@prisma/client";

type Data = Cliente | Cliente[] | null;

const { cliente } = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        const mCliente = await cliente.findMany({});
        res.status(200).json(mCliente);
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
