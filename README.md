# 🚀 BantisWeb

Bienvenido al repositorio de **BantisWeb**, la interfaz web del sistema de nómina inteligente **Bantis**. Esta aplicación fue generada con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.6 y está diseñada para brindar una experiencia moderna y eficiente en la gestión de recursos humanos y pagos.

---

## 🖥️ Tecnologías Principales

- **Angular** 19.2.6
- **TypeScript**
- **RxJS**
- **Tailwind CSS / SCSS (si aplica)**
- **Firebase / Firestore (si aplica)**
- **PrimeNG / Material UI (si aplica)**

---

## 🔧 Comenzar

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/bantis-web.git
cd bantis-web
```

### Instalar dependencias

```bash
npm install
```

---

## 🌐 Servidor de Desarrollo

Para iniciar el servidor local de desarrollo:

```bash
ng serve
```

Luego abre tu navegador en:

```
http://localhost:4200/
```

Cualquier cambio en los archivos fuente recargará automáticamente la aplicación.

---

## 📦 Comandos Útiles

### Generar componentes

```bash
ng generate component components/NombreDelComponente --standalone --inline-style --skip-tests
```

### Construir para producción

```bash
ng build
```

Los archivos resultantes se encontrarán en la carpeta `dist/`.

### Ejecutar pruebas unitarias

```bash
ng test
```

Utiliza el framework [Karma](https://karma-runner.github.io) por defecto.

### Ejecutar pruebas end-to-end

```bash
ng e2e
```

⚠️ Angular CLI no incluye framework e2e por defecto. Puedes elegir el que mejor se adapte a tu stack (Cypress, Playwright, etc.).

---

## 🧩 Estructura de Carpetas (src/app)

```text
├── app/
│   ├── components/        → Componentes UI reutilizables
│   │   ├── header/
│   │   ├── hero/
│   │   └── ...
│   ├── pages/             → Vistas principales (rutas)
│   ├── services/          → Servicios (API, Auth, etc.)
│   ├── models/            → Interfaces y tipos
│   └── app.config.ts      → Configuración general
```

---

## 💡 Buenas prácticas

- Componentes standalone sin CSS por defecto
- Uso de `signals` y `inputs/outputs` minimalistas
- Dividir en componentes pequeños y reutilizables
- Mantener los servicios puros y desacoplados
- Validaciones reactivas en formularios

---

## 📘 Recursos Adicionales

- [Angular DevTools](https://angular.dev/tools/devtools)
- [Angular CLI Commands](https://angular.dev/tools/cli)
- [RxJS Docs](https://rxjs.dev/guide/overview)
- [Guía de estilos Angular (Oficial)](https://angular.io/guide/styleguide)

---

## 🤝 Contribuciones

¿Deseas colaborar? ¡Eres bienvenido!
1. Haz un fork
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 🧾 Licencia

Este proyecto es propiedad de **Máster Tech Team** y su código fuente está bajo licencia privada. Contacta con el equipo para más detalles.

---

## 👨‍💻 Desarrollado por

**Máster Tech Team**  
Contacto: [urbanoballesteros@gmail.com](mailto:urbanoballesteros@gmail.com)  
Sitio: [progreza.mx](https://progreza.mx)

---
