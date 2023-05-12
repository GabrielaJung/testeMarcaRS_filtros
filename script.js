const cursos = [
    { foto: "./assets/perfil.jpg", nomeProfe: "João", materia: "Matemática", cargaHoraria: "40", descricao: "Aulas de matemática básica", dataInicio: "2023-09-01", dataFim: "2023-12-15" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Maria", materia: "História", cargaHoraria: "30", descricao: "Aulas de história do Brasil", dataInicio: "2023-08-15", dataFim: "2023-11-30" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Pedro", materia: "Inglês", cargaHoraria: "50", descricao: "Aulas de inglês intermediário", dataInicio: "2023-09-15", dataFim: "2023-12-31" }
]

// BUSCA A DIV COM ID #cards DO HTML
const divCards = document.querySelector('#cards');

// RENDERIZA CARDS DINAMICAMENTE
function renderizaCards(cards){
    divCards.innerHTML = ''

    cursos.forEach(curso => {

        //CRIANDO DIVS PARA CADA CARD
        const card = document.createElement('div');
        card.classList.add('card');

        const divImg = document.createElement('div');
        divImg.classList.add('divImg');
        
        const divElementos = document.createElement('div');
        divElementos.classList.add('divElementos');        

        //IMAGEM
        const foto = document.createElement("img");
        foto.classList.add('cardFoto');
        foto.src = curso.foto;

        //CARGA HORÁRIA
        const aulas = document.createElement('p');
        aulas.textContent = "Aulas"
        aulas.classList.add('aulasCH');

        const cargaHoraria = document.createElement('h4');
        cargaHoraria.textContent = `${curso.cargaHoraria}H`;
        cargaHoraria.classList.add('cargaHoraria');
        
        //NOME DO PROFESSOR
        const nomeProfessor = document.createElement('h4');
        nomeProfessor.classList.add('nomeProfe');
        nomeProfessor.textContent = curso.nomeProfe;

        //MATERIA
        const materia = document.createElement('h5');
        materia.textContent = curso.materia;
        materia.classList.add('materia');
        
        //DESCRIÇÃO
        const descricao = document.createElement('p');
        descricao.textContent = curso.descricao;
        descricao.classList.add('descricao');


        //COLOCA CARDS NA TELA
        divImg.append(foto, aulas, cargaHoraria);
        card.appendChild(divImg);

        divElementos.append(nomeProfessor, materia, descricao);
        card.appendChild(divElementos);

        divCards.append(card);
    });
}

renderizaCards(cursos);





//pega valor do input e coloca no console---> testes
// const dataInicial = document.getElementById("inputDataInicial");
// console.log(dataInicial.value)

// const profe = document.getElementById("inputProfe");
// console.log(profe.value)