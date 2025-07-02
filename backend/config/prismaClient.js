const fs = require('fs');
const path = require('path');

// Paths
const modelDir = path.join(__dirname, '../prisma/models');
const outputFile = path.join(__dirname, '../prisma/schema.prisma');

// Prisma header (generator + datasource block)
const prismaHeader = `generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

`;

// Combine all .prisma model files into one schema.prisma
function buildSchema() {
  let schema = prismaHeader;

  const files = fs.readdirSync(modelDir).filter(f => f.endsWith('.prisma'));

  files.forEach(file => {
    const content = fs.readFileSync(path.join(modelDir, file), 'utf8');
    schema += `// --- ${file} ---\n` + content + '\n\n';
  });

  fs.writeFileSync(outputFile, schema);
  console.log(`✅ schema.prisma built with ${files.length} model(s).`);
}

buildSchema();
