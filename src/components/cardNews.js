class cardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    build(){
        // component root
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        // cardLeft
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");
        
        // autor - filho do cardLeft
        const autor = document.createElement("span");
        cardLeft.appendChild(autor);
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        
        // linkTitle - filho do cardleft
        const linkTitle = document.createElement("a");
        cardLeft.appendChild(linkTitle);
        
        // newsContent - filho do cardLeft
        const newsContent = document.createElement("p");
        cardLeft.appendChild(newsContent);

        // CardRight
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");
        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);

        // Chamada componentRoot para as divs de classe CardLeft e CardRight
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){

    }
}
customElements.define("card-news", cardNews);