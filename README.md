# ☁️ RelajarApp

**RelajarApp** es una Progressive Web App (PWA) desarrollada con **Next.js 15** (App Router + Turbopack).  
Ofrece frases motivacionales y actividades relajantes diarias para ayudar a las personas a encontrar calma, motivación y bienestar.  

Además, expone **dos endpoints gratuitos y públicos** para que cualquiera pueda consumir frases o actividades en formato JSON.  

---

## 🚀 Tecnologías principales

- [Next.js 15](https://nextjs.org/) — Framework de React con SSR y App Router.  
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático.  
- [Tailwind CSS](https://tailwindcss.com/) — Estilos rápidos y modernos.  
- [ShadCN/UI](https://ui.shadcn.com/) — Componentes accesibles.  
- [Lucide Icons](https://lucide.dev/) — Iconografía adaptable.  
- [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) — Instalación y uso offline.  

---

## 📂 Estructura del proyecto

```
src/
 ├── app/
 │    ├── api/phrase/     # Endpoint de frases
 │    └── api/activity/   # Endpoint de actividades
 │
 ├── components/          # UI y contenido
 ├── lib/data/            # JSON con frases y actividades
 └── page.tsx             # Página principal
```

---

## ⚡ Características

- ✅ **Frases motivacionales** desde `/api/phrase`.  
- ✅ **Actividades relajantes** desde `/api/activity`.  
- ✅ **Endpoints gratuitos** que devuelven contenido en JSON.  
- ✅ **PWA lista** con manifest y service worker.  
- ✅ **Instalable en dispositivos móviles**.  

---

## 🌍 Endpoints públicos

RelajarApp expone dos endpoints gratuitos:  

### 📌 Obtener una frase aleatoria
```
GET /api/phrase
```

Ejemplo de respuesta:
```json
{
  "phrase": "La paz comienza con una sonrisa.",
  "author": "Madre Teresa de Calcuta"
}
```

---

### 📌 Obtener una actividad aleatoria
```
GET /api/activity
```

Ejemplo de respuesta:
```json
{
  "activity": "Caminar 10 minutos al aire libre",
  "category": "Bienestar"
}
```

---

## 🛠 Instalación y uso

### 1. Clonar repositorio
```bash
git clone https://github.com/tuusuario/relajarapp.git
cd relajarapp
```

### 2. Instalar dependencias
```bash
pnpm install
# o npm install
```

### 3. Levantar en desarrollo
```bash
pnpm run dev
```

### 4. Acceder en navegador
```
http://localhost:3000
```

---

## 🔒 Seguridad y límites

- Los endpoints son **públicos y gratuitos**.  
- Se pueden proteger con **rate limiting** para evitar abuso (ej: 5 requests/min).  
- Opcional: integración con **Supabase Auth** para restringir por usuario.  

---

## ✨ Futuras mejoras

- [ ] Notificaciones push (Web Push API + Supabase).  
- [ ] Historial de frases favoritas.  
- [ ] Filtros por categorías.  
- [ ] Internacionalización (i18n).  

---

## 📜 Licencia

Este proyecto se distribuye bajo la licencia **MIT**.  

---

## 👨‍💻 Autor

Desarrollado por **Gonzalo Gómez Projects**
