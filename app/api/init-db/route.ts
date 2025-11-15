import { NextResponse } from "next/server"
import { sql } from '@vercel/postgres'
import { initWhatsAppDatabase } from '@/lib/whatsapp-db'

export async function POST() {
  try {
    console.log('[Init DB] Starting database initialization...')
    
    // 1. Tabla de productos
    console.log('[Init DB] Creating products table...')
    await sql`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL,
        slug VARCHAR UNIQUE NOT NULL,
        description TEXT NOT NULL,
        long_description TEXT,
        price INTEGER NOT NULL,
        compare_at INTEGER,
        category VARCHAR NOT NULL,
        sizes TEXT[] NOT NULL DEFAULT '{}',
        colors TEXT[] NOT NULL DEFAULT '{}',
        images TEXT[] NOT NULL DEFAULT '{}',
        videos TEXT[] NOT NULL DEFAULT '{}',
        tags TEXT[] NOT NULL DEFAULT '{}',
        stock INTEGER NOT NULL DEFAULT 0,
        featured BOOLEAN NOT NULL DEFAULT false,
        sku VARCHAR NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_on_sale BOOLEAN NOT NULL DEFAULT false,
        sale_price INTEGER,
        sale_start_date TIMESTAMP,
        sale_end_date TIMESTAMP,
        sale_duration_days INTEGER DEFAULT 7
      )
    `
    console.log('[Init DB] ✅ Products table created')
    
    // 2. Tabla de cupones
    console.log('[Init DB] Creating coupons table...')
    await sql`
      CREATE TABLE IF NOT EXISTS coupons (
        id SERIAL PRIMARY KEY,
        code VARCHAR(50) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
        discount_value DECIMAL(10, 2) NOT NULL,
        min_purchase DECIMAL(10, 2) DEFAULT 0,
        max_uses INTEGER DEFAULT NULL,
        current_uses INTEGER DEFAULT 0,
        expires_at TIMESTAMP,
        is_active BOOLEAN DEFAULT true,
        categories TEXT[] DEFAULT '{}',
        image_url TEXT,
        public_url VARCHAR(255) UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    console.log('[Init DB] ✅ Coupons table created')
    
    // 3. Tabla de sesiones de carrito
    console.log('[Init DB] Creating cart_sessions table...')
    await sql`
      CREATE TABLE IF NOT EXISTS cart_sessions (
        id SERIAL PRIMARY KEY,
        session_id VARCHAR(255) UNIQUE NOT NULL,
        user_id VARCHAR(255),
        items JSONB DEFAULT '[]',
        applied_coupon JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP DEFAULT (CURRENT_TIMESTAMP + INTERVAL '7 days')
      )
    `
    console.log('[Init DB] ✅ Cart sessions table created')
    
    // 4. Tablas de WhatsApp (conversaciones, mensajes, bot messages, sessions)
    console.log('[Init DB] Creating WhatsApp tables...')
    await initWhatsAppDatabase()
    console.log('[Init DB] ✅ WhatsApp tables created')
    
    // 5. Índices adicionales
    console.log('[Init DB] Creating indexes...')
    await sql`CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug)`
    await sql`CREATE INDEX IF NOT EXISTS idx_products_category ON products(category)`
    await sql`CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured)`
    await sql`CREATE INDEX IF NOT EXISTS idx_products_sale ON products(is_on_sale)`
    await sql`CREATE INDEX IF NOT EXISTS idx_coupons_code ON coupons(code)`
    await sql`CREATE INDEX IF NOT EXISTS idx_coupons_active ON coupons(is_active)`
    await sql`CREATE INDEX IF NOT EXISTS idx_coupons_expires ON coupons(expires_at)`
    await sql`CREATE INDEX IF NOT EXISTS idx_cart_sessions_session_id ON cart_sessions(session_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_cart_sessions_user_id ON cart_sessions(user_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_cart_sessions_expires_at ON cart_sessions(expires_at)`
    console.log('[Init DB] ✅ Indexes created')
    
    console.log('[Init DB] ✅ Database initialization completed successfully')
    
    return NextResponse.json({ 
      success: true,
      message: "Database initialized successfully",
      tables: [
        'products',
        'coupons',
        'cart_sessions',
        'whatsapp_conversations',
        'whatsapp_messages',
        'whatsapp_bot_messages',
        'whatsapp_sessions'
      ]
    })
  } catch (error) {
    console.error('[Init DB] ❌ Error initializing database:', error)
    return NextResponse.json({ 
      success: false,
      error: "Error initializing database",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// También permitir GET para facilitar el testing desde el navegador
export async function GET() {
  return POST()
}
