const images = [
    "bookChild6.png",
    "bookChild5.png",
    "bookChild4.png",
    "bookChild3.png",
    "bookChild2.png",
    "bookChild1.png",
]

const headings = [
    "Risas en verso: poemas divertidos para leer con niños",
    "Despertando la imaginación: poesías para soñar en familia",
    "Aventuras en rima: viajes fantásticos a través de la poesía",
    "Palabras mágicas: enseñando valores a través de poemas",
    "Versos para dormir: poemas para el momento de ir a la cama",
    "Poesía en movimiento: actividades creativas para niños"
]

const descriptions = [
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas...",
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas...",
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas...",
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas...",
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas...",
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones rítmicos y estructuras líricas..."
]

const posts = headings.map((heading, index) => {
    return {
        heading: heading,
        image: images[index],
        description: descriptions[index]
    };
});

export default posts;