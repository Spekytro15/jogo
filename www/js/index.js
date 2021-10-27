let personagem = document.querySelector('#pacman')
let quadrado = document.querySelector('#quadrado')

function pular() {
    if (personagem.classList != 'animar') {
        personagem.classList.add('animar')
    }

    setTimeout(function() {
        personagem.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval(function() {

    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )


    if (EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 62) {


        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        personagem.style.display = 'none'

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

    var gerador1 = geradornumero(1, 500);
    var gerador2 = geradornumero(1, 500);
    if (controle_eq == 1) {
        $('#equacao').html("")
        $(".modal-t").show();
        var equa = gerador1 + gerador2;
        $('#equacao').append(gerador1 + "+" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide();
                quadrado.style.animation = 'quadrado'
                $("#quadrado").show();
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")


            } else {
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(" EQ - 1")
    }
    if (controle_eq == 2) {
        $('#equacao').html("")
        $(".modal-t").show();
        var equa = gerador1 + gerador2;
        $('#equacao').append(gerador1 + "-" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide();

                quadrado.style.animation = 'quadrado'
                $("#quadrado").show();
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

                console.log(equa)
            } else {
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(" EQ - 3")
    }
    if (controle_eq == 3) {
        $('#equacao').html("")
        $(".modal-t").show();
        var equa = gerador1 + gerador2;
        $('#equacao').append(gerador1 + "/" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide();
                quadrado.style.animation = 'quadrado'
                $("#quadrado").show();
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

                console.log(equa)
            } else {
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(" EQ - 4")
    }
    if (controle_eq == 4) {
        $('#equacao').html("")
        $(".modal-t").show();
        var equa = gerador1 + gerador2;
        $('#equacao').append(gerador1 + "X" + gerador2)

        $("#veri_eq").click(function() {
            var txt = $("#txt").val();
            if (txt == equa) {
                $(".modal-t").hide();
                quadrado.style.animation = 'quadrado'
                $("#quadrado").show();
                personagem.style.display = 'block'
                $(".estrela-vitoria").fadeIn("slow")

            } else {
                M.toast({ html: 'Resposta incorreta' })
            }
        })
        console.log(" EQ - 5")
    }




}