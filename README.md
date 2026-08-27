# Generador de Tickets

Pequeña aplicación web desarrollada con **HTML, CSS y JavaScript** para generar automáticamente tickets de operación a partir de la información de un equipo.

La herramienta permite seleccionar diferentes tipos de ticket y genera automáticamente el **título y cuerpo** con el formato establecido para cada caso.

---

## 🚀 Características

Actualmente la aplicación cuenta con dos tipos de ticket:

### 1. NOT-RESPONDING

Solicita:

* Nombre del equipo
* IP
* Número de alarmas

Genera automáticamente un ticket con el formato:

```text
LIMPIEZA DE RED, IM-CORE, EQUIPO - IP
```

Y un cuerpo indicando el número de alarmas detectadas y solicitando la revisión del comportamiento del monitoreo.

---

### 2. DOWN

Solicita:

* Nombre del equipo
* Número de caídas
* Puerto 1
* Puerto 2 (opcional)
* Puerto 3 (opcional)

Permite registrar hasta **3 puertos**.

Genera automáticamente un ticket con el formato:

```text
LIMPIEZA DE RED, IRR, EQUIPO
```

El cuerpo incluye el número de caídas, los puertos afectados y la solicitud de certificación del cableado.

---

## 📁 Estructura del proyecto

```text
GeneradorTickets/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contiene la estructura de la aplicación:

* Título
* Botones para seleccionar el tipo de ticket
* Formularios
* Campos de información
* Botón para generar el ticket
* Área donde se muestra el resultado
* Botones para copiar y limpiar

### `style.css`

Contiene todo el diseño visual de la aplicación:

* Colores
* Tamaños
* Espaciado
* Botones
* Campos de entrada
* Distribución de los puertos
* Área de resultados

### `script.js`

Contiene la lógica de la aplicación:

* Selección del tipo de ticket
* Validación de campos
* Generación del título
* Generación del cuerpo
* Formateo de números
* Copiado del ticket al portapapeles
* Limpieza del formulario

---

## ▶️ Cómo utilizar la aplicación

No requiere instalación de dependencias ni servidor.

1. Descargar o copiar la carpeta del proyecto.
2. Abrir la carpeta `GeneradorTickets`.
3. Abrir el archivo:

```text
index.html
```

4. La aplicación se abrirá en el navegador.

---

## 📝 Generar un ticket NOT-RESPONDING

Seleccionar:

```text
NOT-RESPONDING
```

Introducir:

```text
Equipo:
COL_IMEX_AWS_LION_TVC_D3

IP:
10.1.10.100

Número de alarmas:
2110
```

Presionar:

```text
Generar Ticket
```

La aplicación generará automáticamente el título y cuerpo correspondiente.

Después se puede utilizar:

```text
Copiar Ticket
```

para copiar todo el contenido y pegarlo directamente en el sistema de tickets.

---

## 📝 Generar un ticket DOWN

Seleccionar:

```text
DOWN
```

Introducir:

```text
Equipo:
COL_IMEX_AWS_LION_TVC_D3

Número de caídas:
1044

Puerto 1:
port-channel19/TVD-P2-BNS400SC-09-MTYDC-INT-V340-Pa012
```

Los campos **Puerto 2** y **Puerto 3** son opcionales.

Si existen varios puertos afectados, pueden introducirse de la siguiente manera:

```text
Puerto 1:
port-channel19/TVD-P2-BNS400SC-09-MTYDC-INT-V340-Pa012

Puerto 2:
port-channel20/TVD-P2-BNS400SC-09-MTYDC-INT-V340-Pa013
```

La aplicación incorporará automáticamente los puertos registrados en el cuerpo del ticket.

---

## 📋 Botón "Copiar Ticket"

El botón **Copiar Ticket** copia automáticamente:

1. El título.
2. Una separación.
3. El cuerpo completo.

Esto permite pegar directamente el contenido en el sistema de gestión de tickets.

---

## 🧹 Botón "Limpiar"

El botón **Limpiar** elimina:

* Equipo
* IP
* Número de alarmas
* Número de caídas
* Puerto 1
* Puerto 2
* Puerto 3
* Título generado
* Cuerpo generado
* Mensaje de confirmación

El tipo de ticket seleccionado **no cambia**, por lo que se pueden generar varios tickets del mismo tipo rápidamente.

---

## 🔧 Tecnologías utilizadas

La aplicación utiliza únicamente tecnologías web estándar:

* **HTML5** — estructura
* **CSS3** — diseño
* **JavaScript** — lógica y generación de tickets

No utiliza frameworks ni librerías externas.

---

## 🔮 Mejoras futuras

La aplicación puede ampliarse para incluir nuevos formatos de tickets.

Algunas posibles mejoras:

* Agregar más tipos de ticket.
* Crear diferentes plantillas.
* Permitir modificar las plantillas desde la interfaz.
* Guardar tickets generados.
* Agregar historial de tickets.
* Agregar botón para copiar únicamente el título.
* Agregar validación de direcciones IP.
* Agregar más puertos dinámicamente.
* Agregar fecha y hora automáticamente.
* Exportar tickets.
* Agregar búsqueda de equipos.
* Crear una versión con React.
* Convertir la aplicación en una aplicación de escritorio.

---

## 📌 Notas

La aplicación funciona de manera local y no requiere conexión a Internet para generar los tickets.

Los datos introducidos permanecen únicamente en el navegador y no se almacenan en una base de datos.

Para modificar los formatos de los tickets, se debe editar el archivo:

```text
script.js
```

Las plantillas de **NOT-RESPONDING** y **DOWN** se encuentran dentro de la función:

```javascript
generarTicket()
```

---

## 👨‍💻 Autor

Jesús Toledo.

**Tecnologías:** HTML · CSS · JavaScript
