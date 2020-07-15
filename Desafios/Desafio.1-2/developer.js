// Vetores e objetos

const developer = [
    {
        name: 'Marco',
        idade: 28,
        tecnologias: [
            {
                nome: 'JavaScript',
                especialidade: 'Mobile'
            },
            
            {
                nome: 'Python',
                especialidade: 'Data'
            }
        ]
    }
]

console.log(`O usuário ${developer[0].name} tem ${developer[0].idade} anos e usa a tecnologia ${developer[0].tecnologias[1].nome} com especialidade em ${developer[0].tecnologias[1].especialidade}`)