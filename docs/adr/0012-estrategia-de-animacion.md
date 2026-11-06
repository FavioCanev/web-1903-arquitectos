# ADR 0012 — Estrategia de animación

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 06/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

La web tiene que sentirse viva y cuidada, como la de un estudio premiado. Al estudio le gustaron dos efectos de la web de Jalo: las imágenes que suben o bajan con el scroll, y la foto principal de cada proyecto que se queda fija "como una ventana" mientras el contenido pasa por encima.

Hay tres condiciones:

- **Las fotos son las protagonistas.** Las animaciones deben acompañarlas, no competir con ellas.
- **Muchos visitantes entran desde un celular de gama media.** Una animación pesada se traba y hace sentir lenta la web.
- **Algunas personas se marean o se distraen con el movimiento.** Los sistemas operativos tienen una opción, "reducir movimiento", que la web debe respetar.

Que la web sea un sitio estático hecho con Astro (ver la ADR 0001) **no limita las animaciones**: las mismas herramientas que se usan con React funcionan aquí, y Astro permite agregar React en una sola pieza si alguna vez hiciera falta. A esa pieza se le llama **isla**.

## Opciones consideradas

### Herramientas para animar

| Opción | Qué anima | Peso para el visitante | Notas |
|---|---|---|---|
| **CSS** | Transiciones de botones y tarjetas, apariciones, el listón ligado al scroll | Ninguno: lo hace el navegador | Base de todo |
| **Transiciones entre páginas del navegador** | El cambio de una página a otra; por ejemplo, la foto de un proyecto que "crece" desde la tarjeta hasta la portada | Ninguno | Ver la tabla siguiente |
| **Motion** | Las fotos que suben o bajan con el scroll, apariciones escalonadas, movimientos con efecto de resorte | Unos pocos KB, solo en las páginas que lo usan | Gratuita, licencia MIT. Usa las animaciones nativas del navegador cuando existen |
| GSAP | Lo mismo que Motion, y más | Varias veces más que Motion para el mismo efecto | Gratuita, con licencia propia. Válida, pero más pesada de lo que esta web necesita |
| React con Framer Motion | Lo mismo que Motion | Mucho más: carga React además de la librería | Solo tendría sentido si un componente necesitara React por otra razón |

*Leyenda: "Opción" es la herramienta de animación. "Qué anima" son ejemplos de uso en esta web. "Peso para el visitante" es cuánto código extra descarga su navegador. "KB" (kilobytes) mide el peso de un archivo. "Licencia MIT" es una licencia de código abierto que permite usar el código libremente, incluso en webs comerciales. "Librería" es un paquete de código hecho por terceros.*

### Cómo animar el cambio de página

| | a) Transición nativa del navegador | **b) Enrutador de Astro (`ClientRouter`)** |
|---|---|---|
| Cómo funciona | Dos líneas de CSS le piden al navegador que anime el cambio entre páginas | Un JavaScript intercepta cada clic, descarga la página nueva por detrás, reemplaza lo que cambia y anima el cambio |
| Navegadores con animación | Chrome, Edge y Safari recientes. Los demás cambian de página como siempre | Todos, con una animación de respaldo |
| JavaScript | Ninguno | Unos pocos KB en todas las páginas |
| Extras | — | Puede mantener elementos vivos entre páginas y descargar la página siguiente por adelantado |
| Scripts de la web | Funcionan solos | Hay que adaptarlos para que se reinicien en cada cambio de página; si se olvida, el formulario deja de funcionar después de navegar |
| Mantenimiento | Nada que cuidar | Más piezas que pueden fallar, y cuesta más diagnosticarlas |

*Leyenda: las columnas comparan las dos formas de animar el cambio de una página a otra. "Enrutador" es el programa que maneja la navegación entre páginas.*

## Decisión

**1. Herramientas:** CSS como base, el **enrutador de Astro** (`ClientRouter`) para el cambio de página (opción b) y **Motion** para las animaciones ligadas al scroll que el CSS no resuelve. React no se usa; si algún día un componente lo necesita, se agrega como isla, con su propia ficha.

