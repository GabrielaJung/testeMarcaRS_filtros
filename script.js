const cursos = [
    { foto: "./assets/perfil.jpg", nomeProfe: "João", materia: "Matemática", cargaHoraria: "40", descricao: "Aulas de matemática básica", dataInicio: "2023-09-01"},
    { foto: "./assets/perfil.jpg", nomeProfe: "Maria", materia: "História", cargaHoraria: "30", descricao: "Aulas de história do Brasil", dataInicio: "2023-08-15"},
    { foto: "./assets/perfil.jpg", nomeProfe: "Pedro", materia: "Inglês", cargaHoraria: "50", descricao: "Aulas de inglês intermediário", dataInicio: "2023-09-15"},
    { foto: "./assets/perfil.jpg", nomeProfe: "Ana", materia: "Ciências", cargaHoraria: "25", descricao: "Descrição do curso de Ciências com a Professora Ana", dataInicio: "2023-09-05" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Carlos", materia: "Geografia", cargaHoraria: "35", descricao: "Descrição do curso de Geografia com o Professor Carlos", dataInicio: "2023-10-20" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Mariana", materia: "Artes", cargaHoraria: "20", descricao: "Descrição do curso de Artes com a Professora Mariana", dataInicio: "2023-11-15" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Ricardo", materia: "Educação Física", cargaHoraria: "30", descricao: "Descrição do curso de Educação Física com o Professor Ricardo", dataInicio: "2023-12-10" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Paula", materia: "Química", cargaHoraria: "45", descricao: "Descrição do curso de Química com a Professora Paula", dataInicio: "2024-01-05" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Felipe", materia: "Física", cargaHoraria: "40", descricao: "Descrição do curso de Física com o Professor Felipe", dataInicio: "2024-02-20" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Sofia", materia: "Literatura", cargaHoraria: "30", descricao: "Descrição do curso de Literatura com a Professora Sofia", dataInicio: "2024-03-15" },
    { foto: "./assets/perfil.jpg", nomeProfe: "Gabriel", materia: "Programação", cargaHoraria: "50", descricao: "Descrição do curso de Programação com o Professor Gabriel", dataInicio: "2024-04-10" },
]

// BUSCA A DIV COM ID #cards DO HTML
const divCards = document.querySelector('#cards');

// RENDERIZA CARDS DINAMICAMENTE
function renderizaCards(cards){
    divCards.innerHTML = ''

    cards.forEach(curso => {

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

        //DATA INICIAL 
        const inicioCurso = document.createElement('p');
        inicioCurso.textContent = "Data de início:"
        inicioCurso.classList.add('inicioCurso');
        const dataInicio = document.createElement('p');
        dataInicio.textContent = curso.dataInicio;
        dataInicio.classList.add('dataInicio');



        //COLOCA CARDS NO HTML
        divImg.append(foto, aulas, cargaHoraria);
        card.appendChild(divImg);

        divElementos.append(nomeProfessor, materia, descricao, inicioCurso, dataInicio);
        card.appendChild(divElementos);

        divCards.append(card);
    });
}

renderizaCards(cursos);

// FUNCTION FILTRAR CARDS
function filtrarCards(){

    // PEGA O VALOR ESCRITO PELO USUÁRIO NOS INPUTS
    const inputProfes = document.querySelector('#inputProfe').value;
    const inputMateria = document.querySelector('#inputMateria').value;


    //SE O INPUT ESTIVER VAZIO, RENDERIZA TODOS OS CARDS
    if(inputProfes == '' && inputMateria == ''){
        renderizaCards(cursos);
    } else {
        
        //SE TIVER ALGUM VALOR, FILTRA ESSES VALORES E ARMAZENA EM UMA CONSTANTE
        const filtroCards = cursos.filter(curso =>{
            
            //TRANSFORMA VALOR DO INPUT E NOME PROFESSOR PARA LOWER CASE
            const inputProfesLower = inputProfes.toLowerCase();
            const objProfeLower = curso.nomeProfe.toLowerCase();
            
            //AGORA, COM AS MATÉRIAS
            const inputMateriaLower = inputMateria.toLowerCase();
            const objMateriaLower = curso.materia.toLowerCase();

            
            
            //VERIFICAÇÕES INPUT INCLUI DADOS? SE SIM, RETORNA APENAS CARDS FILTRADOS
            if((objProfeLower.includes(inputProfesLower)) || (objMateriaLower.includes(inputMateriaLower))) return true;
            
        });
        console.log(filtroCards)
        //RENDERIZA CARDS FILTRADOS
        renderizaCards(filtroCards);
    }
}





//pega valor do input e coloca no console---> testes
// const dataInicial = document.getElementById("inputDataInicial");
// console.log(dataInicial.value)

// const profe = document.getElementById("inputProfe");
// console.log(profe.value)