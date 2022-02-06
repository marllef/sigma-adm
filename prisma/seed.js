const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();
const { cliente } = prisma;

async function main() {
  faker.locale = "pt_BR";
  for (let i = 0; i < 50; i++) {
    const mCliente = await cliente.create({
      data: {
        name: faker.name.findName(),
        cpf: faker.datatype
          .number({ min: 10000000000, max: 99999999999 })
          .toString(),
        tel: faker.phone.phoneNumber(),
        location: faker.address.cityName(),
      },
    });
    console.log(mCliente);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
