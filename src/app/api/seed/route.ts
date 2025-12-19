import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST() {
  try {
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

    const createdProducts = []
    for (const product of products) {
      const created = await db.product.create({
        data: product
      })
      createdProducts.push(created)
    }

    return NextResponse.json({
      success: true,
      data: createdProducts,
      message: 'Database seeded successfully!'
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}