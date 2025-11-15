# 🔧 Integración Bot VPS - Medicina Natural

## 📋 Estado Actual

Revisé los archivos del bot en el VPS (`C:\Users\Try Hard\Desktop\Nexte\medicinanatural-ecommerce-vps\bot-nanomoringa`) y encontré lo siguiente:

### ✅ Lo que ya está bien:

1. **Bot configurado correctamente:**
   - `index.js` - Lógica principal del bot
   - `server.js` - Servidor Express con endpoints API
   - `db-config.js` - Conexión a PostgreSQL (Neon)
   - `db-functions.js` - Funciones de BD y notificaciones
   - `docker-compose.yml` - Configuración Docker

2. **Sistema funcionando:**
   - Escucha mensajes de WhatsApp
   - Responde automáticamente con cadena de mensajes
   - Guarda conversaciones en BD
   - Notifica a la web app vía webhook
   - Endpoints para que la web app envíe mensajes

### ⚠️ Lo que necesita actualizarse:

1. **Variable de entorno `WEB_APP_URL`:**
   - **Actual:** `https://nanomoringa.vercel.app` (en `db-functions.js` línea 84 y `docker-compose.yml` línea 10)
   - **Debe ser:** `https://medicina-natural-ecommerce.vercel.app`

2. **Variable `DATABASE_URL`:**
   - Debe apuntar a la misma BD de Neon que usa la web app
   - Debe ser la misma connection string que configuraste en Vercel

## 🔧 Configuración Necesaria en el VPS

### 1. Variables de Entorno del Bot

En el VPS, crear o actualizar archivo `.env` en `bot-nanomoringa/`:

```env
# Base de Datos (MISMA que Vercel)
DATABASE_URL=postgresql://neondb_owner:npg_NhMs30QIcLSb@ep-broad-mountain-ah8ozcdd-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require

# Web App URL (NUEVA URL)
WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app

# Puerto del bot
PORT=7002
```

### 2. Actualizar Código del Bot (Opcional)

Si quieres actualizar los defaults en el código:

**`bot-nanomoringa/db-functions.js` línea 84:**
```javascript
const webAppUrl = process.env.WEB_APP_URL || 'https://medicina-natural-ecommerce.vercel.app'
```

**`bot-nanomoringa/docker-compose.yml` línea 10:**
```yaml
- WEB_APP_URL=${WEB_APP_URL:-https://medicina-natural-ecommerce.vercel.app}
```

### 3. Actualizar Docker Compose

Si usas Docker, actualizar `.env` o las variables en `docker-compose.yml`:

```yaml
environment:
  - DATABASE_URL=${DATABASE_URL}
  - WEB_APP_URL=https://medicina-natural-ecommerce.vercel.app
  - PORT=7002
```

## 🚀 Verificación

### 1. Verificar que el bot esté corriendo:

```bash
# En el VPS
curl http://localhost:7002/api/health
# O si está en otra IP
curl http://tu-vps-ip:7002/api/health
```

**Respuesta esperada:**
```json
{
  "status": "ok",
  "whatsapp_state": "CONNECTED",
  "connected": true
}
```

### 2. Verificar que la web app puede comunicarse con el bot:

Desde la terminal o navegador:
```bash
curl -X POST https://medicina-natural-ecommerce.vercel.app/api/whatsapp/webhook \
  -H "Content-Type: application/json" \
  -d '{"event":"test","data":{"test":true}}'
```

### 3. Probar el chat flotante:

1. Ir a `https://medicina-natural-ecommerce.vercel.app`
2. Click en el botón de WhatsApp flotante
3. Ingresar nombre y teléfono
4. Enviar mensaje
5. El bot debería responder automáticamente

## 📝 Checklist de Configuración

- [ ] Variable `DATABASE_URL` configurada en el VPS (misma que Vercel)
- [ ] Variable `WEB_APP_URL` configurada a `https://medicina-natural-ecommerce.vercel.app`
- [ ] Bot corriendo en el VPS (`docker-compose up -d` o `node server.js`)
- [ ] Bot conectado a WhatsApp (QR escaneado)
- [ ] Variable `WHATSAPP_BOT_URL` configurada en Vercel (URL del VPS)
- [ ] Base de datos inicializada (tablas creadas)
- [ ] Mensajes del bot configurados en `/admin/whatsapp-configuracion`

## 🔄 Flujo Completo

1. **Usuario envía mensaje desde chat flotante:**
   - Web app crea conversación en BD
   - Web app llama a bot VPS: `POST /api/send`
   - Bot envía mensaje por WhatsApp
   - Bot guarda mensaje en BD
   - Bot notifica web app: `POST /api/whatsapp/webhook`

2. **Usuario envía mensaje por WhatsApp:**
   - Bot recibe mensaje
   - Bot guarda mensaje en BD
   - Bot notifica web app: `POST /api/whatsapp/webhook`
   - Web app actualiza chat en tiempo real (SSE)

3. **Admin responde desde web app:**
   - Admin envía mensaje desde `/admin/whatsapp`
   - Web app llama a bot VPS: `POST /api/send`
   - Bot envía mensaje por WhatsApp
   - Bot guarda mensaje en BD
   - Bot notifica web app: `POST /api/whatsapp/webhook`

4. **Admin responde desde celular:**
   - Admin envía mensaje por WhatsApp
   - Bot detecta mensaje (`message_create` event)
   - Bot guarda mensaje en BD
   - Bot notifica web app: `POST /api/whatsapp/webhook`
   - Web app actualiza CRM en tiempo real

## ⚠️ Notas Importantes

1. **Base de Datos Compartida:**
   - El bot y la web app usan la MISMA base de datos (Neon)
   - Esto permite sincronización en tiempo real

2. **URLs:**
   - Bot VPS debe poder acceder a `medicina-natural-ecommerce.vercel.app`
   - Web app debe poder acceder a `tu-vps:7002`

3. **Seguridad:**
   - Considerar agregar autenticación en los endpoints del bot
   - Validar que las requests vengan de la web app autorizada

4. **Variables de Entorno:**
   - `DATABASE_URL` debe ser exactamente igual en VPS y Vercel
   - `WEB_APP_URL` en VPS debe apuntar a la nueva URL

## 🐛 Solución de Problemas

### Bot no responde desde chat flotante:
- Verificar `WHATSAPP_BOT_URL` en Vercel
- Verificar que el bot esté corriendo: `curl http://tu-vps:7002/api/health`
- Verificar logs del bot en el VPS

### Mensajes no se sincronizan:
- Verificar `WEB_APP_URL` en el VPS
- Verificar que la web app pueda recibir webhooks
- Verificar logs del bot y de Vercel

### Error de conexión a BD:
- Verificar `DATABASE_URL` en el VPS
- Verificar que sea la misma connection string que Vercel
- Verificar que Neon permita conexiones desde el VPS

