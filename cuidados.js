
let perfilSalvo = sessionStorage.getItem("perfilGlamBeauty");

let mensagem = document.getElementById("mensagemPerfil");
let recomendacoes = document.getElementById("recomendacoes");

if (perfilSalvo) {

    let perfil = JSON.parse(perfilSalvo);

    mensagem.textContent =
        "Confira sugestões de cuidados com base nas suas respostas.";

    let cuidadoPele = "";
    let cuidadoIncomodo = "";
    let cuidadoCiclo = "";
    let cuidadoTempo = "";

    if (perfil.pele == "Oleosa") {
        cuidadoPele =
            "Use um produto de limpeza suave, hidratante leve e protetor solar adequado. Pele oleosa também precisa de hidratação.";
    }

    else if (perfil.pele == "Seca") {
        cuidadoPele =
            "Prefira produtos de limpeza suaves e hidratantes que ajudem a manter a barreira protetora da pele.";
    }

    else if (perfil.pele == "Mista") {
        cuidadoPele =
            "Escolha produtos equilibrados e observe se diferentes regiões do rosto precisam de cuidados distintos.";
    }

    else {
        cuidadoPele =
            "Mantenha uma rotina básica de limpeza, hidratação e proteção solar, observando como sua pele reage.";
    }

    if (perfil.incomodo == "Oleosidade") {
        cuidadoIncomodo =
            "Evite lavar o rosto em excesso ou usar produtos agressivos. Eles podem irritar a pele.";
    }

    else if (perfil.incomodo == "Espinhas") {
        cuidadoIncomodo =
            "Use produtos suaves e evite espremer espinhas. Se o problema persistir ou incomodar muito, procure orientação dermatológica.";
    }

    else if (perfil.incomodo == "Ressecamento") {
        cuidadoIncomodo =
            "Use hidratante adequado e evite banhos muito quentes ou produtos que deixem a pele repuxando.";
    }

    else if (perfil.incomodo == "Poros") {
        cuidadoIncomodo =
            "Faça uma limpeza suave e evite esfoliar em excesso. A aparência dos poros é natural.";
    }

    else {
        cuidadoIncomodo =
            "Continue observando sua pele e mantenha os cuidados básicos, sem precisar acrescentar produtos desnecessários.";
    }

    if (perfil.ciclo == "Mais oleosa" ||
        perfil.ciclo == "Aparecem espinhas") {

        cuidadoCiclo =
            "Você percebe mudanças antes da menstruação. Observe como a pele reage e adapte os cuidados sem exagerar na limpeza.";
    }

    else if (perfil.ciclo == "Mais seca") {
        cuidadoCiclo =
            "Se notar ressecamento antes da menstruação, dê atenção à hidratação e evite produtos irritantes.";
    }

    else {
        cuidadoCiclo =
            "Continue observando sua pele durante o ciclo. Nem todas as pessoas percebem mudanças.";
    }

    if (perfil.tempo == "5 minutos") {
        cuidadoTempo =
            "Priorize uma rotina curta: limpeza suave, hidratante e protetor solar durante o dia.";
    }

    else if (perfil.tempo == "10 minutos") {
        cuidadoTempo =
            "Reserve alguns minutos para limpar, hidratar e proteger a pele sem pressa.";
    }

    else if (perfil.tempo == "15 minutos") {
        cuidadoTempo =
            "Você pode dedicar mais tempo à rotina, mas não precisa usar muitos produtos para cuidar bem da pele.";
    }

    else {
        cuidadoTempo =
            "Se quiser experimentar outros cuidados, introduza um produto por vez e observe a reação da pele.";
    }

    recomendacoes.innerHTML = `
        <div class="recomendacao">
            <h3>Cuidados para pele ${perfil.pele.toLowerCase()}</h3>
            <p>${cuidadoPele}</p>
        </div>

        <div class="recomendacao">
            <h3>Seu principal incômodo</h3>
            <p>${cuidadoIncomodo}</p>
        </div>

        <div class="recomendacao">
            <h3>Cuidados durante o ciclo</h3>
            <p>${cuidadoCiclo}</p>
        </div>

        <div class="recomendacao">
            <h3>Uma rotina para o seu tempo</h3>
            <p>${cuidadoTempo}</p>
        </div>
    `;

} else {

    mensagem.textContent =
        "Responda ao questionário para receber recomendações personalizadas.";

    recomendacoes.innerHTML = `
        <div class="recomendacao">
            <h3>Descubra seu perfil</h3>
            <p>
                Responda às perguntas sobre sua pele e sua rotina
                para encontrar sugestões de cuidados.
            </p>
        </div>
    `;
}
