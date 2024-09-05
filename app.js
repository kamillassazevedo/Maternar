function renderItem(title, description, link) {
    return `
<div class="item-resultado">
    <h2>${title}</h2>
    <p class="descricao-meta">${description}</p>
    <a href="${link}" target="_blank">Saiba mais</a>
</div>
`;
}



function main () {
    let conteudo = '';

    data.forEach((item) => {
        conteudo += renderItem(item.title, item.description, item.link)
    })

    const element = document.getElementById("resultados-pesquisa")

    element.innerHTML = conteudo
}

main()
