const images = [
    'memoria PSD_PosterImage.png',
    'Imaginación time frame - 1_PosterImage.png',
    'Concentración_PosterImage.png',
    'Communication_PosterImage.png',
    'Birdie sings_PosterImage.png',
    'Self-confidence_PosterImage.png',
    'Relaxation_PosterImage.png',
    'Sensitivity_PosterImage.png',
    'Creativity_PosterImage.png',
    'Inspiration - 1_PosterImage.png',
    'Empathy_PosterImage.png',
    'Emotions_PosterImage.png'
];

const headings = [
    'Memoria',
    'Imaginación',
    'Concentración',
    'Comunicación',
    'Musicalidad',
    'Autoconfianza',
    'Relajación',
    'Sensibilidad',
    'Creatividad',
    'Inspiración',
    'Empatía',
    'Emociones'
];

const descriptions = [
    "La poesía desafía la mente de los niños al requerirles que recuerden patrones...",
    "Al sumergirse en el mundo de la poesía, los niños son llevados a paisajes…",
    "La estructura del lenguaje poético requiere atención y concentración, ayudando...",
    "La diversidad léxica de la poesía enriquece el repertorio lingüístico...",
    "La poesía despierta la sensibilidad auditiva de los niños al enseñarles...",
    "La poesía es una herramienta transformadora que...",
    "La belleza y armonía de la poesía ofrecen a los niños un espacio tranquilo...",
    "A través de la poesía, los niños aprenden a identificar y conectar con...",
    "La libertad de expresión que ofrece la poesía inspira a los niños a explorar...",
    "La poesía actúa como una fuente inagotable de inspiración para...",
    "Gracias a la poesía, los niños desarrollan una comprensión más...",
    "La poesía proporciona un medio seguro para que los niños exploren..."
];

const articles = headings.map((heading, index) => {
    return {
        heading: heading,
        image: images[index],
        description: descriptions[index]
    };
});

export default articles;