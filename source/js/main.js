const cardsData = [
    { title: "Paris, France", imageUrl: "./source/images/paris.jpg", description: " Explore the romantic streets of Paris and visit iconic landmarks like the Eiffel Tower and Louvre Museum." },
    { title: "Tokyo, Japan", imageUrl: "./source/images/tokyo.jpg", description: " Immerse yourself in the vibrant culture of Tokyo with its bustling streets, delicious cuisine, and fascinating traditions." },
    { title: "New York City, USA", imageUrl: "./source/images/new-york.jpg", description: "Experience the energy of the Big Apple with its skyscrapers, Broadway shows, and diverse neighborhoods." },
    { title: "Maldives", imageUrl: "./source/images/maldives.jpg", description: "Relax on the pristine white-sand beaches of the Maldives and snorkel in crystal-clear turquoise waters." },
    { title: "Bora Bora", imageUrl: "./source/images/bora-bora.jpg", description: " Experience luxury and tranquility in Bora Bora's overwater bungalows surrounded by stunning lagoons." },
    { title: "Phuket, Thailand", imageUrl: "./source/images/thailand.jpg", description: "Discover the vibrant nightlife, bustling markets, and beautiful beaches of Phuket in Thailand." },
    { title: "Patagonia, Argentina ", imageUrl: "./source/images/ushuaia.jpg", description:"Embark on outdoor adventures in Patagonia with trekking, glacier hiking, and wildlife spotting." },
    { title: "Rome, Italy", imageUrl: "./source/images/roma.jpg", description: "Walk through history in Rome with ancient ruins like the Colosseum, Roman Forum, and Pantheon." },
];


function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = data.title;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundImage = `url('${data.imageUrl}')`;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = data.description;

    card.addEventListener("click", () => {
        card.classList.toggle("expanded");
    });

    card.appendChild(imageContainer);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}


// rendering the cards 
function renderCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    cardsData.forEach(data => {
        const card = createCard(data);
        cardContainer.appendChild(card);
    });
}

//  sorting cards alphabetically
function sortCardsAlphabetically() {
    cardsData.sort((a, b) => a.title.localeCompare(b.title));
    renderCards();
}

// shuffling cards 
function shuffleCards() {
    cardsData.sort(() => Math.random() - 0.5);
    renderCards();
}

// initial render of cards
document.addEventListener("DOMContentLoaded", () => {
    renderCards();

    const sortButton = document.getElementById("sort-btn");
    const shuffleButton = document.getElementById("shuffle-btn");

    sortButton.addEventListener("click", sortCardsAlphabetically);
    shuffleButton.addEventListener("click", shuffleCards);
});
