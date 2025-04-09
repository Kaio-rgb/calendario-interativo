function colorirDia(){
   // PegarValor do campo Dia
    let days = document.getElementyById('day').value;

   // Pega o valor do campo de cor
    let color = document.getElementById('color').value;

   // pega os elementos da tabela calendario
    let calendar = document.getElementById('calendario');

    //VCerificar se o campo de dia fi preenchido
    if(!days){
        alert('Favor informar o Dia');
    } else if((days > 0) && (days <= 31)){
    // Se o numero de dias esta no intervalp
    //aplicara a cor na celula do calendario
    let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
    td.style.backgroundColor = color;
    }else{
        alert('Favor digitar um dia do calendario');
    }

    // Guarda a celula da tabela
    let elementos = document.querySelectorAll('td');

    // Declara e inicializa contadores
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0,contadorRoxo = 0;

    // Loop para verificar o estilo de cada celula e contar quantas tem cor e qual cor
    for(let i = 0; i < elementos.length; i++){
    // obtem o estilo do elemento atual
    var estilo = window.getComputedStyle(elementos[i]);

    //Obtem a cor de fundo  atual de celulas
    var corEstilo = estilo.backgroundColor;

    //verificar a cor e implementar no contador
    if(corEstilo === "rgb(173, 216, 230)"|| corEstilo === "lightblue"){
        contadorAzul++;

    }else if(corEstilo === "rgb(152, 215, 152)" ||corEstilo === "palegreen"){
        contadorVerde++;

    }else if(corEstilo === "rgb(255, 182, 193)" ||corEstilo === "lightpink"){
        contadorRosa++;

    }else if(corEstilo === "rgb(106, 90, 205)" ||corEstilo === "slateblue"){
        contadorAzul++;
    }
  }
}