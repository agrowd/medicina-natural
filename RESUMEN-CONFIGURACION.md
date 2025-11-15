# ✅ Resumen: Configuración Completa de Medicina Natural

## 🎯 Lo que ya está hecho

1. ✅ **Base de Datos Neon configurada**
   - `POSTGRES_URL` configurada en Vercel
   - `DATABASE_URL` configurada en Vercel
   - Script de inicialización creado (`scripts/init-neon-db.sql`)

2. ✅ **Autenticación Admin actualizada**
   - Ahora usa variables de entorno: `NEXT_PUBLIC_ADMIN_USER` y `NEXT_PUBLIC_ADMIN_PASS`
   - Fallback a `natoh` / `Federyco88$` si no están configuradas

3. ✅ **Sistema de Chat implementado**
   - Chat flotante en la página principal
   - Endpoints de API para mensajes
   - Server-Sent Events para tiempo real
   - Sistema de conversaciones en base de datos

4. ✅ **Sistema de Productos**
   - CRUD completo en `/admin/productos`
   - Funcionalidad igual a nanomoringa.vercel.app

## 📋 Lo que falta configurar en Vercel

### 1. Variables de Entorno Obligatorias

```env
# Admin (YA LISTO PARA CONFIGURAR)
NEXT_PUBLIC_ADMIN_USER=natoh
NEXT_PUBLIC_ADMIN_PASS=Federyco88$

# WhatsApp Bot (CONFIGURAR CUANDO TENGAS EL VPS)
WHATSAPP_BOT_URL=https://tu-vps.com:7002
WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app

# WhatsApp Phone (AJUSTAR SEGÚN TU NÚMERO)
NEXT_PUBLIC_WA_PHONE=5491172456286

# Uploadthing (CREAR CUENTA Y CONFIGURAR)
UPLOADTHING_SECRET=tu_secret
UPLOADTHING_APP_ID=tu_app_id
UPLOADTHING_TOKEN=tu_token

# Envíos (AJUSTAR SEGÚN TUS PRECIOS)
NEXT_PUBLIC_SHIPPING_GBA=10000
NEXT_PUBLIC_SHIPPING_INTERIOR=35000

# Base URL
NEXT_PUBLIC_BASE_URL=https://medicina-natural-ecommerce.vercel.app
```

## 🚀 Pasos para completar la configuración

### Paso 1: Inicializar Base de Datos (OBLIGATORIO)

**Opción A: Desde Neon Console (Recomendado)**
1. Ir a [neon.tech](https://neon.tech) → Tu proyecto
2. Click en **"SQL Editor"**
3. Abrir el archivo `scripts/init-neon-db.sql` del repositorio
4. Copiar y pegar todo el contenido
5. Ejecutar el script

**Opción B: Desde API (Después del deploy)**
1. Visitar: `https://medicina-natural-ecommerce.vercel.app/api/init-db`
2. Verificar que responde con `success: true`

### Paso 2: Configurar Variables de Entorno en Vercel

1. Ir a [Vercel Dashboard](https://vercel.com)
2. Seleccionar proyecto `medicina-natural-ecommerce`
3. Settings → Environment Variables
4. Agregar todas las variables de la lista anterior
5. Marcar para **Production, Preview y Development**
6. Guardar y hacer redeploy

### Paso 3: Verificar que funciona

1. **Admin Login:**
   - Ir a: `https://medicina-natural-ecommerce.vercel.app/admin`
   - Login: `natoh` / `Federyco88$`
   - Debe funcionar sin problemas

2. **Crear Producto:**
   - Ir a: `/admin/productos`
   - Crear un producto
   - Verificar que se guarda y aparece en el catálogo

3. **Chat Flotante:**
   - Ir a la página principal
   - Click en el botón de WhatsApp flotante
   - Completar nombre y teléfono
   - Enviar mensaje
   - Debe crear conversación en la BD (necesita bot configurado para responder)

## 🔧 Cómo funciona el sistema (igual a nanomoringa.vercel.app)

### 1. Admin Panel (`/admin`)
- **Login:** `natoh` / `Federyco88$` (configurable con env vars)
- **Productos:** CRUD completo, igual al sistema original
- **Cupones:** Gestión de cupones de descuento
- **WhatsApp Config:** Configurar mensajes del bot

### 2. Chat Flotante
- Botón flotante en la esquina inferior derecha
- Usuario ingresa nombre y teléfono
- Se crea conversación en la BD
- Si es el primer mensaje, el bot responde automáticamente con la cadena de mensajes
- Los mensajes se sincronizan en tiempo real

### 3. Bot de WhatsApp
- Corre en VPS con `whatsapp-web.js`
- Escucha mensajes de WhatsApp
- Responde automáticamente cuando recibe mensajes nuevos
- Se conecta con la web app vía API

## ⚠️ Notas importantes

1. **Base de Datos:** Debe inicializarse ANTES de usar el sistema
2. **Bot de WhatsApp:** Necesita estar corriendo en el VPS para que el chat responda
3. **Uploadthing:** Necesario para subir imágenes/videos de productos
4. **Variables de entorno:** Todas las que empiezan con `NEXT_PUBLIC_` son públicas

## 🐛 Solución de problemas

### Error: "No puedo entrar al admin"
- Verificar que `NEXT_PUBLIC_ADMIN_USER` y `NEXT_PUBLIC_ADMIN_PASS` estén configuradas
- Verificar que el redeploy se completó después de agregar las variables

### Error: "No se puede crear producto"
- Verificar que la base de datos esté inicializada
- Verificar logs de Vercel para ver el error específico

### Error: "El chat no responde"
- Verificar que `WHATSAPP_BOT_URL` esté configurada
- Verificar que el bot esté corriendo en el VPS
- Verificar que el bot tenga acceso a la BD de Neon

### Error: "No se puede subir imágenes"
- Verificar que las variables de Uploadthing estén configuradas
- Verificar que la cuenta de Uploadthing esté activa

## 📝 Checklist Final

- [ ] Base de datos inicializada en Neon
- [ ] Variables de entorno configuradas en Vercel
- [ ] Admin login funciona (`natoh` / `Federyco88$`)
- [ ] Se pueden crear productos
- [ ] Se pueden subir imágenes
- [ ] Chat flotante funciona (crea conversaciones)
- [ ] Bot de WhatsApp está corriendo en VPS (opcional por ahora)

## 🎉 Cuando esté todo configurado

El sistema funcionará exactamente igual que `nanomoringa.vercel.app`:
- Admin con las mismas credenciales
- Misma funcionalidad de productos
- Mismo chat flotante que responde automáticamente
- Misma experiencia de usuario

