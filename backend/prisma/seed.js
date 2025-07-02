const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    const passwordHash = await bcrypt.hash('password123', 10);

    await prisma.user.upsert({
        where: { email: 'king@marriage.com' },
        update: {},
        create: {
            name: 'King User',
            email: 'king@marriage.com',
            password: passwordHash,
            role: 'king',
            gender: 'male',
            dob: new Date('1985-01-01'),
            maritalStatus: 'single',
        },
    });

    await prisma.user.upsert({
        where: { email: 'admin@marriage.com' },
        update: {},
        create: {
            name: 'Admin User',
            email: 'admin@marriage.com',
            password: passwordHash,
            role: 'admin',
            gender: 'male',
            dob: new Date('1990-01-01'),
            maritalStatus: 'single',
        },
    });


    await prisma.user.upsert({
        where: { email: 'user@marriage.com' },
        update: {},
        create: {
            name: 'Regular User',
            email: 'user@marriage.com',
            password: passwordHash,
            role: 'user',
            gender: 'female',
            dob: new Date('1995-05-20'),
            maritalStatus: 'single',
        },
    });

    console.log('🌱 Seeding successful');
    console.log('✅ Seeded users: king, admin and user');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
