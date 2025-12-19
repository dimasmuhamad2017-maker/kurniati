import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, customerEmail, customerPhone, customerAddress, businessType, items, deliveryDate, notes } = body

    if (!customerName || !customerPhone || !customerAddress || !items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create or find customer
    let customer = await db.customer.findFirst({
      where: {
        OR: [
          { email: customerEmail },
          { phone: customerPhone }
        ]
      }
    })

    if (!customer) {
      customer = await db.customer.create({
        data: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
          address: customerAddress,
          businessType
        }
      })
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`

    // Calculate total amount
    const totalAmount = items.reduce((sum: number, item: any) => {
      return sum + (item.quantity * item.unitPrice)
    }, 0)

    // Create order
    const order = await db.order.create({
      data: {
        orderNumber,
        customerId: customer.id,
        totalAmount,
        deliveryAddress: customerAddress,
        deliveryDate: deliveryDate ? new Date(deliveryDate) : null,
        notes,
        status: 'pending'
      }
    })

    // Create order items
    for (const item of items) {
      await db.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: item.unitPrice
        }
      })

      // Update product stock
      await db.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      })
    }

    // Fetch complete order with relations
    const completeOrder = await db.order.findUnique({
      where: { id: order.id },
      include: {
        customer: true,
        orderItems: {
          include: {
            product: true
          }
        }
      }
    })

    return NextResponse.json({
      success: true,
      data: completeOrder,
      message: 'Pesanan Anda telah berhasil dibuat. Kami akan segera menghubungi Anda untuk konfirmasi.'
    })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const orders = await db.order.findMany({
      include: {
        customer: true,
        orderItems: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({
      success: true,
      data: orders
    })
  } catch (error) {
    console.error('Error fetching orders:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}