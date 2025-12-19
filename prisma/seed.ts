import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample products
  const products = [
    {
      name: 'Telur Ayam Kampung',
      description: 'Telur segar langsung dari peternakan tradisional dengan kualitas premium',
      category: 'kampung',
      price: 35000,
      unit: 'lusin',
      stock: 500,
      image: '/images/telur-kampung.jpg'
    },
    {
      name: 'Telur Ayam Negeri',
      description: 'Telur produksi peternakan modern dengan kualitas konsisten',
      category: 'negeri',
      price: 28000,
      unit: 'lusin',
      stock: 1000,
      image: '/images/telur-negeri.jpg'
    },
    {
      name: 'Telur Olahan Salted Egg',
      description: 'Telur asin berkualitas dengan kemasan higienis',
      category: 'olahan',
      price: 15000,
      unit: 'pack',
      stock: 200,
      image: '/images/telur-asin.jpg'
    },
    {
      name: 'Telur Rebus Vacuum',
      description: 'Telur rebus siap saji dengan kemasan vacuum yang praktis',
      category: 'olahan',
      price: 12000,
      unit: 'pack',
      stock: 150,
      image: '/images/telur-rebus.jpg'
    }
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })