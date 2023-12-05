// bikin modul prisma connector ke database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// prisma buat ngegantiin pool yang ada 
module.exports = { prisma }

