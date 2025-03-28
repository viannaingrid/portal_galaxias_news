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
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        
        // newsContent - filho do cardLeft
        const newsContent = document.createElement("p");
        cardLeft.appendChild(newsContent);
        newsContent.textContent = this.getAttribute("content");

        // CardRight
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/img/foto-default.jpg";
        newsImage.alt = "Foto da noticia";
        cardRight.appendChild(newsImage);

        // Chamada componentRoot para as divs de classe CardLeft e CardRight
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card {
                width: 90%;
                -webkit-box-shadow: 9px 9px 19px 1px rgba(76, 74, 74, 0.68);
                -moz-box-shadow: 9px 9px 19px 1px rgba(85, 84, 84, 0.68);
                box-shadow: 9px 9px 19px 1px rgba(67, 66, 66, 0.68);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 15px
            }


            .card__left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;

                h1{
                    margin-top: 15px;
                    margin-bottom: 12px;
                    font-size: 25px;
                }

                p {
                    color: #847c7c;
                }

                span {
                    font-weight: 400;
                    color: #847c7c;
                    margin-bottom: 15px;
                }

                a{
                text-decoration: none;
                color: #000;
                font-size: 20px;
                font-weight: bold;
                }
            }

            .card__right img {
                width: 288px;
                padding: 15px;
                border-radius: 20px;
            }
        `

        return style;
    }
}
customElements.define("card-news", cardNews);