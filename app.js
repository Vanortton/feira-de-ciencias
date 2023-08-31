// Conversões
// Taxas de câmbio obtidas de https://www.xe.com/pt/currencyconverter/ em 31/08/2023
const rates = {
    USD: {
        BRL: 4.89,
        EUR: 0.92,
        JPY: 145.9,
        GBP: 0.79,
        CHF: 0.88,
    },
    BRL: {
        USD: 0.2,
        EUR: 0.19,
        JPY: 29.85,
        GBP: 0.16,
        CHF: 0.18,
    },
    EUR: {
        USD: 1.09,
        BRL: 5.31,
        JPY: 158.5,
        GBP: 0.86,
        CHF: 0.96,
    },
    JPY: {
        USD: 0.0069,
        BRL: 0.034,
        EUR: 0.0063,
        GBP: 0.0054,
        CHF: 0.006,
    },
    GBP: {
        USD: 1.27,
        BRL: 6.2,
        EUR: 1.17,
        JPY: 184.91,
        CHF: 1.12,
    },
    CHF: {
        USD: 1.13,
        BRL: 5.54,
        EUR: 1.04,
        JPY: 165.39,
        GBP: 0.89,
    },
}

// Função para converter um valor de uma moeda para outra
function convert(amount, from, to) {
    return amount * rates[from][to]
}

// Selecionar os elementos do DOM
const amountInput = document.getElementById('amount')
const fromSelect = document.getElementById('from')
const toSelect = document.getElementById('to')
const convertButton = document.getElementById('convert')
const conversionResult = document.getElementById('conversion-result')

// Adicionar um evento de clique ao botão converter
convertButton.addEventListener('click', function () {
    // Obter os valores dos elementos do DOM
    const amount = Number(amountInput.value)
    const from = fromSelect.value
    const to = toSelect.value

    // Verificar se o valor é válido
    if (isNaN(amount) || amount <= 0) {
        alert('Por favor, digite um valor válido.')
        return
    }

    // Converter o valor usando a função convert
    const result = convert(amount, from, to)

    // Mostrar o resultado no elemento
    conversionResult.innerHTML = `${amount} ${from} = ${result.toFixed(
        2
    )} ${to}`
})

// Valor futuro do investimento
// Função para calcular o valor futuro de um investimento
function calculateVF(vp, i, n) {
    return vp * Math.pow(1 + i / 100, n)
}

// Selecionar os elementos do DOM
const vpInput = document.getElementById('vp')
const iInput1 = document.getElementById('i1')
const nInput1 = document.getElementById('n1')
const calculateVFButton = document.getElementById('calculate-vf')
const vfResult = document.getElementById('vf-result')

// Adicionar um evento de clique ao botão calcular VF
calculateVFButton.addEventListener('click', function () {
    // Obter os valores dos elementos do DOM
    const vp = Number(vpInput.value)
    const i = Number(iInput1.value)
    const n = Number(nInput1.value)

    // Verificar se os valores são válidos
    if (isNaN(vp) || vp <= 0) {
        alert('Por favor, digite um valor válido para o valor presente.')
        return
    }
    if (isNaN(i) || i < 0 || i > 100) {
        alert('Por favor, digite um valor válido para a taxa de juros.')
        return
    }
    if (isNaN(n) || n < 0) {
        alert('Por favor, digite um valor válido para o número de períodos.')
        return
    }

    // Calcular o valor futuro usando a função calculateVF
    const result = calculateVF(vp, i, n)

    // Mostrar o resultado no elemento
    vfResult.innerHTML = `O valor futuro do investimento é ${result.toFixed(
        2
    )}.`
})
// Valor da prestação
// Função para calcular o valor da prestação de um financiamento
function calculatePMT(vp, i, n) {
    return (vp * i) / 100 / (1 - 1 / Math.pow(1 + i / 100, n))
}

// Selecionar os elementos do DOM
const vpInput2 = document.getElementById('vp2')
const iInput2 = document.getElementById('i2')
const nInput2 = document.getElementById('n2')
const calculatePMTButton = document.getElementById('calculate-pmt')
const pmtResult = document.getElementById('pmt-result')

