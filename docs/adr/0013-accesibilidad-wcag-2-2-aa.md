# ADR 0013 — Accesibilidad: WCAG 2.2 nivel AA

| Campo | Valor |
|---|---|
| Estado | Aceptada |
| Fecha | 06/11/2026 |
| Quién decide | Favio Canevaro Asto, con potestad delegada por 1903 Arquitectos |

*Leyenda: "Estado" indica si la decisión está vigente (Aceptada), en discusión (Propuesta) o fue cambiada por otra (Reemplazada). "Fecha" es el día en que se tomó la decisión. "Quién decide" es la persona responsable de la decisión.*

## Contexto

Una web **accesible** es una web que pueden usar también las personas con discapacidad: quienes no ven y usan un **lector de pantalla** (un programa que lee la web en voz alta), quienes tienen baja visión y amplían el texto, quienes no pueden usar un mouse y navegan con el teclado, o quienes se marean con el movimiento.

**Lo que dice la ley peruana.** La **Ley 29973, Ley General de la Persona con Discapacidad** (publicada en El Peruano el 24/12/2012), en su **artículo 23.2**, establece que las entidades públicas y privadas, y las personas naturales o jurídicas que prestan servicios de información al consumidor u otros servicios a través de páginas web, deben contar con sistemas de acceso que faciliten su uso a las personas con los distintos tipos de discapacidad. La web del estudio informa sobre sus servicios a sus clientes, así que la obligación la alcanza.

La ley no fija un nivel técnico concreto. [Por verificar: lo que exigen su reglamento y la norma técnica peruana NTP-ISO/IEC 40500. No se pudieron consultar en las fuentes oficiales al escribir esta ficha.]

**El estándar internacional** son las **Pautas de Accesibilidad para el Contenido Web (WCAG)** del W3C, el organismo que define los estándares de la web. Tienen tres niveles de exigencia: A (mínimo), AA (el habitual en leyes y empresas) y AAA (el más estricto, difícil de cumplir en toda una web). La versión vigente es la 2.2.

Además de la ley, hay dos razones prácticas: entre los clientes del estudio hay personas mayores o con baja visión, y buscadores como Google premian las webs bien construidas.

## Opciones consideradas

| Opción | Qué implica | A favor | En contra |
|---|---|---|---|
| Sin un nivel definido | Se cuida "lo que se pueda" | Nada que medir | No hay cómo saber si se cumple la ley; los problemas aparecen tarde |
| WCAG 2.2 nivel A | Solo los criterios mínimos | Fácil de cumplir | Deja fuera puntos básicos, como el contraste del texto |
| **WCAG 2.2 nivel AA** | Los criterios mínimos y los habituales | Es el nivel que usan las leyes y las empresas; cubre contraste, teclado, textos alternativos y formularios | Exige revisar cada página y cada cambio |
| WCAG 2.2 nivel AAA | Todos los criterios | Lo más completo | Algunos criterios no se pueden cumplir en una web de fotos (por ejemplo, un contraste muy alto en todo el texto sobre fotos) |

*Leyenda: "Opción" es el nivel de accesibilidad evaluado. "Qué implica" lo resume. "A favor" y "En contra" son sus ventajas y desventajas para esta web. "Contraste" es la diferencia de luminosidad entre el texto y su fondo; si es baja, el texto cuesta leerlo.*

## Decisión

La web cumple las **WCAG 2.2 en nivel AA**. Este es el criterio técnico con el que se cumple el artículo 23.2 de la Ley 29973.

**Decisiones concretas de la web**, que no se pueden quitar sin una nueva ficha:

- **Texto alternativo en cada foto**, que describe lo que se ve (ver la ADR 0011).
- **Contraste mínimo de 4.5 a 1** entre el texto y su fondo (3 a 1 para texto grande).
- **Foco visible:** al navegar con el teclado, el elemento seleccionado se ve con un borde claro.
- **Enlace "Saltar al contenido"** al inicio de cada página, para no recorrer el menú en cada una.
- **Idioma declarado** en cada página (`lang="es"`), para que el lector de pantalla pronuncie bien.
- **Formulario con etiquetas y mensajes de error claros**, en texto y no solo con colores.
- **Carrusel manejable con el teclado.**
- **Cambio de página anunciado:** el enrutador de Astro avisa al lector de pantalla que cambió la página y mueve el foco del teclado (ver la ADR 0012).
- **Animaciones que respetan "reducir movimiento"** (ver las ADR 0009 y 0012).

**Revisión automática:** la herramienta gratuita **pa11y-ci** revisa cada página de la web construida, en GitHub, con cada cambio. Si encuentra un error de accesibilidad, el cambio no se integra.

**Revisión manual antes de cada publicación**, porque las herramientas automáticas solo detectan una parte de los problemas:

1. recorrer la web solo con el teclado;
2. escucharla con NVDA, un lector de pantalla gratuito;
3. ampliar el texto al 200 %;
4. activar "reducir movimiento";
5. revisar el contraste de cualquier color nuevo.

El paso a paso de cada revisión está en el manual de mantenimiento.

**Declaración de accesibilidad:** una página corta en `/accesibilidad/`, enlazada desde el pie, que dice qué nivel busca la web, sus limitaciones conocidas y a dónde escribir para reportar un problema (1903arq@gmail.com).

## Consecuencias

**Positivas**

- La web cumple la Ley 29973 con un criterio técnico claro y verificable.
- Más personas pueden usar la web y contactar al estudio.
- Los errores de accesibilidad se detectan en cada cambio, no después de publicar.
- Una web accesible suele estar mejor construida, y eso ayuda en buscadores.
- Los visitantes tienen un canal para reportar problemas.

**Negativas**

- Cada cambio pasa por la revisión automática, y cada publicación por la revisión manual, que toma unos minutos.
- Escribir un buen texto alternativo para cada foto toma tiempo.
- Algunas ideas de diseño pueden descartarse si no cumplen el contraste o no se pueden usar con el teclado.
