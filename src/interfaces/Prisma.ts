import { Prisma } from "@prisma/client";

export type ClienteWithAddress = Prisma.ClienteGetPayload<{
  include: {
    address: true;
  };
}>;

export type BudgetWithDetails = Prisma.BudgetGetPayload<{
  include: {
    details: true;
  };
}>;
