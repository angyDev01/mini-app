const articleList = document.querySelector(".article");
//récupérer tous les éléments ayant la classe "codeTitle"
let codeTitle = document.querySelector(".codeTitle");
let codeContent = document.querySelector(".codeContent");

const getArticle =  await fetch("https://6a9825507160beda2292b6e9.mockapi.io/api/v1/articles")
  .then((response) =>{
    if (!response.ok){
        throw new Error("Erreur lors de la récupération des articles");
    } 
    return response.json();
  })

  .then((data) => {
    if (data.length === 0) {
      articleList.innerHTML = '<p class="data_empty">Aucun article disponible pour l\'instant.</p>';
      articleList.style.display = "flex";
      articleList.style.justifyContent = "center";
      articleList.style.alignItems = "center";
    } else {
      data.forEach((article) => {
        let div = document.createElement("div");
        const articleItem = document.createElement("div");
        articleItem.classList.add("main");
        articleItem.innerHTML = `
          <span class="codeTitle">${article.title}</span>
          <p class = "content" >${article.content}</p>
        `;
        articleList.appendChild(articleItem);
    });
    }
    
    })
