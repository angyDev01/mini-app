import { CONFIG } from "./config.js";

const Api = CONFIG.API_KEY;
console.log(Api);

/* const getArticle = async function getArticles() {
  try {
    const response = await fetch(Api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    return [];
  }
}

console.log(getArticles()); */
const articleList = document.querySelector(".article");
//récupérer tous les éléments ayant la classe "codeTitle"
let codeTitle = document.querySelector(".codeTitle");
let codeContent = document.querySelector(".codeContent");

const getArticle =  await fetch(Api)
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
          <code>${article.content}</code>
        `;
        articleList.appendChild(articleItem);
    });
    }
    
    })
