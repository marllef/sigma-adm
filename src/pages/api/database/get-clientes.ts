// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente, PrismaClient } from "@prisma/client";

type Data = Cliente | Cliente[];

type APIError = {
  message?: string;
  type: string;
  status?: number;
};

const { cliente } = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | APIError>
) {
  try {
    switch (req.method) {
      case "POST":
        const { id } = req.body;
        const dbClient = await cliente.findFirst({
          where: {
            id: id,
          },
        });

        if (dbClient) {
          return res.status(200).json(dbClient);
        }

        return res.status(404).json({
          message: "Cliente não encontrado.",
          status: 404,
          type: "NoDataFound",
        });

      case "GET":
        const dbClients = await cliente.findMany({});
        if (dbClients) {
          return res.status(200).json(dbClients);
        }

        return res.status(404).json({
          message: "Nenhum dado encontrado.",
          status: 404,
          type: "NoDataFound",
        });

      default:
        return res.status(405).json({
          status: 405,
          type: "MethodNotAllowed",
          message: "Method Not Allowed!",
        });
    }
  } catch (err: any) {
    return res.json({
      message: err?.message,
      type: "ApiError",
      status: 500,
    });
  }
}
