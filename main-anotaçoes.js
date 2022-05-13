//  alert('aqui')//
// o alert é uma funçao, e o ('aqui') éum argumento de função

function onScroll(){
 
} //isso é a criaçõa de uma função

onScroll()   //isso é como executar uma função
//onscroll no html é a ação de rolar a pagina, ou seja quando rolar a pagina(executar essa ação) o 

//String (textos)
//Number (número)
//Boolean (tue | false)
// igual é os dois símbolos de "==""

function onScroll(){
  navigation.classList.add('scroll') //DOM
  
};

function onScroll(){
  if(scrollY > 0){
  navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
};

// if - se
// else - se não

//  DOM é o document object model, que é todo o nosso código (objeto) HTML modelado para o javascript

// todo ponto no js significa que o elemento anterior é um objeto

ScrollReveal({
  origin:'top'
  distance: '30px'
  duration: 700,
}).reveal('#home');

//origin top significa que a pagina vai se movimentar de cima para baixo