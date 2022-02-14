// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Cliente } from "@prisma/client";
import Database from "~/database/DatabaseClient";

type Data = Cliente | Cliente[] | null;

const { cliente } = Database.getInstance().prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    switch (req.method) {
      case "GET":
        const clientes = await cliente.findMany({
          orderBy: {
            name: "asc",
          },
          include: {
            address: true,
          },
        });

        res.status(200).json(clientes);
        break;
      case "POST":
        const { name, email, gender, tel, cpf, address } =
          typeof req.body !== "object" ? JSON.parse(req.body) : req.body;

        const newCliente = await cliente.create({
          data: {
            name,
            tel,
            cpf,
            gender,
            email,
            address: {
              create: {
                ...address,
              },
            },
          },
          include: {
            address: true,
          },
        });
        console.log("Cadastrado: ", newCliente);
        res.status(200).json(newCliente);
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
