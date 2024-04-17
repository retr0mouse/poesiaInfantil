const images = [
    "Maria.jpg",
    "Carlos.jpg",
    "Ana.jpg",
    "Pedro.jpg", 
    "Laura.jpg", 
    "Javier.jpg"
];

const names = [
    "María Sánchez",
    "Carlos Pérez",
    "Ana García",
    "Pedro López",
    "Laura Martínez",
    "Javier Rodríguez"
];

const roles = [
    "CEO",
    "Director de Marketing",
    "Diseñadora",
    "Desarrollador",
    "Copywriter",
    "Community Manager"
];

const descriptions = [
    "María es la fundadora de la empresa y la encargada de liderar el equipo. Tiene una amplia experiencia en el sector y es una apasionada de la poesía infantil.",
    "Carlos es un experto en marketing digital y se encarga de promocionar los productos de la empresa. Es un apasionado de la literatura y le encanta escribir.",
    "Ana es la encargada de diseñar los productos de la empresa. Tiene un estilo único y creativo que se refleja en sus diseños.",
    "Pedro es un desarrollador web con amplia experiencia en el sector. Se encarga de crear y mantener la página web de la empresa.",
    "Laura es la copywriter de la empresa y se encarga de redactar los textos de los productos. Es una apasionada de la literatura y la escritura.",
    "Javier es el community manager de la empresa y se encarga de gestionar las redes sociales. Es un apasionado de la poesía y le encanta interactuar con los seguidores."
];

const team = names.map((name, index) => {
    return {
        name: name,
        role: roles[index],
        image: images[index],
        description: descriptions[index]
    };
});

export default team;
