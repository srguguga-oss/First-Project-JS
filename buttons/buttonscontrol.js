const btn1 = document.getElementById("meuBotao1");
const btn2 = document.getElementById("meuBotao2");
const btn3 = document.getElementById("meuBotao3");

const pagInicio = document.getElementById("paginaInicio");
const pagSobre = document.getElementById("paginaSobre");
const pagContato = document.getElementById("paginaContato");

btn1.addEventListener("click", function(){
    btn1.style.backgroundColor = "rgba(218, 218, 218, 0.4)";
    btn2.style.backgroundColor = "";
    btn3.style.backgroundColor = "";

    pagInicio.style.display = "block";
    pagSobre.style.display = "none";
    pagContato.style.display = "none";
});

btn2.addEventListener("click", function(){
    btn2.style.backgroundColor = "rgba(218, 218, 218, 0.4)";
    btn1.style.backgroundColor = "";
    btn3.style.backgroundColor = "";

    pagInicio.style.display = "none";
    pagSobre.style.display = "block";
    pagContato.style.display = "none";

});

btn3.addEventListener("click", function(){
    btn3.style.backgroundColor = "rgba(218, 218, 218, 0.4)";
    btn2.style.backgroundColor = "";
    btn1.style.backgroundColor = "";

    pagInicio.style.display = "none";
    pagSobre.style.display = "none";
    pagContato.style.display = "block";
});