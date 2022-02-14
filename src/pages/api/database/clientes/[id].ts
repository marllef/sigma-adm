import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente } from "@prisma/client";
import { ClienteWithAddress } from "~/interfaces/Prisma";
import { parse } from "~/utils/parse-json";
import Database from "~/database/DatabaseClient";

type Data = Cliente | null;

const { cliente } = Database.getInstance().prisma;

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
          include: {
            address: true,
          },
        });

        res.status(200).json(deletedCliente);
        break;
      case "GET":
        const getCliente = await cliente.findUnique({
          where: {
            id: Number(id),
          },
          include: {
            address: true,
          },
        });
        res.status(200).json(getCliente);
        break;
      case "PUT":
        const { name, tel, address } = parse<ClienteWithAddress>(req);
        console.log(name);
        const putCliente = await cliente.update({
          where: {
            id: Number(id),
          },

          data: {
            name,
            tel,
            address: {
              update: {
                ...address,
              },
            },
            updated_at: new Date(),
          },

          include: {
            address: true,
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
