// Busca por tecnologia

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

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS")
            return true
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}