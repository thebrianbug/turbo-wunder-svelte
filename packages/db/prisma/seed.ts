import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const todos = await Promise.all([
    prisma.todo.upsert({
      where: { id: 1 },
      update: {},
      create: {
        task: 'Walk dog'
      }
    }),
    prisma.todo.upsert({
      where: { id: 2 },
      update: {},
      create: {
        task: 'Wake up',
        isDone: true
      }
    })
  ]);

  console.log({ todos });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
