# Guía de Personalización

Este documento explica cómo personalizar el proyecto para tu marca.

## 🎨 Colores

### 1. Tailwind Config
Editar `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#TU_COLOR_PRIMARIO',
        foreground: '#TU_COLOR_TEXTO',
      },
      accent: {
        DEFAULT: '#TU_COLOR_ACCENT',
        foreground: '#TU_COLOR_TEXTO',
      },
      // ... otros colores
    }
  }
}
```

### 2. CSS Global
Editar `app/globals.css` para cambiar:
- Variables CSS de colores
- Gradientes
- Estilos personalizados

## 🖼️ Imágenes

### Logo
1. Reemplazar `public/brand/medicina-natural-logo.png`
2. Actualizar referencias en:
   - `components/header.tsx`
   - `app/layout.tsx`
   - `app/page.tsx` (Hero section)
   - `app/admin/dashboard/page.tsx`

### Favicon
Reemplazar `public/favicon.svg` con tu logo en formato SVG.

### Imágenes del Inicio
- Hero: Reemplazar en `app/page.tsx`
- Galería: Reemplazar imágenes en `public/` y actualizar URLs en `app/page.tsx`
- Video: Reemplazar videos en `/uploads/` y actualizar referencias

## 📝 Textos

### Página Principal (`app/page.tsx`)
- Título del Hero
- Textos de beneficios
- Títulos de secciones
- CTAs (Call to Action)

### Página Nosotros (`app/nosotros/page.tsx`)
- Descripción de la empresa
- Textos de "Seguimiento" y "Asesoramiento 1:1"
- Información de contacto

### Footer (`components/footer.tsx`)
- Información de contacto
- Enlaces de redes sociales
- Textos legales

### FAQ (`app/faq/page.tsx`)
- Preguntas y respuestas

## 🤖 Bot de WhatsApp

### Mensajes del Bot
1. Ir a `/admin/whatsapp-configuracion`
2. Click en "Editar Mensajes"
3. Modificar la cadena de mensajes iniciales

### Configuración del Bot
Editar `bot-medicina-natural/index.js` para cambiar:
- Nombres de variables
- Mensajes hardcodeados
- Lógica de respuestas

## 🔐 Accesos

### Admin
Cambiar `ADMIN_PASSWORD` en `.env.local`:
```env
ADMIN_PASSWORD=tu_nuevo_password_seguro
```

### Rutas Protegidas
Las rutas de admin están en:
- `/admin` - Login
- `/admin/dashboard` - Dashboard principal
- `/admin/productos` - Gestión de productos
- `/admin/whatsapp` - Chat de WhatsApp
- `/admin/whatsapp-configuracion` - Configuración del bot

## 📦 Productos

### Categorías
Editar categorías en:
- `lib/types.ts` (tipo `Product`)
- Componentes que muestran categorías
- Filtros de búsqueda

### Variantes
El sistema soporta:
- Tamaños (sizes)
- Colores (colors)
- Personalizar en `components/product-info.tsx`

## 🎯 Dominio y URLs

### Cambiar Dominio
1. Actualizar `NEXT_PUBLIC_BASE_URL` en `.env`
2. Actualizar `WEB_APP_URL` para el bot
3. Configurar dominio en Vercel/plataforma de deploy

### URLs de Productos
Los productos usan slugs. Asegúrate de:
- Generar slugs únicos
- Actualizar enlaces internos si cambias estructura

## ✅ Checklist de Personalización

- [ ] Cambiar colores en `tailwind.config.ts`
- [ ] Actualizar CSS global
- [ ] Reemplazar logo en todas las ubicaciones
- [ ] Reemplazar favicon
- [ ] Actualizar imágenes del inicio
- [ ] Modificar textos de la página principal
- [ ] Actualizar información en "Nosotros"
- [ ] Configurar mensajes del bot
- [ ] Cambiar password de admin
- [ ] Actualizar información de contacto
- [ ] Revisar y actualizar FAQ
- [ ] Configurar dominio y URLs
- [ ] Probar todas las funcionalidades

## 🔄 Mantenimiento

### Actualizar Dependencias
```bash
npm update
```

### Backup de Base de Datos
Hacer backup regular de PostgreSQL antes de cambios importantes.

### Logs
Revisar logs en:
- Vercel Dashboard (si usas Vercel)
- Console del navegador
- Logs del bot (si está en servidor)

