# Contributing to Despejar App 💡

¡Gracias por tu interés en colaborar con **Despejar App**! 🚀  
Este es un proyecto **open source** creado para practicar con **Next.js** y al mismo tiempo compartir frases y actividades motivacionales.

---

## 🛠️ Tecnologías principales
- [Next.js](https://nextjs.org/) (SSG, SSR, Client Components)
- API desarrollada en el mismo proyecto
- [Docker](https://www.docker.com/) para levantar el entorno
- Progressive Web App (PWA)
- ¿Cual más agregamos a futuro?

---

## 🤝 Cómo contribuir

1. **Haz un fork** del repositorio.  
2. **Clona tu fork** en tu máquina:  
   ```bash
   git clone https://github.com/TU-USUARIO/relajar-app.git
   ```
3. **Crea una rama** para tu aporte:  
   ```bash
   git checkout -b feature/mi-aporte
   ```
4. **Haz tus cambios** (pueden ser frases nuevas, mejoras de UI/UX, features, documentación, etc.).  
5. **Haz un commit** descriptivo:  
   ```bash
   git commit -m "feat: agregada nueva funcionalidad X"
   ```
6. **Haz un push** a tu rama:  
   ```bash
   git push origin feature/mi-aporte
   ```
7. **Abre un Pull Request (PR)** hacia la rama `main` del proyecto.

---

## 📝 Buenas prácticas
- Usa mensajes de commit claros siguiendo la convención:  
  - `feat:` para nuevas funcionalidades  
  - `fix:` para bugs  
  - `docs:` para documentación  
  - `style:` para cambios de formato/estilo  
  - `refactor:` para refactorización de código  
  - `test:` para tests
- Si agregas frases o actividades, guárdalas en formato JSON dentro de `/lib/data/`.
- Si propones una feature, explica en el PR el objetivo y su impacto.
- Revisa que el código pase el **lint** y se ejecute bien con **Docker**.

---

## 🐳 Correr el proyecto con Docker
```bash
docker build -t despejar-app .
docker run -p 3000:3000 despejar-app
```

Luego abre [http://localhost:3000](http://localhost:3000) 🚀

---

## 🌱 Ideas de contribución
- Mejoras en la interfaz (UI/UX).  
- Nuevas frases o actividades motivacionales.  
- Funcionalidades extra: notificaciones push, música relajante, etc.  
- Traducciones o soporte multi-idioma.  
- Optimización de rendimiento en Next.js.  

---

Gracias por ser parte de esta iniciativa 🙌  
Cualquier duda, abre un **Issue** en el repositorio.  

💻 Repo oficial: [Despejar App](https://github.com/gonzalogomezprojects/relajar-app)
