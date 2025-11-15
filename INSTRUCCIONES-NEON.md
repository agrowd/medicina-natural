# 🗄️ Instrucciones para Configurar Base de Datos en Neon

## 📋 Pasos para Configurar Neon PostgreSQL

### 1. Crear Proyecto en Neon

1. Ir a [neon.tech](https://neon.tech)
2. Crear cuenta o iniciar sesión
3. Crear un nuevo proyecto
4. Nombre sugerido: `medicina-natural-db`
5. Seleccionar región más cercana (recomendado: US East)

### 2. Obtener Connection String

1. En el dashboard de Neon, ir a la pestaña **"Connection Details"**
2. Copiar el **Connection String** (formato: `postgresql://user:password@host/dbname?sslmode=require`)

### 3. Configurar Variables de Entorno

Agregar en Vercel Dashboard (Settings → Environment Variables):

```env
# Neon PostgreSQL Connection String
POSTGRES_URL=postgresql://usuario:password@ep-xxx.region.neon.tech/neondb?sslmode=require
DATABASE_URL=postgresql://usuario:password@ep-xxx.region.neon.tech/neondb?sslmode=require
```

**Importante:** Ambas variables deben tener el mismo valor.

### 4. Inicializar Base de Datos

Hay 3 formas de inicializar la base de datos:

#### Opción A: Desde Neon Console (Recomendado)

1. Ir a Neon Dashboard → Tu proyecto
2. Click en **"SQL Editor"**
3. Abrir el archivo `scripts/init-neon-db.sql` desde este proyecto
4. Copiar y pegar todo el contenido
5. Ejecutar el script

#### Opción B: Desde API de Vercel (Automático)

Una vez configuradas las variables de entorno, visitar:

```
https://tu-dominio.vercel.app/api/init-db
```

Este endpoint creará todas las tablas automáticamente.

#### Opción C: Desde Terminal con psql

```bash
# Instalar psql si no lo tienes
# Windows: Instalar PostgreSQL desde postgresql.org
# Mac: brew install postgresql
# Linux: sudo apt install postgresql-client

# Conectar y ejecutar script
psql "postgresql://usuario:password@ep-xxx.region.neon.tech/neondb?sslmode=require" -f scripts/init-neon-db.sql
```

### 5. Verificar que las Tablas se Crearon

En Neon Console → SQL Editor, ejecutar:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
```

Deberías ver estas tablas:
- `products`
- `coupons`
- `cart_sessions`
- `whatsapp_conversations`
- `whatsapp_messages`
- `whatsapp_bot_messages`
- `whatsapp_sessions`

## 📊 Tablas Creadas

### 1. **products** - Catálogo de productos
- Información completa de productos CBD
- Precios, stock, imágenes, videos
- Sistema de ofertas/promociones

### 2. **coupons** - Cupones de descuento
- Códigos de descuento
- Descuentos porcentuales o fijos
- Límites de uso y expiración

### 3. **cart_sessions** - Sesiones de carrito
- Carritos persistentes
- Sincronización entre dispositivos
- TTL de 7 días

### 4. **whatsapp_conversations** - Conversaciones
- Leads y contactos
- Estado de conversaciones
- Asignación a vendedores

### 5. **whatsapp_messages** - Mensajes
- Historial completo de mensajes
- Mensajes entrantes y salientes
- Estado de lectura

### 6. **whatsapp_bot_messages** - Mensajes del bot
- Cadena de mensajes automatizados
- Configurable desde admin
- Orden y delays

### 7. **whatsapp_sessions** - Sesiones del bot
- Estado de conexión del bot
- QR codes para escanear
- Información de la sesión activa

## 🔧 Comandos Útiles

### Verificar Conexión
```bash
# Desde terminal
curl https://tu-dominio.vercel.app/api/health
```

### Inicializar Base de Datos
```bash
# GET request
curl https://tu-dominio.vercel.app/api/init-db

# O desde navegador
https://tu-dominio.vercel.app/api/init-db
```

### Inicializar Solo Cupones
```bash
curl https://tu-dominio.vercel.app/api/init-coupons
```

### Inicializar Solo Carrito
```bash
curl https://tu-dominio.vercel.app/api/init-cart-sessions
```

### Inicializar Solo WhatsApp
```bash
curl https://tu-dominio.vercel.app/api/whatsapp/init-db
```

## ⚠️ Notas Importantes

1. **Variables de Entorno:** Configurar antes de hacer deploy
2. **Connection String:** Debe incluir `?sslmode=require`
3. **POSTGRES_URL y DATABASE_URL:** Deben tener el mismo valor
4. **Índices:** Se crean automáticamente para optimizar consultas
5. **Triggers:** Actualizan `updated_at` automáticamente

## 🔍 Verificar que Todo Funciona

1. Verificar conexión: `/api/health`
2. Verificar productos: `/api/products` (debe devolver `[]` si no hay productos)
3. Verificar cupones: `/api/coupons` (debe devolver `[]` si no hay cupones)
4. Verificar WhatsApp: `/api/whatsapp/conversations` (debe devolver `[]`)

## 🐛 Solución de Problemas

### Error: "relation does not exist"
- Ejecutar el script de inicialización nuevamente
- Verificar que las variables de entorno están configuradas

### Error: "connection refused"
- Verificar que el Connection String es correcto
- Verificar que la IP está permitida en Neon (neon permite todas por defecto)

### Error: "SSL required"
- Agregar `?sslmode=require` al final del Connection String

## 📝 Próximos Pasos

Una vez inicializada la base de datos:

1. ✅ Agregar productos desde `/admin/productos`
2. ✅ Configurar cupones desde `/admin/cupones`
3. ✅ Configurar bot de WhatsApp desde `/admin/whatsapp-configuracion`
4. ✅ Probar el sistema completo

