const cursos = [
    { foto: "./assets/perfil.jpg", nomeProfe: "João", materia: "Matemática", cargaHoraria: "40", descricao: "Aulas de matemática básica", dataInicio: new Date('2023, 09, 01') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Maria", materia: "História", cargaHoraria: "30", descricao: "Aulas de história do Brasil", dataInicio: new Date('2023-08-15')},
    { foto: "./assets/perfil.jpg", nomeProfe: "Pedro", materia: "Inglês", cargaHoraria: "50", descricao: "Aulas de inglês intermediário", dataInicio: new Date('2023-09-15')},
    { foto: "./assets/perfil.jpg", nomeProfe: "Ana", materia: "Ciências", cargaHoraria: "25", descricao: "Descrição do curso de Ciências com a Professora Ana", dataInicio: new Date('2023-09-05') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Carlos", materia: "Geografia", cargaHoraria: "35", descricao: "Descrição do curso de Geografia com o Professor Carlos", dataInicio: new Date('2023-10-20') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Mariana", materia: "Artes", cargaHoraria: "20", descricao: "Descrição do curso de Artes com a Professora Mariana", dataInicio: new Date('2023-11-15') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Ricardo", materia: "Educação Física", cargaHoraria: "30", descricao: "Descrição do curso de Educação Física com o Professor Ricardo", dataInicio: new Date('2023-12-10') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Paula", materia: "Química", cargaHoraria: "45", descricao: "Descrição do curso de Química com a Professora Paula", dataInicio: new Date ('2024-01-05') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Felipe", materia: "Física", cargaHoraria: "40", descricao: "Descrição do curso de Física com o Professor Felipe", dataInicio: new Date('2024-02-20') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Sofia", materia: "Literatura", cargaHoraria: "30", descricao: "Descrição do curso de Literatura com a Professora Sofia", dataInicio: new Date('2024-03-15') },
    { foto: "./assets/perfil.jpg", nomeProfe: "Gabriel", materia: "Programação", cargaHoraria: "50", descricao: "Descrição do curso de Programação com o Professor Gabriel", dataInicio: new Date('2024-04-10') },
]

// BUSCA A DIV COM ID #cards DO HTML
const divCards = document.querySelector('#cards');

// FUNÇÃO RENDERIZA CARDS DINAMICAMENTE
function renderizaCards(cards){
    // RETIRA TODOS OS ELEMENTOS DA TELA
    divCards.innerHTML = ''

    cards.forEach(curso => {

        //CRIA DIVS COM CLASSES PARA CADA CARD 
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

        // .toLocaleString TRANSFORMA FORMATAÇÃO DA  DATA PARA O PADRÃO LOCAL (BRASIL)
        const dataInicioPadronizada = curso.dataInicio.toLocaleDateString()
        dataInicio.textContent = dataInicioPadronizada;
        dataInicio.classList.add('dataInicio');

        //COLOCA CARDS NO HTML
        divImg.append(foto, aulas, cargaHoraria);
        card.appendChild(divImg);

        divElementos.append(nomeProfessor, materia, descricao, inicioCurso, dataInicio);
        card.appendChild(divElementos);

        divCards.append(card);
    });
}

// PRIMEIRA CHAMADA DA FUNÇÃO QUE RENDERIZA TODOS OS CARDS NA TELA INICIALMENTE
renderizaCards(cursos);

// FUNÇÃO FILTRAR CARDS
function filtrarCards(){

    // PEGA O VALOR ESCRITO OU SELECIONADO PELO USUÁRIO NOS INPUTS
    const inputProfes = document.querySelector('#inputProfe').value;
    const inputMateria = document.querySelector('#inputMateria').value;
    const inputDataInicial = new Date(document.querySelector('#inputDataInicial').value);
    const inputDataFinal = new Date(document.querySelector('#inputDataFinal').value);


    //SE TODOS OS INPUTS ESTIVEREM VAZIOS, RENDERIZA TODOS OS CARDS
    if(inputProfes == '' && inputMateria == '' && inputDataInicial == '' && inputDataFinal == ''){
        renderizaCards(cursos);
    } else {
        
        //SE TIVER ALGUM VALOR, FILTRA ESSES VALORES E ARMAZENA NA CONSTANTE filtroCards
        const filtroCards = cursos.filter(curso =>{
            
            // ---------------------------------------------------------------- PROFES
            //TRANSFORMA VALOR DO INPUT E NOME PROFESSOR PARA LOWER CASE --> mais fácil verificação
            const inputProfesLower = inputProfes.toLowerCase();
            const objProfeLower = curso.nomeProfe.toLowerCase();
            
            // ---------------------------------------------------------------- MATÉRIAS
            //AGORA, COM AS MATÉRIAS PARA LOWER CASE
            const inputMateriaLower = inputMateria.toLowerCase();
            const objMateriaLower = curso.materia.toLowerCase();
            
            // ---------------------------------------------------------------- DATAS
            //BUSCA DATA INICIAL DOS CARDS DO OBJETO
            const dataCard = curso.dataInicio;
            
            //VERIFICA SE OS INPUTS CONTÉM INFORMAÇÕES DO OBJETO/CARD SE SIM, RETORNA APENAS CARDS FILTRADOS
            if(
                ((objProfeLower.includes(inputProfesLower)) || (inputProfesLower.length == 0)) &&
                ((objMateriaLower.includes(inputMateriaLower)) || (inputMateriaLower.length == 0)) &&
                ((inputDataInicial <= dataCard) || (inputDataInicial == "Invalid Date"))  &&
                ((inputDataFinal >= dataCard) || (inputDataFinal == "Invalid Date"))  
            ) return true;  
        });
        
        renderizaCards(filtroCards);
        
    }
}


// BUSCA ELEMENTOS HTML
const popupContainer = document.querySelector('.popup-container');
const cardsTela = document.querySelectorAll('.card');
const fecharPopupBtn = document.querySelector('.fechar-popup');

function popup (){
    
    cardsTela.forEach(function (card) {
        // EVENTO DE CLIQUE PARA ABRIR O POPUP
        card.addEventListener('click', function(card){    //abrirPopup 
            console.log(card.target)
        });
        


        // EVENTO DE CLIQUE PARA FECHAR O POPUP
        fecharPopupBtn.addEventListener('click', fecharPopup);

        // MOSTRA POPUP
        function abrirPopup() {
          popupContainer.style.display = 'flex';  
        }
        
        //ESCONDE POPUP
        function fecharPopup() {
          popupContainer.style.display = 'none';  
        }

    })

}

popup()        

// function renderizaAulas(){


//     const
// }
















































        // // CRIA DIVs
        // const popupContent = document.createElement('div');
        // popupContent.classList.add('popup-content');
        
        // const botaoFechar = document.createElement('button');
        // botaoFechar.classList.add('fechar-popup')
        // const fecharPopupBtn = document.querySelector('.fechar-popup');
        
        // // ADICIONA ELEMENTOS HTML
        // popupContent.append(botaoFechar);
        // popupContainer.append(popupContent);



