# Medicina Natural E-Commerce

Este es un proyecto de e-commerce para medicina natural, basado en Next.js 14 con App Router.

## 🚀 Características

- **E-commerce completo** con catálogo de productos
- **Sistema de carrito** con persistencia
- **Integración WhatsApp** con bot automatizado
- **Panel de administración** completo
- **Sistema de cupones** y descuentos
- **Gestión de productos** con imágenes y videos
- **Chat flotante** en la página principal
- **Búsqueda de productos** en tiempo real

## 📋 Requisitos Previos

- Node.js 18+ 
- PostgreSQL (Neon, Vercel Postgres, o local)
- Cuenta de Uploadthing (para subida de archivos)
- WhatsApp Business API o whatsapp-web.js

## 🛠️ Instalación

1. Instalar dependencias:
```bash
npm install
# o
pnpm install
```

2. Configurar variables de entorno:
Crear archivo `.env.local` con:
```env
# Base de datos
POSTGRES_URL=tu_url_de_postgresql
DATABASE_URL=tu_url_de_postgresql

# Uploadthing
UPLOADTHING_SECRET=tu_secret
UPLOADTHING_APP_ID=tu_app_id
UPLOADTHING_TOKEN=tu_token_base64

# WhatsApp Bot
WHATSAPP_BOT_URL=http://localhost:7002
WEB_APP_URL=http://localhost:3000

# Admin
ADMIN_PASSWORD=tu_password_seguro
```

3. Inicializar base de datos:
```bash
# Visitar en el navegador o hacer curl:
curl https://tu-dominio.vercel.app/api/whatsapp/init-db
```

4. Ejecutar en desarrollo:
```bash
npm run dev
```

## 🎨 Personalización

### Colores
Editar `tailwind.config.ts` y `app/globals.css` para cambiar la paleta de colores.

### Imágenes
- Logo: Reemplazar imágenes en `public/brand/`
- Favicon: Reemplazar `public/favicon.svg`
- Imágenes del inicio: Reemplazar en `public/` según corresponda

### Textos
- Títulos y textos: Editar componentes en `app/page.tsx`, `app/nosotros/page.tsx`, etc.
- Mensajes del bot: Configurar en `/admin/whatsapp-configuracion`

## 📁 Estructura del Proyecto

```
medicina-natural-ecommerce/
├── app/                    # App Router de Next.js
│   ├── admin/              # Panel de administración
│   ├── api/                # API routes
│   ├── producto/           # Páginas de productos
│   └── page.tsx            # Página principal
├── components/             # Componentes React
│   ├── admin/             # Componentes del admin
│   └── ui/                # Componentes UI (shadcn)
├── lib/                    # Utilidades y funciones
├── hooks/                  # Custom hooks
├── public/                 # Archivos estáticos
├── bot-nanomoringa/        # Bot de WhatsApp
└── scripts/                # Scripts de utilidad
```

## 🔧 Configuración del Bot de WhatsApp

Ver `bot-nanomoringa/README.md` para instrucciones detalladas.

## 📦 Deploy

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Otros
El proyecto es compatible con cualquier plataforma que soporte Next.js.

## 📝 Notas

- Los productos se gestionan desde `/admin/productos`
- El bot de WhatsApp se configura desde `/admin/whatsapp-configuracion`
- Las conversaciones se gestionan desde `/admin/whatsapp`
- El sistema de cupones está en `/admin/dashboard`

## 🔐 Seguridad

- Cambiar `ADMIN_PASSWORD` en producción
- Usar HTTPS en producción
- Configurar CORS apropiadamente
- Validar todas las entradas del usuario

## 📄 Licencia

Privado - Todos los derechos reservados

