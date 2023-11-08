export const formatearFecha = (fecha) => {
    let nuevaFecha;
    if (fecha.includes("T00:00:00.000Z")) {
      nuevaFecha = new Date(fecha.split("T")[0].split("-"));
    } else {
      nuevaFecha = new Date(fecha);
    }
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return nuevaFecha.toLocaleDateString("es-ES", opciones);
  };
  