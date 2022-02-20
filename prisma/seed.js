const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const prisma = new PrismaClient();
const { cliente } = prisma;

function genGender() {
  return Math.random() > 0.5 ? "MALE" : "FEMALE";
}

function genTel() {
  let regEx = /([0-9]{2})([0-9]{5})([0-9]{4})/;
  const telefone = faker.datatype
    .number({ min: 84990000001, max: 84999999999 })
    .toString()
    .replace(regEx, "($1) $2-$3");
  return telefone;
}

async function main() {
  faker.locale = "pt_BR";

  for (let i = 0; i < 20; i++) {
    let gender = faker.name.gender(true);
    let fname = faker.name.firstName(gender);
    let lname = faker.name.lastName(gender);

    const mCliente = await cliente.create({
      data: {
        name: faker.name.findName(fname, lname, gender),
        email: faker.internet.email(fname, lname),
        cpf: faker.datatype
          .number({ min: 10000000000, max: 99999999999 })
          .toString(),
        gender: gender,
        tel: genTel(),

        address: {
          create: {
            city: faker.address.county(),
            district: faker.address.county(),
            number: faker.datatype
              .number({
                min: 1,
                max: 1000,
              })
              .toString(),
            state: faker.address.state(false),
            postalcode: faker.address.zipCode(),
            street: faker.address.streetName(),
          },
        },
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
