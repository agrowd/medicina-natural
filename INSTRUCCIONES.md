# Instrucciones de Uso

## 📋 Archivos Copiados

Se ha copiado todo el código necesario para el funcionamiento completo del e-commerce:

### ✅ Incluido:
- ✅ Todo el código fuente (`app/`, `components/`, `lib/`, `hooks/`)
- ✅ Configuraciones (`package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `vercel.json`)
- ✅ Scripts de utilidad (`scripts/`)
- ✅ Bot de WhatsApp (`bot-nanomoringa/`)
- ✅ Componentes UI (shadcn/ui)
- ✅ Estructura completa de carpetas

### ❌ Excluido (para personalizar):
- ❌ Imágenes de marca (`public/brand/`, `public/images/`)
- ❌ Archivos de documentación específicos (`.md` del proyecto original)
- ❌ `node_modules/` (instalar con `npm install`)
- ❌ Archivos de entorno (`.env*` - crear nuevo)
- ❌ Datos de productos específicos

## 🚀 Pasos para Configurar

### 1. Instalar Dependencias
```bash
cd medicina-natural-ecommerce
npm install
```

### 2. Configurar Variables de Entorno
Crear archivo `.env.local` basado en `.env.example`:
```env
POSTGRES_URL=tu_url_de_postgresql
DATABASE_URL=tu_url_de_postgresql
UPLOADTHING_SECRET=tu_secret
UPLOADTHING_APP_ID=tu_app_id
UPLOADTHING_TOKEN=tu_token_base64
WHATSAPP_BOT_URL=http://localhost:7002
WEB_APP_URL=http://localhost:3000
ADMIN_PASSWORD=tu_password_seguro
```

### 3. Personalizar (Ver PERSONALIZACION.md)
- Cambiar colores en CSS y Tailwind
- Reemplazar imágenes de marca
- Actualizar textos
- Configurar dominio

### 4. Inicializar Base de Datos
```bash
# Visitar en navegador o hacer curl:
curl https://tu-dominio.vercel.app/api/whatsapp/init-db
```

### 5. Ejecutar
```bash
npm run dev
```

## 📝 Notas Importantes

- **No copiar `node_modules/`**: Instalar dependencias desde cero
- **No copiar `.env`**: Crear nuevo con tus credenciales
- **Personalizar antes de deploy**: Cambiar colores, imágenes y textos
- **Bot independiente**: El bot necesita su propia configuración

## 🔄 Siguiente Paso

Ver `PERSONALIZACION.md` para guía detallada de personalización.

