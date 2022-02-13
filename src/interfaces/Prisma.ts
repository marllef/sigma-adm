import { Prisma } from "@prisma/client";

export type ClienteWithAddress = Prisma.ClienteGetPayload<{
  include: {
    address: true;
  };
}>;
