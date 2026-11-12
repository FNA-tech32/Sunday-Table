# ☕ Sunday Table

Sitio web moderno, elegante y de alto rendimiento para **Sunday Table**, cafetería artesanal y espacio de brunch & mesa compartida. Desarrollado con **Astro**, **CSS3** y **JavaScript vanilla**, enfocado en una experiencia visual envolvente, animaciones fluidas y un rendimiento óptimo.

---

## 🌟 Descripción

**Sunday Table** es un proyecto web completo que refleja la calidez y sofisticación de una cafetería de especialidad y espacio gastronómico contemporáneo. El sitio presenta su cuidada carta de productos, especialidades artesanales, historia y opciones de contacto mediante animaciones suaves, efectos 3D y una cuidada paleta inspirada en tonos café y tierra.

El objetivo principal es combinar **estética cuidada, velocidad de carga instantánea y buenas prácticas modernas** de desarrollo web sin sobrecarga de librerías externas.

---

## ✨ Características Principales

- 📱 **Diseño Responsive & Mobile-First**  
  Adaptado para dispositivos móviles, tablets y pantallas de escritorio con navegación hamburguesa animada.

- 🎨 **Animaciones & Efectos 3D Vanilla**  
  - Animaciones de aparición en scroll con *Intersection Observer*.
  - Efecto cascada escalonado (*staggered delay*) en la cuadrícula de productos.
  - Tarjetas interactivas con giro 3D (*flip cards*) en la sección de especialidades.
  - Efecto parallax suave en el encabezado y partículas ambientales animadas en CSS.
  - Cabecera dinámica con desenfoque (*backdrop-filter blur*) reactiva al scroll.

- ☕ **Experiencia Gastronómica Completa**  
  - **Inicio / Hero**: Bienvenida inmersiva con partículas flotantes y llamada a la acción.
  - **Intro**: Pilares de marca, café de origen y sostenibilidad.
  - **Menú**: Carta con 12 variedades de cafés y especialidades con precios e imágenes.
  - **Especialidades**: Tostado artesanal, baristas expertos y comercio justo con tarjetas reversibles interactivas.
  - **Historia**: Línea temporal en zigzag que narra la trayectoria desde 1995 hasta la actualidad.
  - **Testimonios**: Reseñas de clientes habituales y apasionados del buen café.
  - **Contacto**: Información detallada con datos principales y alternativos, horarios ampliados de Sunday Brunch y enlaces directos.

- ⚡ **Máximo Rendimiento & Cero Dependencias Pesadas**  
  Construido con Astro 5, CSS puro modular y JavaScript vanilla. Sin frameworks pesados en cliente para garantizar máxima velocidad.

---

## 🛠️ Tecnologías Utilizadas

- **[Astro 5](https://astro.build/)**: Framework web estático ultrarrápido y orientado a componentes.
- **CSS3 Moderno**:
  - Variables CSS para una paleta coherente.
  - CSS Grid y Flexbox responsivo.
  - Transformaciones 3D (`perspective`, `rotateY`).
  - Animaciones por fotogramas clave (`@keyframes`).
- **JavaScript Vanilla (ES6+)**:
  - `IntersectionObserver` para scroll reveal eficiente.
  - Control de eventos de navegación y menú desplegable móvil.
- **HTML5 Semántico**: Accesibilidad y estructura optimizada para SEO.

---

## 📁 Estructura del Proyecto

```txt
Sunday-Table/
├── README.md                  # Documentación principal del proyecto
└── Web/
    ├── package.json           # Configuración del paquete y scripts
    ├── astro.config.mjs       # Configuración de Astro
    ├── tsconfig.json          # Configuración de TypeScript
    ├── public/                # Archivos estáticos
    │   └── favicon.svg        # Favicon del sitio
    └── src/
        ├── components/        # Componentes modulares de Astro
        │   ├── Header.astro         # Barra de navegación con logo Sunday Table
        │   ├── Hero.astro           # Banner principal y partículas flotantes
        │   ├── Intro.astro          # Presentación y valores de la cafetería
        │   ├── Productos.astro      # Cuadrícula de 12 cafés y bebidas
        │   ├── Especialidades.astro # Tarjetas interactivas con giro 3D
        │   ├── Historia.astro       # Línea de tiempo interactiva
        │   ├── Testimonios.astro    # Opiniones de clientes
        │   ├── Contacto.astro       # Información de contacto y horarios
        │   └── Footer.astro         # Pie de página con datos corporativos
        ├── layouts/
        │   └── Layout.astro         # Plantilla global HTML y metaetiquetas
        ├── pages/             # Enrutamiento basado en archivos
        │   ├── index.astro          # Página principal (Home)
        │   ├── menu.astro           # Página de Menú y Especialidades
        │   ├── historia.astro       # Página de Historia y Testimonios
        │   └── contacto.astro       # Página de Contacto y Ubicación
        ├── scripts/
        │   └── animations.js        # Lógica de animaciones y menú móvil
        └── styles/            # Hojas de estilo CSS modulares
            ├── variables.css        # Paleta de colores y variables globales
            ├── global.css           # Reseteo y estilos base
            ├── header.css           # Estilos de cabecera y navbar
            ├── hero.css             # Estilos de sección Hero
            ├── intro.css            # Estilos de sección Intro
            ├── productos.css        # Estilos de la carta de productos
            ├── especialidades.css   # Efecto 3D de tarjetas
            ├── historia.css         # Estilos de la línea temporal
            ├── testimonios.css      # Estilos de testimonios
            ├── contacto.css         # Estilos de formulario y datos de contacto
            └── footer.css           # Estilos de pie de página
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- **Node.js** (versión 18.17.1 o superior recomendada)
- Gestor de paquetes **npm** (o pnpm / yarn)

### Pasos

1. **Clonar o acceder al repositorio**:
   ```bash
   cd Sunday-Table/Web
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver la página en vivo.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Los archivos estáticos optimizados se generarán en la carpeta `Web/dist/`.

5. **Previsualizar la compilación**:
   ```bash
   npm run preview
   ```

---

## 📍 Información de Contacto (Sunday Table)

| Canal | Detalle Principal | Detalle Alternativo |
| :--- | :--- | :--- |
| **Ubicación** | Calle Gran Vía, 48, 28013 Madrid | Calle del Café, 12, 28004 Madrid (Terraza / Sede Alternativa) |
| **Teléfono** | +34 912 345 678 | +34 612 987 654 (WhatsApp / Reservas Rápidas) |
| **Email** | hola@sundaytable.com | reservas@sundaytable.com |
| **Horarios** | Lun - Vie: 08:00 - 20:00 \| Sáb: 09:00 - 21:00 | **Domingos:** 09:30 - 19:00 *(Sunday Brunch Especial)* |

---

## 📄 Licencia

Este proyecto se distribuye con fines didácticos y comerciales para la marca **Sunday Table**.
