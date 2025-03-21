import connectDBm from '@/config/dbm'
import Product from '@/models/Product'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {

    await connectDBm()

    const products = await Product.find({})
    return NextResponse.json({ success:true, products })

  } catch (error) {
    return NextResponse.json({ success:false, message: error.message })
  }
}