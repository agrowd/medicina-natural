# 🚀 Configuración de Deploy en Vercel

## ✅ Estado Actual

El proyecto ya está vinculado a Vercel:
- **Project ID**: `prj_GU0NJiKI6Lg3jUumCaTWglafUTN2`
- **Project Name**: `medicina-natural-ecommerce`
- **Team**: `agrowds-projects`
- **Repositorio GitHub**: https://github.com/agrowd/medicina-natural

## 📋 Paso 2: Conectar Repositorio (Hacerlo en Vercel Dashboard)

1. Ir a [Vercel Dashboard](https://vercel.com/agrowds-projects/medicina-natural-ecommerce)
2. El repositorio ya debería estar conectado automáticamente
3. Verificar que el branch principal sea `main`

## 🔧 Paso 3: Configurar Variables de Entorno

Ir a **Settings** → **Environment Variables** y agregar:

### Variables Requeridas

```env
# Base de Datos PostgreSQL (Vercel Postgres o Neon)
POSTGRES_URL=postgresql://usuario:password@host:5432/database?sslmode=require
DATABASE_URL=postgresql://usuario:password@host:5432/database?sslmode=require

# Uploadthing (Para subida de imágenes/videos)
UPLOADTHING_SECRET=tu_secret_de_uploadthing
UPLOADTHING_APP_ID=tu_app_id_de_uploadthing
UPLOADTHING_TOKEN=tu_token_base64_de_uploadthing

# WhatsApp Bot (URL del servicio del bot en VPS)
WHATSAPP_BOT_URL=https://tu-vps.com:7002
WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app

# Admin
NEXT_PUBLIC_ADMIN_USER=tu_usuario_admin
NEXT_PUBLIC_ADMIN_PASS=tu_password_seguro_admin

# WhatsApp
NEXT_PUBLIC_WA_PHONE=5491172456286

# Envíos
NEXT_PUBLIC_SHIPPING_GBA=10000
NEXT_PUBLIC_SHIPPING_INTERIOR=35000

# URLs
NEXT_PUBLIC_BASE_URL=https://medicina-natural-ecommerce.vercel.app
```

### Cómo Obtener las Variables:

1. **POSTGRES_URL / DATABASE_URL**:
   - Si usas Vercel Postgres: Ir a Storage → Crear Postgres Database
   - Si usas Neon: Obtener la connection string desde el dashboard
   - Ambas variables deben tener el mismo valor

2. **UPLOADTHING**:
   - Crear cuenta en [uploadthing.com](https://uploadthing.com)
   - Obtener las credenciales desde el dashboard

3. **WHATSAPP_BOT_URL**:
   - URL del servicio del bot que estará en el VPS
   - Debe ser accesible públicamente (HTTPS recomendado)

4. **WEB_APP_URL**:
   - URL de producción de Vercel (se actualizará automáticamente después del primer deploy)

## ⚙️ Paso 4: Configuración de Build

El proyecto ya está configurado automáticamente para Next.js:

### Configuración Detectada:
- **Framework Preset**: Next.js
- **Build Command**: `next build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install --legacy-peer-deps` (gracias a `.npmrc`)

### Configuración Personalizada (Ya incluida):

El archivo `vercel.json` ya configura:
- Duración máxima de funciones de API (60 segundos para uploads)
- Headers de cache apropiados

El archivo `next.config.mjs` ya incluye:
- Configuración de imágenes sin optimizar
- Límite de tamaño de body para uploads (50MB)
- Headers de cache
- TypeScript y ESLint ignorados durante builds

### Verificar Build:

1. Ir a **Deployments** en Vercel
2. Hacer click en el último deploy
3. Verificar que el build se complete exitosamente
4. Revisar los logs si hay errores

## 🔄 Deploy Automático

Una vez configurado:
- Cada push a `main` en GitHub desplegará automáticamente
- Los preview deployments se crearán para cada PR
- Los builds usarán `.npmrc` con `legacy-peer-deps=true` para compatibilidad con React 19

## 📝 Comandos Útiles

```bash
# Ver logs del último deploy
vercel logs

# Hacer deploy manual a producción
vercel --prod

# Ver estado del proyecto
vercel inspect

# Ver variables de entorno actuales
vercel env ls
```

## 🔗 URLs del Proyecto

- **Dashboard Vercel**: https://vercel.com/agrowds-projects/medicina-natural-ecommerce
- **Repositorio GitHub**: https://github.com/agrowd/medicina-natural
- **Producción**: Se generará automáticamente después del primer deploy exitoso

## ⚠️ Notas Importantes

1. **Variables de Entorno**: Asegúrate de agregar todas las variables antes del primer deploy
2. **Base de Datos**: La base de datos debe estar creada y accesible antes del deploy
3. **Uploadthing**: Es necesario para subir imágenes y videos de productos
4. **WhatsApp Bot**: Debe estar desplegado y funcionando en el VPS antes de configurar `WHATSAPP_BOT_URL`

## 🐛 Solución de Problemas

### Error de Dependencias (React 19):
- ✅ Ya resuelto con `.npmrc` que incluye `legacy-peer-deps=true`

### Error de Build:
- Revisar los logs en Vercel Dashboard
- Verificar que todas las variables de entorno estén configuradas
- Asegurar que la base de datos esté accesible

### Error de Deploy:
- Verificar que el branch `main` esté conectado correctamente
- Revisar permisos del repositorio en GitHub
- Verificar configuración de Vercel en GitHub Settings

