let personagem = document.querySelector('#pacman')
let quadrado = document.querySelector('#quadrado')
let pontos = 0;
let erros = 0;
    
$("#play").click( function () {
 let name =  $("#name").val();

if(name == ""){ 
    M.toast({ html: 'Digite um nome' })
}else{
    $("#name_get").html("jogador: "+name)
        $("#tela-1").hide()
        $("#tela-2").show()
}
})



function pular() {
    if (personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 700)
}

var testarColisao = setInterval(function() {

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )
   
    console.log(topoPersonagem)
    if (EsquerdaQuadrado < 50 && EsquerdaQuadrado > 0 &&  topoPersonagem >= 285  ){
      

 
    quadrado.style.display = 'none'
    personagem.style.display = 'none'
     
     console.log("relo")

     equa();
    }


}, 10)

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function geradornumero(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function equa() {
    
    
    //primeira equaçãovar teste = 0
    var controle_eq = randomIntFromInterval(1, 4)

    var gerador1 = geradornumero(1, 20);
    var gerador2 = geradornumero(1, 20);

   if (controle_eq == 1) {
        $('#equacao').html("")
        $(".modal-t").show();

        var equa = gerador1 + gerador2;

        $('#equacao').append(gerador1 + "+" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide(); 
                quadrado.style.display = 'block'
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

                pontos = pontos + 1;
                $("#ponto_get").html("Pontos: "+pontos)
            } else {
                erros = erros + 1;
                $("#erros").html("Erros: "+erros)
                M.toast({ html: 'Resposta incorreta' })
            }
            console.log(equa)
        })
        console.log(" EQ - 1")
    }
    if (controle_eq == 2) {
        $('#equacao').html("")

        $(".modal-t").show();

        var equa = gerador1 - gerador2;
        $('#equacao').append(gerador1 + "-" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide(); 
                quadrado.style.display = 'block'
              
               
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")
 pontos = pontos + 1;
                 $("#ponto_get").html("Pontos: "+pontos)

            } else {
                erros = erros + 1;
                $("#erros").html("Erros: "+erros)
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(equa)
        console.log(" EQ - 1")
    }
    if (controle_eq == 3) {
        $('#equacao').html("")

        $(".modal-t").show();

        var equa = gerador1 + gerador2;
        $('#equacao').append(gerador1 + "+" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide(); 
                quadrado.style.display = 'block'
              
               
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

 pontos = pontos + 1;
                 $("#ponto_get").html("Pontos: "+pontos)
            } else {
                erros = erros + 1;
                $("#erros").html("Erros: "+erros)
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(" EQ - 1")
        console.log(equa)
    }
    if (controle_eq == 4) {
        $('#equacao').html("")

        $(".modal-t").show();

        var equa = gerador1 * gerador2;
        $('#equacao').append(gerador1 + "X" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide(); 
                quadrado.style.display = 'block'
              
               
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

pontos = pontos + 1;
                $("#ponto_get").html("Pontos: "+pontos)
            } else {
                erros = erros + 1;
                $("#erros").html("Erros: "+erros)
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(equa)
        console.log(" EQ - 1")
    }

    
}