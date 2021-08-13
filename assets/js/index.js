// Adriano Siqueira - 8/12/2021

function calcular() {
    
    let button = document.getElementById("button");
    let ageBox = document.getElementById("anos");
    let catAge = document.getElementById("idade").value;
    let divBox = document.getElementById("ageBox");
    let table = document.getElementById("table");
    let info = document.getElementById("info");
    let pic = document.getElementById("pic");

    let idade = 0;

    pics = [
        "./assets/img/1.jpg",
        "./assets/img/2.jpg",
        "./assets/img/3.jpg",        
        "./assets/img/4.jpg",        
        "./assets/img/5.jpg",        
        "./assets/img/6.jpg"        
    ]

    quote = [
        "Aos 15 anos, Brittany Wenger desenvolveu uma forma de estudar a genética de pacientes e encontrou uma maneira de descobrir o risco de câncer. Com essa pesquisa, ela ganhou o prêmio Google Science Fair. Porém, ela nunca caçou um rato e deixou de presente pra alguem. -- Gatos 1 x 0 Brittany Wenger --",
        "Aos 24 anos de idade Tim Burton lançou Vincent, o seu primeiro curta-metragem e considerado até hoje uma de suas mais brilhantes produções. Nunca soube ronronar - Gatos vencem!!!",
        "Aos 28 anos, Ada Lovelace, traduziu um artigo escrito por Luigi Menabrea, a respeito da máquina de calcular inventada por Babbage. Ada acrescentou diversas anotações, incluindo o primeiro algorítmo da historia. Ada não conseguia saltar muros, Gatos são visivelmente superiores!",
        "Aos 32 anos de idade, Elon Musk fundou a Tesla. Nenhum tesla foi venereado como Deus no egito antigo. Gatos >>>>>>>>> Musk",
        "Henry Ford, fundou a Detroit Automobile Company, sua primeira companhia, aos 36 anos de idade. A D.A.C. faliu 2 anos depois. Ford errou quando não contratou um gato para administrar sua companhia, nunca vi gatos falindo",
        "A rede de restaurantes KFC foi fundada por Harland David Sanders, quando ele tinha 40 anos. Aos 6 anos, seu gato é capaz de usar a caixinha de areia, engole essa coronel Sanders"
    ]

    if (catAge == 1) {
        idade = 15;
        
    }
    if (catAge == 2) {
        idade = 24;
    }
    if (catAge >= 3) {
        idade = 24 + ((catAge - 2) * 4);
    }
    
    ageBox.innerHTML = idade;
    divBox.style.display = "flex";    

    if(window.screen.width >= 1000){
        if (catAge <= 6){
            table.style.display = "flex";
            info.innerHTML = quote[catAge - 1];
            pic.setAttribute('src', pics[catAge - 1]);
        }
        else {
            table.style.display = "none";
        }
    }

}