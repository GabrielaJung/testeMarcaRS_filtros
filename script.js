const cursos = [
    { foto: "./assets/perfil.jpg", nomeProfe: "João", materia: "Matemática", cargaHoraria: "40", descricao: "Aulas de matemática básica Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-09-01, 8:30') },
    { foto: "./assets/perfil2.jpg", nomeProfe: "Maria", materia: "História", cargaHoraria: "30", descricao: "Aulas de história do Brasil Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-08-15, 9:30')},
    { foto: "./assets/perfil3.jpg", nomeProfe: "Pedro", materia: "Inglês", cargaHoraria: "50", descricao: "Aulas de inglês intermediário Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-09-15, 10:30')},
    { foto: "./assets/perfil4.jpg", nomeProfe: "Ana", materia: "Ciências", cargaHoraria: "25", descricao: "Descrição do curso de Ciências com a Professora Ana Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-09-05, 7:30') },
    { foto: "./assets/perfil5.jpg", nomeProfe: "Carlos", materia: "Geografia", cargaHoraria: "35", descricao: "Descrição do curso de Geografia com o Professor Carlos Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-10-20, 10:00') },
    { foto: "./assets/perfil6.jpg", nomeProfe: "Mariana", materia: "Artes", cargaHoraria: "20", descricao: "Descrição do curso de Artes com a Professora Mariana Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-11-15, 10:00') },
    { foto: "./assets/perfil7.jpg", nomeProfe: "Ricardo", materia: "Educação Física", cargaHoraria: "30", descricao: "Descrição do curso de Educação Física com o Professor Ricardo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2023-12-10, 14:00') },
    { foto: "./assets/perfil8.jpg", nomeProfe: "Paula", materia: "Química", cargaHoraria: "45", descricao: "Descrição do curso de Química com a Professora Paula Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date ('2024-01-05, 8:00') },
    { foto: "./assets/perfil9.jpg", nomeProfe: "Felipe", materia: "Física", cargaHoraria: "40", descricao: "Descrição do curso de Física com o Professor Felipe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2024-02-20, 9:00') },
    { foto: "./assets/perfil10.jpg", nomeProfe: "Sofia", materia: "Literatura", cargaHoraria: "30", descricao: "Descrição do curso de Literatura com a Professora Sofia Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2024-03-15, 8:30') },
    { foto: "./assets/perfil11.jpg", nomeProfe: "Gabriel", materia: "Programação", cargaHoraria: "50", descricao: "Descrição do curso de Programação com o Professor Gabriel Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2024-04-10, 10:10') },
    { foto: "./assets/perfil12.jpg", nomeProfe: "Bumi", materia: "Programação", cargaHoraria: "40", descricao: "Descrição do curso de Programação com o Professor Bumi! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dataInicio: new Date('2024-04-10, 10:10') },
]

// BUSCA ELEMENTOS HTML
const popupContainer = document.querySelector('.popup-container');
const popupContent = document.querySelector('.popup-content');
const cardsTela = document.querySelectorAll('.card');
const fecharPopupBtn = document.querySelector('.fechar-popup');
const btnConfirmarCurso = document.querySelector('.confirmar-inscricao');

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
        card.setAttribute('onclick', 'abrirPopup(this)')
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




//ESCONDE POPUP
function fecharPopup() {
    popupContainer.style.display = 'none';  
}
// MOSTRA POPUP
function abrirPopup(card){
    popupContainer.style.display = 'flex'
    
    
    renderizaElementos(card);
}

// ADICIONA INFORMAÇÕES DOS CARDS NO POPUP

function renderizaElementos(curso){
    // FOTO PERFIL
    const fotoPerfilPopup = document.querySelector('.foto-perfil-popup');
    const foto = curso.querySelector('.cardFoto');
    fotoPerfilPopup.src = foto.src;
    
    // NOME PROFESSOR 
    const nomeProfePopup = document.querySelector ('.nome-professor');
    const nome = curso.querySelector('.nomeProfe');
    nomeProfePopup.textContent = nome.textContent

    // CONTEÚDO DO CURSO
   const descricaoPopup = document.querySelector('.conteudo-descricao');
   const descricao = curso.querySelector('.descricao');
   
   descricaoPopup.textContent = descricao.textContent;
}

const listaCursos = [];

// FUNÇÃO ADICIONA CURSO NA LISTA - MINHAS AULAS
function addCurso(){

    // BUSCA ELEMENTO PAI DO HTML
    const descricao = document.querySelector('.conteudo-descricao');
    
    // ENCONTRA CURSO COM MESMA DESCRICAO
    cursos.find(curso => {if(curso.descricao === descricao.textContent){
        
        // VERIFICA SE JÁ EXISTE NA LISTA (NÃO PODE REPETIR)
        if(listaCursos.length === 0){
            listaCursos.push(curso)
        }else{

            // LISTA COM TODAS AS DESCRIÇÕES (TODOS OS CURSOS)
            const listaDescricao = []
            cursos.forEach(a => listaDescricao.push(a))
 
            if(listaDescricao.includes(curso) && (!(listaCursos.includes(curso)))){
                listaCursos.push(curso)
            }
        }
        
    }})
        
    renderizaMinhaLista(listaCursos)
}

// BUSCA NO HTML A LISTA MINHAS AULAS
const divLista = document.getElementById('lista-minhas-aulas');
const descricaoLista = [];

function renderizaMinhaLista(lista){

    // TIRA TODOS OS ELEMENTOS ANTERIORES À ATUALIZAÇÃO PARA QUE NÃO SE REPITAM
    divLista.innerHTML = ''

    // PASSA POR CADA OBJETO DO ARRAY QUE CONTÉM OS CURSOS ADICIONADOS À LISTA E ADICIONA INFORMAÇÕES 
    lista.forEach(item => {

        // DD LISTA
        const itemLista = document.createElement('dd');
        itemLista.classList.add('item-lista');
        itemLista.setAttribute('descricao', item.descricao)

        // DIV INFOS-TOTAL
        const infosTotal = document.createElement('div');
        infosTotal.classList.add('infos-total-lista');

        // IMAGEM
        const fotoLista = document.createElement('img');
        fotoLista.classList.add('foto-lista');
        fotoLista.src = item.foto;

        // INFORMACOES CURSO
        const divInfos = document.createElement('div');
        divInfos.classList.add('div-infos-lista');

        // MATERIA
        const materiaLista = document.createElement('p');
        materiaLista.classList.add('materia-lista');
        materiaLista.textContent = `Matéria: ${item.materia}`;

        // INICIO DO CURSO - DATA E HORA
        const dataLista = document.createElement('p');
        dataLista.classList.add('data-lista');
        const dataCurso = item.dataInicio;
        dataLista.textContent = `Inicia no dia ${dataCurso.toLocaleDateString()} das ${dataCurso.getHours()}:${dataCurso.getMinutes()} às ${dataCurso.getHours(dataCurso.setHours(dataCurso.getHours()+1))}:${dataCurso.getMinutes()}`;
        dataCurso.getHours(dataCurso.setHours(dataCurso.getHours()-1));
        
        // BOTÃO CANCELAR CURSO
        const botaoCancelaLista = document.createElement('button');
        botaoCancelaLista.classList.add('btn-cancela-lista');
        botaoCancelaLista.textContent = 'X'
        botaoCancelaLista.setAttribute('onclick', 'removeElementoLista(this.parentNode)')

        // DESCRICAO
        if(descricaoLista.length == 0){

            descricaoLista.push(item);
        } else{
            const listaDescricao = []
            cursos.forEach(a => listaDescricao.push(a))

            if(listaDescricao.includes(item) && (!(descricaoLista.includes(item)))){
                descricaoLista.push(item)
            }
        }


        // TRAZ ELEMENTOS CRIADOS PARA O HTML
        divInfos.append(materiaLista, dataLista);
        infosTotal.append(fotoLista, divInfos);
        itemLista.append(infosTotal, botaoCancelaLista);
        divLista.appendChild(itemLista);
        return descricaoLista        
    })
}



function removeElementoLista(item) {

    //ENCONTRA LISTA DESEJADA PARA REMOVER
    const index = listaCursos.findIndex(curso => curso.descricao === item.getAttribute('descricao'))

    // RETIRA ITEM DA LISTA ENCONTRADO DO ARRAY DE CURSOS DA MINHA LISTA
    if(index > -1) listaCursos.splice(index, 1)

    // RENDERIZA NOVAMENTE A LISTA COM O ARRAY ATUALIZADO 
    renderizaMinhaLista(listaCursos)
}
