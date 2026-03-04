// // Cenário de Utilização
// // Regra de Negócio: O aluno ganha XP por tarefa concluída.
// // Ao atingir 1000XP, ele sobe de nível. Tarefas entregues com atraso
// // rendem apenas 50% do XP. Existe um multiplicador de "Combo" para quem
// // entrega 3 tarefas seguidas no prazo.
// // cada tarefa vale 200xp
// interface IEntregarTarefa {
//     idAluno: number,
//     tarefa: ITarefa
// }

// interface ITarefa {
//     id: number
//     titulo: string
//     prazo: Date
// }

// const tarefasParaEntrega: ITarefa[] = [
//     { id: 1, titulo: 'Configurar ambiente do projeto', prazo: new Date('2026-03-05') },
//     { id: 2, titulo: 'Criar testes unitários de autenticação', prazo: new Date('2026-03-07') },
//     { id: 3, titulo: 'Implementar validação de formulário', prazo: new Date('2026-03-08') },
//     { id: 4, titulo: 'Refatorar módulo de cadastro', prazo: new Date('2026-03-10') },
//     { id: 5, titulo: 'Corrigir bug de cálculo de desconto', prazo: new Date('2026-03-12') },
//     { id: 6, titulo: 'Escrever documentação da API', prazo: new Date('2026-03-14') },
//     { id: 7, titulo: 'Adicionar testes de integração', prazo: new Date('2026-03-16') },
//     { id: 8, titulo: 'Otimizar consulta ao banco de dados', prazo: new Date('2026-03-18') },
//     { id: 9, titulo: 'Implementar tela de relatório', prazo: new Date('2026-03-20') },
//     { id: 10, titulo: 'Revisar e ajustar regras de negócio', prazo: new Date('2026-03-22') }
// ]

// let aluno = {
//     id: 110,
//     nome: 'Daniel',
//     xp: 0,
//     nivel: 0,
//     multiplicadorCombo: false
// }

// function entregarTarefa({ idAluno, tarefa }: IEntregarTarefa): boolean {
//     if (!idAluno || !tarefa) {
//         return false
//     }
//     let totalXp = true
//     const dataAtual = new Date();
//     if (tarefa.prazo < dataAtual) {
//         totalXp = false
//     }

//     const xpRecebida = totalXp ? 200 : 100

//     aluno = { ...aluno, xp: aluno.xp + xpRecebida }

//     return true;
// }

// const tarefaSelecionada = tarefasParaEntrega[0]
// const entregaRealizada = entregarTarefa({ idAluno: aluno.id, tarefa: tarefaSelecionada })

// console.log('Entrega realizada:', entregaRealizada)
// console.log('Aluno atualizado:', aluno)



interface IRealizaCompra {
    id: number,
    compra: ICompra
    
}

interface ICompra {
    id: number,
    valor: number,
    quantidade: number
    frete: number,
    compraRealizada: boolean,
    valorPago: number,
    cumpom: boolean,
}

function calcularValorTotal(compra: ICompra): IRealizaCompra {
    if (!compra) {
        return {
            id: 0,
            compra: {
                id: 0,
                valor: 0,
                frete: 0,
                compraRealizada: false,
                valorPago: 0,
                cumpom: false,
                quantidade: 0
        }
    }
}
    const cupomValido = compra.cumpom = true
    const freteFixo = 20.00
    const freteCalculado = compra.valor > 300 ? 0 : freteFixo
    const quantidadeTotal = compra.quantidade > 0 ? compra.quantidade : 0
    const descontoCumpom = compra.cumpom ? 0.1 * compra.valor * quantidadeTotal : 0
    const valorTotal = compra.valor > 0 ? (compra.valor * quantidadeTotal - descontoCumpom) + freteCalculado  : 0

    
    return {
        id: compra.id,
        compra: {
            ...compra,
            frete: freteCalculado,
            compraRealizada: true,
            quantidade: quantidadeTotal,
            valorPago: valorTotal,
            cumpom: true,
        }
    }
    

}
const entregaCompra = calcularValorTotal({
    id: 1,
    compraRealizada: false,
    valor: 110,
    quantidade: 2,
    frete: 0,
    valorPago: 0,
    cumpom: true,
})
console.log('Compra processada:', entregaCompra)


// interface IValidaLogin {
//     id: number,
//     usuario: IUsuario,
//     loginValido: boolean
    
// }
// interface IUsuario {
//     id: number,
//     nome: string,
//     idade: number,
//     senha: string
// }

// function validaDadosUsuario(usuario: IUsuario): IValidaLogin {
//     if (!usuario){
//         return {
//             id: 0,
//             usuario: {
//                 id: 0,
//                 nome: "Vazio",
//                 idade: 0,
//                 senha: "Vazio"

//             },
//             loginValido: false
            
//         }
//     }
//     const nomeValido = usuario.nome.length >= 3
//     const idadeValida = usuario.idade > 18 && usuario.idade < 120
//     const senhaValida = usuario.senha.length >= 8
//     const loginValido = nomeValido && idadeValida && senhaValida
    
//     const nomeValidado = nomeValido ? usuario.nome : "Nome não validado"
//     const idadeValidada = idadeValida ? usuario.idade : 0
//     const senhaValidada = senhaValida ? usuario.senha : "Senha não validado"
    
//     return {
//         id: 1,
//         usuario: {
//             ...usuario,
//             nome: nomeValidado,
//             idade: idadeValidada,
//             senha: senhaValidada
//         },
//         loginValido: loginValido
//             }
// }

// const entregaLogin = validaDadosUsuario ({
//     id: 1,
//     idade: 19,
//     nome: "Joao",
//     senha: "123456789"
// })
// console.log("LOGIN VALIDO:", entregaLogin.loginValido)
// console.log("Dados da requisição:", entregaLogin)


// interface ICompras {
//     id: number
// }