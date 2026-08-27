// ==========================================
// VARIABLE QUE GUARDA EL TIPO DE TICKET
// ==========================================

let tipoTicket = "not-responding";


// ==========================================
// SELECCIONAR TIPO DE TICKET
// ==========================================

function seleccionarTipo(tipo) {

    tipoTicket = tipo;


    const camposNotResponding =
        document.getElementById("camposNotResponding");

    const camposDown =
        document.getElementById("camposDown");


    const btnNotResponding =
        document.getElementById("btnNotResponding");

    const btnDown =
        document.getElementById("btnDown");


    // =========================
    // NOT-RESPONDING
    // =========================

    if (tipo === "not-responding") {

        camposNotResponding.classList.remove("oculto");

        camposDown.classList.add("oculto");


        btnNotResponding.classList.add("activo");

        btnDown.classList.remove("activo");

    }


    // =========================
    // DOWN
    // =========================

    else {

        camposNotResponding.classList.add("oculto");

        camposDown.classList.remove("oculto");


        btnNotResponding.classList.remove("activo");

        btnDown.classList.add("activo");

    }


    // Limpiar resultados anteriores

    document.getElementById("tituloResultado").value = "";

    document.getElementById("cuerpoResultado").value = "";

    document.getElementById("mensajeCopiado").textContent = "";
}



// ==========================================
// GENERAR TICKET
// ==========================================

function generarTicket() {


    // ======================================
    // DATOS COMUNES
    // ======================================

    const equipo =
        document.getElementById("equipo").value.trim();


    // ======================================
    // VALIDAR EQUIPO
    // ======================================

    if (equipo === "") {

        alert("Por favor, ingresa el nombre del equipo.");

        return;
    }


    // ======================================
    // TICKET NOT-RESPONDING
    // ======================================

    if (tipoTicket === "not-responding") {


        const ip =
            document.getElementById("ip").value.trim();


        const alarmas =
            document.getElementById("alarmas").value.trim();


        // Validar

        if (ip === "" || alarmas === "") {

            alert(
                "Por favor, completa la IP y el número de alarmas."
            );

            return;
        }


        // Formatear número

        const numeroAlarmas =
            Number(alarmas).toLocaleString("en-US");


        // Identificación

        const identificacion =
            `${equipo} - ${ip}`;


        // Título

        const titulo =
            `LIMPIEZA DE RED, IM-CORE, ${identificacion}`;


        // Cuerpo

        const cuerpo =
`BUEN DÍA EQUIPO,

SOLICITAMOS SU APOYO CON LA REVISIÓN DEL SIGUIENTE ELEMENTO DE RED:

SE HA PRESENTADO ${numeroAlarmas} ALARMAS EN LAS ÚLTIMAS SEMANAS

POR LO QUE SE REQUIERE REVISAR EL COMPORTAMIENTO DEL MONITOREO DEL EQUIPO

${identificacion}`;


        // Mostrar

        document.getElementById("tituloResultado").value =
            titulo;

        document.getElementById("cuerpoResultado").value =
            cuerpo;

    }


    // ======================================
    // TICKET DOWN
    // ======================================

    else {


        const caidas =
            document.getElementById("caidas").value.trim();


        const puerto1 =
            document.getElementById("puerto1").value.trim();


        const puerto2 =
            document.getElementById("puerto2").value.trim();


        const puerto3 =
            document.getElementById("puerto3").value.trim();


        // Validar número de caídas

        if (caidas === "") {

            alert(
                "Por favor, ingresa el número de caídas."
            );

            return;
        }


        // Validar al menos un puerto

        if (
            puerto1 === "" &&
            puerto2 === "" &&
            puerto3 === ""
        ) {

            alert(
                "Por favor, ingresa al menos un puerto."
            );

            return;
        }


        // Formatear número de caídas

        const numeroCaidas =
            Number(caidas).toLocaleString("en-US");


        // ==================================
        // CONSTRUIR LISTA DE PUERTOS
        // ==================================

        const puertos = [];


        if (puerto1 !== "") {

            puertos.push(puerto1);

        }


        if (puerto2 !== "") {

            puertos.push(puerto2);

        }


        if (puerto3 !== "") {

            puertos.push(puerto3);

        }


        // Unir puertos

        const listaPuertos =
            puertos.join(", ");


        // ==================================
        // TÍTULO DOWN
        // ==================================

        const titulo =
            `LIMPIEZA DE RED, IRR, ${equipo}`;


        // ==================================
        // CUERPO DOWN
        // ==================================

        const cuerpo =
`BUEN DIA EQUIPO,

SOLICITAMOS DE SU APOYO CON LA REVISION DEL SIGUIENTE PUERTO DE RED:

SE HAN PRESENTADO ${numeroCaidas} CAIDAS DE LOS PUERTOS ${listaPuertos}

SE REQUIERE LA CERTIFICACION DEL CABLEADO DE CONEXION AL EQUIPO ${equipo}

PUEDEN APOYARSE CON EL EQUIPO DE SOPORTE PARA LA MEJORA DE LA DISPONIBILIDAD DEL PUERTO`;


        // Mostrar resultados

        document.getElementById("tituloResultado").value =
            titulo;

        document.getElementById("cuerpoResultado").value =
            cuerpo;

    }


    // Limpiar mensaje de copiado

    document.getElementById("mensajeCopiado").textContent = "";

}



// ==========================================
// COPIAR TICKET
// ==========================================

function copiarTicket() {


    const titulo =
        document.getElementById("tituloResultado").value;


    const cuerpo =
        document.getElementById("cuerpoResultado").value;


    // Validar

    if (titulo === "" || cuerpo === "") {

        alert("Primero debes generar el ticket.");

        return;
    }


    // Unir

    const ticketCompleto =
        `${titulo}

${cuerpo}`;


    // Copiar

    navigator.clipboard.writeText(ticketCompleto)

        .then(() => {

            document.getElementById(
                "mensajeCopiado"
            ).textContent =
                "✓ Ticket copiado al portapapeles";

        })

        .catch(() => {

            alert("No se pudo copiar el ticket.");

        });

}

// ==========================================
// LIMPIAR FORMULARIO
// ==========================================

function limpiarFormulario() {

    // Limpiar equipo
    document.getElementById("equipo").value = "";


    // Limpiar campos Not-Responding
    document.getElementById("ip").value = "";

    document.getElementById("alarmas").value = "";


    // Limpiar campos Down
    document.getElementById("caidas").value = "";

    document.getElementById("puerto1").value = "";

    document.getElementById("puerto2").value = "";

    document.getElementById("puerto3").value = "";


    // Limpiar resultado
    document.getElementById("tituloResultado").value = "";

    document.getElementById("cuerpoResultado").value = "";


    // Limpiar mensaje de copiado
    document.getElementById("mensajeCopiado").textContent = "";
}