let hoje = new Date();
let dnasc = new Date(2004, 14, 12);
let idade = hoje.getFullYear() - dnasc.getFullYear();
let m = hoje.getMonth() - dnasc.getMonth();

    if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
        idade--;
    }

let paragrafro = document.querySelector("#parag1");
let texto = document.createTextNode("Meu nome completo é Mateus Tavares dos Santos, nasci em Joinville-SC e tenho " + idade + " anos. Sou estudante do CEDUP, cursando último ano do Ensino Médio integrado com o técnico em Informática. Também estou cursando inglês na escola KNN, e meu nível de inglês é intermediário. Quando me formar no Ensino Médio, pretendo ingressar na faculdade de Ánalise e Desenvolvimento de Sistemas.");
paragrafro.appendChild(texto);

let paragrafro2 = document.querySelector("#parag2");
let texto2 = document.createTextNode("Tenho facilidade no desenvolvimento de softwares através da programação, mas tenho bloqueio de criatividade para desenvolver algo do zero. Aprendo rápido, e sempre busco aprender e evoluir mais.");
paragrafro2.appendChild(texto2);

let paragrafro3 = document.querySelector("#parag3");
let texto3 = document.createTextNode("Pretendo seguir na área de informática, trabalhando como programador.");
paragrafro3.appendChild(texto3);

let paragrafro4 = document.querySelector("#parag4");
let texto4 = document.createTextNode("No meu tempo livre gosto de jogar video game com os meus amigos, viajar, ir para a academia e passar um tempo com minha família e amigos.. Enfim esse sou eu!");
paragrafro4.appendChild(texto4);

