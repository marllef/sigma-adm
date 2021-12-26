// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente, PrismaClient } from "@prisma/client";

type Data = Cliente;

type APIError = {
  message?: string;
  type: string;
  code?: number;
};

const { cliente } = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | APIError>
) {
  try {
    switch (req.method) {
      case "POST":
        const { id }: Cliente =
          typeof req.body !== "object" ? JSON.parse(req.body) : req.body;

        const deletedCliente = await cliente.delete({
          where: {
            id: id,
          },
        });

        //console.log("Cliente deletado com sucesso!", deletedCliente);
        return res.status(200).json(deletedCliente);

      default:
        return res.status(405).json({
          code: 405,
          type: "MethodNotAllowed",
          message: "Method Not Allowed!",
        });
    }
  } catch (err: any) {
    console.log(err?.message);

    return res.status(500).json({
      message: err?.message,
      type: err?.meta?.target[0].toUpperCase(),
      code: err?.code,
    });
  }
}
