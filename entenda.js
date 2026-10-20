
function mostrarResultado() {

    let pele = document.querySelectorAll("select")[0].value;
    let incomodo = document.querySelectorAll("select")[1].value;
    let ciclo = document.querySelectorAll("select")[2].value;
    let tempo = document.querySelectorAll("select")[3].value;

    let resultado = document.getElementById("resultado");

    if (pele == "Escolha uma opção" ||
        incomodo == "Escolha uma opção" ||
        ciclo == "Escolha uma opção" ||
        tempo == "Escolha uma opção") {

        alert("Responda todas as perguntas antes de ver seu resultado.");
        return;
    }

    // Salvar as respostas para usar nas outras páginas
    let perfil = {
        pele: pele,
        incomodo: incomodo,
        ciclo: ciclo,
        tempo: tempo
    };

    sessionStorage.setItem("perfilGlamBeauty", JSON.stringify(perfil));

    let recomendacao = "";

    if (pele == "Oleosa") {
        recomendacao = `
            <p><strong> Seu cuidado:</strong></p>
            <p>Como sua pele tende a ser oleosa, prefira produtos leves
            e evite exagerar na quantidade.</p>
        `;
    }

    else if (pele == "Seca") {
        recomendacao = `
            <p><strong> Seu cuidado:</strong></p>
            <p>Sua pele precisa de hidratação. Procure produtos
            hidratantes e evite lavar o rosto muitas vezes ao dia.</p>
        `;
    }

    else if (pele == "Mista") {
        recomendacao = `
            <p><strong> Seu cuidado:</strong></p>
            <p>Sua pele possui áreas com necessidades diferentes.
            Prefira uma rotina equilibrada.</p>
        `;
    }

    else {
        recomendacao = `
            <p><strong> Seu cuidado:</strong></p>
            <p>Mantenha uma rotina simples de limpeza,
            hidratação e proteção solar.</p>
        `;
    }

    if (ciclo == "Mais oleosa" || ciclo == "Aparecem espinhas") {
        recomendacao += `
            <p><strong> Durante o ciclo:</strong></p>
            <p>Você percebe mudanças na pele durante o ciclo.
            Observe a oleosidade e as espinhas nesses períodos.</p>
        `;
    }

    resultado.style.display = "block";

    resultado.innerHTML = `
        <h3>Seu perfil GlamBeauty</h3>
        <p><strong>Sua pele:</strong> ${pele}</p>
        <p><strong>Principal incômodo:</strong> ${incomodo}</p>
        ${recomendacao}
        <p><strong> Seu tempo:</strong> ${tempo}</p>
        <p>O GlamBeauty usa suas respostas para ajudar você
        a adaptar sua rotina às necessidades da sua pele.</p>
    `;
}