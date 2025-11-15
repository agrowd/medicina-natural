# 🔧 Variables de Entorno para Vercel - Medicina Natural

## ✅ Ya Configuradas

Las siguientes variables ya están configuradas en Vercel:

- `POSTGRES_URL` - Connection string de Neon PostgreSQL
- `DATABASE_URL` - Connection string de Neon PostgreSQL (mismo valor que POSTGRES_URL)

## 📋 Variables que DEBES Agregar en Vercel

Ve a **Vercel Dashboard** → **Tu Proyecto** → **Settings** → **Environment Variables** y agrega:

### 1. Autenticación Admin (OBLIGATORIO)

```env
NEXT_PUBLIC_ADMIN_USER=natoh
NEXT_PUBLIC_ADMIN_PASS=Federyco88$
```

**Importante:** Marcar para **Production, Preview y Development**.

### 2. WhatsApp Bot (OBLIGATORIO para que funcione el chat)

```env
WHATSAPP_BOT_URL=https://tu-vps.com:7002
WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app
```

**Nota:** Reemplazar `tu-vps.com` con la URL real de tu VPS donde esté el bot de WhatsApp.

### 3. WhatsApp Phone (OBLIGATORIO)

```env
NEXT_PUBLIC_WA_PHONE=5491172456286
```

**Nota:** Cambiar por el número de WhatsApp que uses para ventas.

### 4. Uploadthing (OBLIGATORIO para subir imágenes/videos)

```env
UPLOADTHING_SECRET=tu_secret_de_uploadthing
UPLOADTHING_APP_ID=tu_app_id_de_uploadthing
UPLOADTHING_TOKEN=tu_token_base64_de_uploadthing
```

**Cómo obtener:**
1. Ir a [uploadthing.com](https://uploadthing.com)
2. Crear cuenta o iniciar sesión
3. Crear nueva app
4. Copiar las credenciales

### 5. Envíos (OBLIGATORIO)

```env
NEXT_PUBLIC_SHIPPING_GBA=10000
NEXT_PUBLIC_SHIPPING_INTERIOR=35000
```

**Nota:** Ajustar según tus costos de envío.

### 6. Base URL (OBLIGATORIO)

```env
NEXT_PUBLIC_BASE_URL=https://medicina-natural-ecommerce.vercel.app
```

## 📝 Checklist Completo

- [ ] `NEXT_PUBLIC_ADMIN_USER=natoh`
- [ ] `NEXT_PUBLIC_ADMIN_PASS=Federyco88$`
- [ ] `POSTGRES_URL` (ya configurada)
- [ ] `DATABASE_URL` (ya configurada)
- [ ] `WHATSAPP_BOT_URL` (configurar cuando tengas el VPS)
- [ ] `WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app`
- [ ] `NEXT_PUBLIC_WA_PHONE` (configurar tu número)
- [ ] `UPLOADTHING_SECRET`
- [ ] `UPLOADTHING_APP_ID`
- [ ] `UPLOADTHING_TOKEN`
- [ ] `NEXT_PUBLIC_SHIPPING_GBA`
- [ ] `NEXT_PUBLIC_SHIPPING_INTERIOR`
- [ ] `NEXT_PUBLIC_BASE_URL`

## 🚀 Después de Configurar

1. **Inicializar Base de Datos:**
   - Visitar: `https://medicina-natural-ecommerce.vercel.app/api/init-db`
   - O ejecutar el script SQL en Neon Console

2. **Verificar que funciona:**
   - Login admin: `/admin` (usuario: `natoh`, contraseña: `Federyco88$`)
   - Chat flotante: Probar enviando un mensaje desde la web
   - Productos: Crear un producto desde el admin

## ⚠️ Importante

- Todas las variables que empiezan con `NEXT_PUBLIC_` son públicas y visibles en el frontend
- No usar contraseñas sensibles en `NEXT_PUBLIC_*` en producción real
- Para producción, considerar usar autenticación más segura (NextAuth, etc.)

