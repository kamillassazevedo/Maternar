const renderModalContent = ({
    title,
    description,
    image
}) => {
    const imageContent = image ? `<img src="${image}" alt="no-image" aria-describedby="Illustração em estilo cartoon de uma mulher grávida sentada pacificamente em um ambiente sereno, cercada por plantas e luz suave do sol, transmitindo uma sensação de tranquilidade e bem-estar." loading="lazy" aria-hidden="true">` : ''
    return encodeURIComponent(`
    <div class="modal-body">
        <h2>${title}</h2>
        <div class="meta-info">
            ${imageContent}
            <p>${description}</p>
        </div>
    </div>
`)
}

const renderCardItem = ({
    title,
    shortDescription: description,
    link,
    image
}) => {
    return (`
<section class="card">
    ${image && '<img src="'+image+'" alt="Illustração com mulher grávida" aria-describedby="Illustração em estilo cartoon de uma mulher grávida sentada pacificamente em um ambiente sereno, cercada por plantas e luz suave do sol, transmitindo uma sensação de tranquilidade e bem-estar." loading="lazy" aria-hidden="true">'}

    <div class="meta-info">
        <h2>${title}</h2>
        <p>${description}</p>
        ${link && '<a class="btn" href="'+link+'" target="_blank">Saiba mais</a>'}
    </div>
</section>
`)
}

const renderCards = (data) => {
    const cards = data.map(renderCardItem).join('')
    return cards
}

const renderTopicItem = ({
    title,
    shortDescription,
    description
}) => {
    const modalContent = renderModalContent({
        title,
        description
    })

    return (`
<section class="box">
    <h2>${title}</h2>
    <p>${shortDescription}</p>
    <button class="btn btn-reverse" onclick="openModal('${modalContent}')">Saiba mais</button>
</section>
`)
}

const renderTopics = (topics) => {
    const topicsList = topics.map(renderTopicItem).join('')
    return topicsList
}

const openModal = (content) => {
    const modal = document.getElementById("myModal");
    const modalText = document.getElementById("modalText");
    modalText.innerHTML = decodeURIComponent(content);
    modal.style.display = "block";
}

const appModal = () => {
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.querySelector(".close");

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

const main = () => {
    document.getElementById('cards-results').innerHTML = renderCards(data)
    document.getElementById('topics').innerHTML = renderTopics(topics)

    // modal
    appModal()   
}

main()
