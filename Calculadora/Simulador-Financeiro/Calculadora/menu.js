function Calcular() {
    var hectare = Number(txt_hectare.value)
    var custo = Number(txt_custo.value)
    var estado = (txt_estado.value)
    var temperatura = (txt_temperatura.value)
    var chuva = (txt_chuva.value)
    var historico = (txt_historico.value)
    var fungicida = Number(txt_fungicida.value)
    var faturamento = Number(txt_faturamento.value)
    var saca = Number(txt_sacas.value)
    var risco = 0
    var probabilidade = 0
    var risco_texto = ''
    var custo_inicial = custo * hectare // custo total da produção sem sensor
    var gastos_fungicida = fungicida * 0.8 // custo novo de fungicidas com sensor
    var custo_final = custo_inicial - (fungicida * 0.2) // custo final da produção menos o desconto com sensor
    var ganhos_saca = saca * 0.1
    var ganhos_produtividade = hectare * ganhos_saca // novos ganhos em sacas da produtivade(colheita) com sensor
    var ganhos_faturamento = ganhos_produtividade * 150 // novos ganhos da produtivade(colheita) em reais com sensor
    var ganhos_porcentagem_faturamento = (ganhos_faturamento / faturamento) * 100 // A porcentagem do novo faturamento com sensor
    var novo_faturamento = faturamento + ganhos_faturamento // novo faturamento total sem descontos com sensor
    var lucro_sensor = novo_faturamento - custo_final // lucro final com sensor

    var div_resultado1 = document.getElementsByClassName('div_resultado1')[0];
    var div_resposta1 = div_resultado1.style.display;
    if (div_resposta1 == 'none') {
        div_resultado1.style.display = 'flex';
    }
    var div_resultado2 = document.getElementsByClassName('div_resultado2')[0];
    var div_resposta2 = div_resultado2.style.display;
    if (div_resposta2 == 'none') {
        div_resultado2.style.display = 'flex';
    }
    var div_resultado3 = document.getElementsByClassName('div_resultado3')[0];
    var div_resposta3 = div_resultado3.style.display;
    if (div_resposta3 == 'none') {
        div_resultado3.style.display = 'flex';
    }
    var div_resultado4 = document.getElementsByClassName('div_resultado4')[0];
    var div_resposta4 = div_resultado4.style.display;
    if (div_resposta4 == 'none') {
        div_resultado4.style.display = 'flex';
    }
    var div_resultado5 = document.getElementsByClassName('div_resultado5')[0];
    var div_resposta5 = div_resultado5.style.display;
    if (div_resposta5 == 'none') {
        div_resultado5.style.display = 'flex';
    }

    if (estado == `Selecione um item`) {
        alert(`Resposta inválida! para um estado brasileiro`)
    }
    else if (estado == 'PR' || estado == 'SC' || estado == 'RS' || estado == 'MT' || estado == 'MS' || estado == 'GO' || estado == 'DF' || estado == 'SP') {
        risco += 5
    } 
    // os Estados que estão no topo do ranking nos aumentamos o risco em 5 no nosso calculo final
    else { risco += 3 }

    if (txt_historico.value == (`Selecione um item`)) {
        alert(`Resposta inválida! para o historico da doença`)
    }
    else if (historico == 'Sim') {
        risco += 2
    } else {
        risco += 1
    }
    // se ja foi contaminada o risco aumenta
    if (temperatura == 'Muito frio' || temperatura == 'Muito Quente') {
        risco += 3
    } else if (temperatura == 'Frio' || temperatura == 'Quente') {
        risco += 2
    } else if (temperatura == 'Moderado') {
        risco += 1
    } else if (txt_temperatura.value == (`Selecione um item`)) {
        alert(`Resposta inválida! para o valor da temperatura`)
    }
    // os extremos da temperatura aumentam o risco em 3 

    if (chuva == 'Muita') {
        risco += 3
    } else if (chuva == 'Moderada') {
        risco += 2
    } else if (chuva == 'Pouca') {
        risco += 1
    } else if (txt_chuva.value = (`Selecione um item`)) {
        alert(`Resposta inválida! para o nivel de chuva`)
    }

    if (txt_hectare.value == '' || txt_hectare.value <= 0) {
        alert(`Insira um valor de hectares válido!`)
    } if (txt_custo.value == '' || txt_custo.value <= 0) {
        alert(`Insira um valor de custo válido!`)
    } if (txt_fungicida.value < 0) {
        alert(`Insira um valor do custo com fungicida válido!`)
    } if (txt_faturamento.value < 0) {
        alert(`Insira um valor do faturamento válido!`)
    } else if (risco == 13) {
        risco_texto = 'Muito alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: 95%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20% alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)


    } else if (risco == 12) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Muito alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }
        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }
        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 11) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Muito alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/seta_baixo.png" alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }
        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 10) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/seta_baixo.png" alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 9) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/seta_baixo.png" alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 8) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Alto'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 7) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Médio'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/ponto.png" alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)

    } else if (risco == 6) {
        probabilidade = (risco / 13) * 100
        risco_texto = 'Médio'
        lbl_resultado_risco.innerHTML = (`Risco: ${risco_texto}`)
        lbl_alerta.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)
        lbl_resultado_probabilidade.innerHTML = (`<img src="imagens/ponto.png" alt="" id="img_ponto">Probabilidade de contaminação: ${probabilidade.toFixed(2)}%`)
        lbl_alerta2.innerHTML = (`<img src="imagens/alerta.png" alt="" id="img_alerta">`)

        lbl_ganhos.innerHTML = (`<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">GANHOS COM O NOSSO PROJETO<img src="imagens/seta_ganhos.png" alt="" id="img_ganhos">`)

        if (txt_fungicida.value == 0 || txt_fungicida.value == '') {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: 0%<img src="imagens/ponto.png" alt="" id="img_ponto">`)
        } else if (txt_fungicida.value > 0) {
            lbl_resultado_fungicida.innerHTML = (`Gastos com fungicida: -20%<img src="imagens/ponto.png" alt="" id="img_seta_baixo"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        }

        lbl_resultado_produtividade.innerHTML = (`Produtividade: 10%<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)

        if (txt_faturamento.value == 0 || txt_faturamento.value == '') {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: $0%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$0<img src="imagens/mais.png" alt="" id="img_mais">`)
        } else if (txt_faturamento.value > 0) {
            lbl_resultado_faturamento.innerHTML = (`Faturamento: ${ganhos_porcentagem_faturamento.toFixed(2)}%<img src="imagens/mais.png" alt="" id="img_mais">`)
            lbl_resultado_ganhos_faturamento.innerHTML = (`R$${novo_faturamento.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais">`)
        }

        lbl_resultado_ganhos_fungicida.innerHTML = (`R$${gastos_fungicida.toFixed(2)}<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_resultado_ganhos_produtividade.innerHTML = (`${ganhos_produtividade} Sacas<img src="imagens/mais.png" alt="" id="img_mais"><img src="imagens/ponto.png" alt="" id="img_ponto">`)
        lbl_lucro.innerHTML = (`LUCRO: R$${lucro_sensor.toFixed(2)}`)
    }
}