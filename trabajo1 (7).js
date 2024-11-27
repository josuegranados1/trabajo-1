// Variables
let h = 100, g = 9.81, t = 0;

// Simulación
while (h > 0) {
    let v = g * t; // Velocidad
    h -= 0.5 * g * Math.pow(t, 2); // Distancia
    if (h < 0) h = 0; // Evitar que la distancia sea negativa
    console.log(`Tiempo: ${t}s | Distancia: ${h.toFixed(2)}m | Velocidad: ${v.toFixed(2)}m/s`);
    t++;
}