// Adicionar um evento de clique ao botão calcular PMT
calculatePMTButton.addEventListener('click', function () {
    // Obter os valores dos elementos do DOM
    const vp = Number(vpInput2.value)
    const i = Number(iInput2.value)
    const n = Number(nInput2.value)

    // Verificar se os valores são válidos
    if (isNaN(vp) || vp <= 0) {
        alert('Por favor, digite um valor válido para o valor presente.')
        return
    }
    if (isNaN(i) || i < 0 || i > 100) {
        alert('Por favor, digite um valor válido para a taxa de juros.')
        return
    }
    if (isNaN(n) || n < 0) {
        alert('Por favor, digite um valor válido para o número de períodos.')
        return
    }

    // Calcular o valor da prestação usando a função calculatePMT
    const result = calculatePMT(vp, i, n)

    // Mostrar o resultado no elemento
    pmtResult.innerHTML = `O valor da prestação é ${result.toFixed(2)}.`
})

// Valor dos Juros
// Função para calcular o juro simples de um empréstimo ou investimento
function calculateJS(c, i, t) {
    return ((c * i) / 100) * t
}

// Função para calcular o montante e o juro composto de um empréstimo ou investimento
function calculateJC(c, i, t) {
    const m = c * Math.pow(1 + i / 100, t)
    const j = m - c
    return [m, j]
}

// Selecionar os elementos do DOM
const cInput = document.getElementById('c')
const iInput3 = document.getElementById('i3')
const tInput = document.getElementById('t')
const calculateJSButton = document.getElementById('calculate-js')
const calculateJCButton = document.getElementById('calculate-jc')
const jsResult = document.getElementById('js-result')
const jcResult = document.getElementById('jc-result')

// Adicionar um evento de clique ao botão calcular juros simples
calculateJSButton.addEventListener('click', function () {
    // Obter os valores dos elementos do DOM
    const c = Number(cInput.value)
    const i = Number(iInput3.value)
    const t = Number(tInput.value)

    // Verificar se os valores são válidos
    if (isNaN(c) || c <= 0) {
        alert('Por favor, digite um valor válido para o capital.')
        return
    }
    if (isNaN(i) || i < 0 || i > 100) {
        alert('Por favor, digite um valor válido para a taxa de juros.')
        return
    }
    if (isNaN(t) || t < 0) {
        alert('Por favor, digite um valor válido para o tempo.')
        return
    }

    // Calcular o juro simples usando a função calculateJS
    const result = calculateJS(c, i, t)

    // Mostrar o resultado no elemento
    jsResult.innerHTML = `O juro simples é ${result.toFixed(2)}.`
})

// Adicionar um evento de clique ao botão calcular juros compostos
calculateJCButton.addEventListener('click', function () {
    // Obter os valores dos elementos do DOM
    const c = Number(cInput.value)
    const i = Number(iInput3.value)
    const t = Number(tInput.value)

    // Verificar se os valores são válidos
    if (isNaN(c) || c <= 0) {
        alert('Por favor, digite um valor válido para o capital.')
        return
    }
    if (isNaN(i) || i < 0 || i > 100) {
        alert('Por favor, digite um valor válido para a taxa de juros.')
        return
    }
    if (isNaN(t) || t < 0) {
        alert('Por favor, digite um valor válido para o tempo.')
        return
    }

    // Calcular o montante e o juro composto usando a função calculateJC
    const [m, j] = calculateJC(c, i, t)

    // Mostrar o resultado no elemento
    jcResult.innerHTML = `O montante é ${m.toFixed(
        2
    )} e o juro composto é ${j.toFixed(2)}.`
})

// background squares

const ulSquares = document.querySelector('ul.squares')

for (let i = 0; i < 100; i++) {
    const li = document.createElement('li')

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))
    const position = random(-200, 99)
    const delay = random(5, 0.1)
    const duration = random(24, 12)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size + 100}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ulSquares.appendChild(li)
}
