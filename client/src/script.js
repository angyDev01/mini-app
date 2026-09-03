const articleList = document.querySelector(".article");

try {
    const response = await fetch("https://6a9825507160beda2292b6e9.mockapi.io/api/v1/articles");
    
    if (!response.ok) {
        throw new Error("Erreur lors de la récupération des articles");
    }

    const data = await response.json();

    if (data.length === 0) {
        articleList.innerHTML = '<p class="data_empty">Aucun article disponible pour l\'instant.</p>';
        articleList.style.display = "flex";
        articleList.style.justifyContent = "center";
        articleList.style.alignItems = "center";
    } else {
        articleList.innerHTML = ""; // Nettoyer avant d'ajouter
        
        data.forEach((article) => {
            const articleItem = document.createElement("div");
            articleItem.classList.add("main");
            articleItem.innerHTML = `
                <span class="codeTitle">${article.title}</span>
                <p class="content">${article.content}</p>
            `;
            articleList.appendChild(articleItem);
        });
    }
} catch (error) {
    console.error("Erreur :", error);
}