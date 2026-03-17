




interface IParcelamento {
    valorFinal: number
    quantidadeParcelasFinal: number
    valorParcela: number
    ehPermitido: boolean
}

interface ICompra {
    valor: number
    qntdParcelas: number


}

function realizaParcelamento({ valor, qntdParcelas }: ICompra): IParcelamento {
    let response: IParcelamento = {
        valorFinal: 0,
        quantidadeParcelasFinal: 0,
        valorParcela: 0,
        ehPermitido: false
    }
    const valorCompra = valor
    const quantidadeParcela = qntdParcelas
    const valorParcelado = Math.round(valorCompra / quantidadeParcela * 100) / 100
    const valorDescontado = valor * 0.95

    if (valorParcelado < 20 || quantidadeParcela > 12 || quantidadeParcela < 1) {
        return response
    }

    if (quantidadeParcela === 1) {

        if (valorCompra < 20) {
            return response
        }

        return response = {
            ehPermitido: true,
            quantidadeParcelasFinal: 1,
            valorFinal: valorDescontado,
            valorParcela: valorParcelado
        }

    }

    if (quantidadeParcela > 1 && quantidadeParcela < 7) {
        if (valorParcelado < 20) {
            return response
        }
         return response = {
            ehPermitido: true,
            quantidadeParcelasFinal: quantidadeParcela,
            valorFinal: valorCompra,
            valorParcela: valorParcelado
        }
    }

    if (quantidadeParcela > 7 && quantidadeParcela < 13 ){
         if (valorParcelado < 20) {
            return response
        }
        const valorComJuros = Math.round((valorCompra * 1.02) / quantidadeParcela * 100) / 100
         return response = {
            ehPermitido: true,
            quantidadeParcelasFinal: quantidadeParcela,
            valorFinal: valorCompra,
            valorParcela: valorComJuros
        }
    }

    return response

}

const teste1 = realizaParcelamento({ valor: 18, qntdParcelas: 1 })
const teste2 = realizaParcelamento({ valor: 260, qntdParcelas: 12 })
const teste3 = realizaParcelamento({ valor: 120, qntdParcelas: 12 })
const teste4 = realizaParcelamento({ valor: 97, qntdParcelas: 3 })
const teste5 = realizaParcelamento({ valor: -1, qntdParcelas: 3 })
const teste6 = realizaParcelamento({ valor: 300, qntdParcelas: -1 })
console.log("Testeando1:", teste1)
console.log("Testeando2:", teste2)
console.log("Testeando3:", teste3)
console.log("Testeando4:", teste4)
console.log("Testeando5:", teste5)
console.log("Testeando6:", teste6)