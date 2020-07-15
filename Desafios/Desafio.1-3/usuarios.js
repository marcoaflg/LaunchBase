// Usuários e tecnologias

const usuarios = [
    {
        nome: "Marco",
        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },
    {
        nome: "João",
        tecnologias: [
            "C#",
            "Python",
            "MySQL"
        ]
    },
    {
        nome: "Maria",
        tecnologias: [
            "Ruby",
            "C++"
        ]
    }
];

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}.`)
}