Elegimos el enrutador porque la animación entre páginas llega a todos los navegadores, puede mantener vivos elementos entre páginas y puede descargar la página siguiente por adelantado, para que el cambio se sienta instantáneo. A cambio, se cumplen estas reglas:

- **Todo script de la web se escribe para reiniciarse en cada cambio de página** (con el evento `astro:page-load` de Astro), no solo al cargar la web por primera vez. Aplica, por ejemplo, al listón y al formulario de contacto.
- **El listón se mantiene vivo entre páginas** (con `transition:persist`), en lugar de reiniciarse en cada una.
- **Las páginas se descargan por adelantado** cuando el visitante pasa el mouse sobre un enlace o lo toca.
- **Se verifica que Cloudflare Web Analytics cuente cada cambio de página** como una visita (ver la ADR 0007).

Esto matiza la ADR 0001, que limitaba el JavaScript al listón y al formulario: el enrutador suma unos pocos KB de JavaScript en todas las páginas.

**2. Animaciones de la web (lista cerrada):**

1. **Transición entre páginas:** al abrir un proyecto, su foto crece desde la tarjeta hasta la portada.
2. **Foto principal fija "como ventana"** en las páginas de proyecto (solo CSS).
3. **Fotos de la galería que suben o bajan suavemente** con el scroll (Motion).
4. **Apariciones discretas:** los bloques entran con un leve fundido al llegar a la pantalla.
5. **El listón** con el patrón de baldosa (ver la ADR 0009).
6. **Pequeñas reacciones** al pasar el mouse o tocar botones y tarjetas.

Agregar una animación nueva se decide aparte, para cuidar que las fotos sigan siendo las protagonistas.

**3. Tiempos en un solo lugar:** las duraciones (corta, media y larga) y la curva de aceleración viven en variables de CSS, junto a los colores, y todas las animaciones las usan. Los valores exactos se definen al construir, probándolos en pantalla.

**4. Con "reducir movimiento" activado:**

- las fotos no suben ni bajan, y los bloques aparecen sin desplazarse;
- el cambio de página es instantáneo o con un fundido simple;
- el listón aparece completo y quieto.

**5. Reglas de rendimiento:**

- solo se animan la posición, la escala y la transparencia de los elementos, porque el navegador las mueve sin recalcular la página y no se traba en celulares;
- Motion se carga solo en las páginas que lo usan.

**Cuándo se revisa:** cuando el estudio vea las animaciones funcionando. Es probable que pida cambios o animaciones nuevas, y cada una se evalúa con estas mismas reglas. Si el enrutador diera problemas difíciles de resolver, el plan B es la opción a: quitar el enrutador de la plantilla común y activar la transición nativa con dos líneas de CSS.

## Consecuencias

**Positivas**

- La web se siente viva y fluida, como una aplicación, sin cargar librerías pesadas ni React.
- La transición entre páginas se ve en todos los navegadores.
- El cambio de página se siente instantáneo, porque la página siguiente se descarga por adelantado.
- El movimiento tiene un ritmo coherente, ajustable en un solo lugar.
- Las animaciones no se traban en celulares y respetan a quienes prefieren menos movimiento.
- Si el JavaScript falla, la web sigue funcionando: navega de la forma normal, sin animaciones.

**Negativas**

- Todas las páginas cargan unos pocos KB de JavaScript por el enrutador.
- Cada script nuevo debe escribirse para reiniciarse en cada cambio de página. Si alguien lo olvida, ese script deja de funcionar después de navegar, y el error no se ve en la primera página.
- Hay más piezas que pueden fallar, y diagnosticarlas cuesta más que en una web sin enrutador.
- La lista cerrada puede quedarse corta cuando el estudio vea la web funcionando; cada animación nueva requiere una decisión aparte.
- Motion es una dependencia más que mantener actualizada.
