
let perfilSalvo = sessionStorage.getItem("perfilGlamBeauty");

let mensagem = document.getElementById("mensagemPerfil");
let recomendacoes = document.getElementById("recomendacoes");

if (perfilSalvo) {

    let perfil = JSON.parse(perfilSalvo);

    mensagem.textContent =
        "Estas sugestões foram escolhidas com base nas suas respostas.";

    let sugestaoPele = "";
    let sugestaoIncomodo = "";
    let sugestaoCiclo = "";
    let sugestaoTempo = "";

    if (perfil.pele == "Oleosa") {
        sugestaoPele =
            "Prefira camadas leves e, se necessário, produtos que ajudem a controlar o brilho.";
    }

    else if (perfil.pele == "Seca") {
        sugestaoPele =
            "Prepare a pele com um hidratante adequado e experimente produtos de acabamento mais cremoso.";
    }

    else if (perfil.pele == "Mista") {
        sugestaoPele =
            "Adapte os produtos às diferentes regiões do rosto, sem exagerar na quantidade.";
    }

    else {
        sugestaoPele =
            "Experimente uma maquiagem leve e escolha produtos confortáveis para sua pele.";
    }

    if (perfil.incomodo == "Oleosidade") {
        sugestaoIncomodo =
            "Para lidar com o brilho, teste pequenas quantidades de pó nas regiões necessárias.";
    }

    else if (perfil.incomodo == "Espinhas") {
        sugestaoIncomodo =
            "Prefira produtos não comedogênicos e evite esfregar ou irritar a pele.";
    }

    else if (perfil.incomodo == "Ressecamento") {
        sugestaoIncomodo =
            "Dê atenção à hidratação antes da maquiagem e evite produtos que ressaltem áreas ressecadas.";
    }

    else if (perfil.incomodo == "Poros") {
        sugestaoIncomodo =
            "Aplique a maquiagem em camadas finas e evite excesso de produto nas regiões com poros aparentes.";
    }

    else {
        sugestaoIncomodo =
            "Você pode experimentar diferentes estilos e escolher os mais confortáveis para você.";
    }

    if (perfil.ciclo == "Mais oleosa" ||
        perfil.ciclo == "Aparecem espinhas") {

        sugestaoCiclo =
            "Como você percebe mudanças na pele antes da menstruação, adapte a preparação conforme a necessidade de cada dia.";
    }

    else if (perfil.ciclo == "Mais seca") {
        sugestaoCiclo =
            "Nos dias em que sentir a pele mais seca, dê atenção à hidratação antes de aplicar a maquiagem.";
    }

    else {
        sugestaoCiclo =
            "Observe como sua pele se comporta ao longo do ciclo e ajuste a maquiagem se sentir necessidade.";
    }

    if (perfil.tempo == "5 minutos") {
        sugestaoTempo =
            "Escolha uma rotina rápida com poucos produtos, como corretivo se desejar, blush e máscara de cílios.";
    }

    else if (perfil.tempo == "10 minutos") {
        sugestaoTempo =
            "Experimente uma maquiagem simples com preparação da pele, correção leve e um toque de cor.";
    }

    else if (perfil.tempo == "15 minutos") {
        sugestaoTempo =
            "Você pode acrescentar sombra, delineado simples ou outra técnica que queira aprender.";
    }

    else {
        sugestaoTempo =
            "Você pode reservar um tempo para testar novas técnicas e praticar diferentes estilos.";
    }

    recomendacoes.innerHTML = `
        <div class="recomendacao">
            <h3>Para sua pele ${perfil.pele.toLowerCase()}</h3>
            <p>${sugestaoPele}</p>
        </div>

        <div class="recomendacao">
            <h3>Sobre o que mais incomoda você</h3>
            <p>${sugestaoIncomodo}</p>
        </div>

        <div class="recomendacao">
            <h3>Durante seu ciclo</h3>
            <p>${sugestaoCiclo}</p>
        </div>

        <div class="recomendacao">
            <h3>Maquiagem no seu tempo</h3>
            <p>${sugestaoTempo}</p>
        </div>
    `;

} else {

    mensagem.textContent =
        "Você ainda não respondeu ao questionário. Descubra seu perfil para ver sugestões personalizadas.";

    recomendacoes.innerHTML = `
        <div class="recomendacao">
            <h3>Comece pelo seu perfil</h3>
            <p>
                Responda às perguntas sobre sua pele e sua rotina
                para receber recomendações de maquiagem.
            </p>
        </div>
    `;
}
