🍽️ Recetas Franco – Aplicación de Recetas de Cocina

Aplicación web creada para el Trabajo Práctico de Programación IV (UTN).
Permite explorar un catálogo de recetas, ver el detalle completo, filtrar, buscar y navegar entre páginas con un diseño moderno usando Material UI.

Desarrollado por Franco Sciascia 👨‍🍳.

🚀 Funcionalidades Principales

✔️ Listado de recetas con tarjetas responsivas
✔️ Vista de detalle con ingredientes y pasos
✔️ Carga global de datos con Context API
✔️ Navegación con React Router DOM
✔️ Buscador de recetas por título
✔️ Filtros por categoría y dificultad
✔️ Modo oscuro / claro
✔️ Botón Compartir Receta
✔️ Página de Inicio personalizada
✔️ Footer informativo
✔️ 100% responsive

---

## 🧱 Estructura del Proyecto
```bash
src/
├── App.jsx
├── main.jsx
├── components/
│ ├── layout/
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ └── recetas/
│ ├── RecetaCard.jsx
│ ├── RecetasList.jsx
│ ├── RecetaDetalle.jsx
│ └── IngredientesList.jsx
├── contexts/
│ ├── RecetasContext.jsx
│ └── ThemeContext.jsx
├── pages/
│ ├── InicioPage.jsx
│ ├── RecetasListPage.jsx
│ └── RecetaDetallePage.jsx
├── data/
│ └── recetas.json
└── styles.css
```
🛠️ Tecnologías Utilizadas

React 19
React Router DOM 7
Material UI 7
Context API
Vite
JavaScript moderno ES2023

## ▶️ Cómo Ejecutarlo

### 1️⃣ Instalar dependencias
```bash
npm install
```
2️⃣ Iniciar el entorno de desarrollo
```bash
Copiar código
npm run dev
Abrir en el navegador:
http://localhost:3000
```
3️⃣ Build de producción
```bash
Copiar código
npm run build
```
📸 Capturas de Pantalla
🏠 Página de Inicio
<img src="./screenshots/inicio.png" width="600" />
🌙 Modo Oscuro
<img src="./screenshots/oscuro.png" width="600" />
🍽️ Listado de Recetas
<img src="./screenshots/recetotas.png" width="600" />
📄 Detalle de Receta
<img src="./screenshots/receta.png" width="600" />
📱 Vista Responsive
<img src="./screenshots/responsive.png" width="600" />
📦 Estado del Proyecto
