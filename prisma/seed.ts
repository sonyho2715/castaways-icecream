import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: { rejectUnauthorized: false },
})
const adapter = new PrismaPg(pool)
const db = new PrismaClient({ adapter })

async function main() {
  const flavors = [
    { name: 'Pandan Coconut', description: 'Southeast Asian pandan leaf with fresh coconut', tags: ['FAN_FAVORITE'] },
    { name: 'Salted Caramel', description: 'Rich caramel with a hint of sea salt', tags: ['FAN_FAVORITE'] },
    { name: 'Birthday Cake', description: 'Vanilla cake batter with rainbow sprinkles', tags: ['FAN_FAVORITE'] },
    { name: 'Matcha Green Tea', description: 'Premium Japanese matcha, earthy and sweet', tags: [] as string[] },
    { name: 'Blackberry Pie', description: 'Fresh blackberries with pie crust swirl', tags: ['SEASONAL'] },
    { name: 'Dark Chocolate', description: 'Rich, intense dark chocolate', tags: [] as string[] },
    { name: 'Madagascar Vanilla Bean', description: 'Pure vanilla from Madagascar, speckled with real beans', tags: [] as string[] },
    { name: 'Chocolate Chip Cookie', description: 'Cookie dough meets chocolate chips', tags: ['FAN_FAVORITE'] },
    { name: 'Rum Raisin', description: 'Classic rum-soaked raisins in creamy base', tags: [] as string[] },
    { name: 'Mint Chocolate Chip', description: 'Fresh mint with chocolate chips', tags: [] as string[] },
    { name: 'Pistachio', description: 'Roasted pistachio, naturally green', tags: [] as string[] },
    { name: 'Strawberry Banana', description: 'Fresh strawberry and ripe banana', tags: ['DAIRY_FREE'] },
    { name: 'Payday', description: 'Peanut brittle and salted caramel swirl', tags: ['FAN_FAVORITE'] },
    { name: 'Mango', description: 'Fresh tropical mango, Hawaii grown', tags: ['SEASONAL'] },
    { name: 'Ube', description: 'Purple yam, Filipino-inspired, vibrant and unique', tags: ['FAN_FAVORITE'] },
  ]

  for (const flavor of flavors) {
    await db.flavor.upsert({
      where: { name: flavor.name },
      update: {},
      create: flavor,
    })
  }

  console.log(`Seeded ${flavors.length} flavors`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
