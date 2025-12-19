import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const contact = await db.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message
      }
    })

    return NextResponse.json({
      success: true,
      data: contact,
      message: 'Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.'
    })
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({
      success: true,
      data: contacts
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}