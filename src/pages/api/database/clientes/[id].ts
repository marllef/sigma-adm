// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente, PrismaClient } from "@prisma/client";
import { parse } from "~/utils/parse-json";

type Data = Cliente | null;

const { cliente } = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { id } = req.query;

    switch (req.method) {
      case "DELETE":
        const deletedCliente = await cliente.delete({
          where: {
            id: Number(id),
          },
        });

        res.status(200).json(deletedCliente);
        break;
      case "GET":
        const getCliente = await cliente.findUnique({
          where: {
            id: Number(id),
          },
        });
        res.status(200).json(getCliente);
        break;
      case "PUT":
        const { location, name, tel } = parse<Cliente>(req);
        console.log(name);
        const putCliente = await cliente.update({
          data: {
            location,
            name,
            tel,
            updated_at: new Date(),
          },
          where: {
            id: Number(id),
          },
        });

        res.status(200).json(putCliente);
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
