var score=0;
var total=10;//numero de preguntas
var point=0.5;// preuntas buenas
var highest =total * point;
var a= "aprobado" ;
var r="reprobado";
//obtener nombre
function na(){
    var texto=document.getElementById("uno").value;
    document.getElementById("dos").value=texto;

}
//inicializamos
function init(){
    sessionStorage.setItem('a1','A')
    sessionStorage.setItem('a2','C')
    sessionStorage.setItem('a3','B')
    sessionStorage.setItem('a4','D')
    sessionStorage.setItem('a5','A')
    sessionStorage.setItem('a6','D')
    sessionStorage.setItem('a7','B')
    sessionStorage.setItem('a8','C')
    sessionStorage.setItem('a9','A')
    sessionStorage.setItem('a10','D')
}


$(document).ready (function() {
$('.questionForm').hide();

//mostrar las preuntas
$('#q0').show();



$('#q0 #s').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q1 #submit').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});
$('#q2 #submit').click(function(){
    $('.questionForm').hide();
    process('q2');
    $('#q3').fadeIn(300);
    return false;

});
$('#q3 #submit').click(function(){
    $('.questionForm').hide();
    process('q3');
    $('#q4').fadeIn(300);
    return false;

});
$('#q4 #submit').click(function(){
    $('.questionForm').hide();
    process('q4');
    $('#q5').fadeIn(300);
    return false;

});
$('#q5 #submit').click(function(){
    $('.questionForm').hide();
    process('q5');
    $('#q6').fadeIn(300);
    return false;


});
$('#q6 #submit').click(function(){
    $('.questionForm').hide();
    process('q6');
    $('#q7').fadeIn(300);
    return false;

});
$('#q7 #submit').click(function(){
    $('.questionForm').hide();
    process('q7');
    $('#q8').fadeIn(300);
    return false;

});
$('#q8 #submit').click(function(){
    $('.questionForm').hide();
    process('q8');
    $('#q9').fadeIn(300);
    return false;

});
$('#q9 #submit').click(function(){
    $('.questionForm').hide();
    process('q9');
    $('#q10').fadeIn(300);
    return false;

});

$('#q10 #submit').click(function(){
    $('.questionForm').hide();
    process('q10');
    $('#result').fadeIn(300);
    return false;

});
//organizar los selectores q1
$('#q1 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q1 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q1 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q1 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q1 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q1 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q1 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q1 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q1 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q1 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});
// organizar selector q2

$('#q2 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q2 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q2 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q2 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q2 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q2 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q2 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q2 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q2 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q2 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});
// organizar q3

$('#q3 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q3 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q3 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q3 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q3 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q3 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q3 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q3 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q3 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q3 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});
  
//organizar q4

$('#q4 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q4 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q4 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q4 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q4 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q4 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q4 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q4 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q4 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q4 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});

//oranizar q5

$('#q5 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q5 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q5 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q5 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q5 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q5 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q5 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q5 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q5 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q5 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});

//oranizar q6

$('#q6 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q6 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q6 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q6 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q6 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q6 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q6 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q6 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q6 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q6 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});

//organizar q7

$('#q7 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q7 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q7 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q7 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q7 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q7 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q7 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q7 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q7 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q7 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});
//organizar q8

$('#q8 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q8 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q8 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q8 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q8 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q8 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q8 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q8 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q8 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q8 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});

//organizar q9
$('#q9 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q9 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q9 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q9 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q9 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q9 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q9 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q9 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q9 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q9 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});
//organizar q10
$('#q10 #p1').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q1').fadeIn(300);
    return false;

});

$('#q10 #p2').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q2').fadeIn(300);
    return false;

});

$('#q10 #p3').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q3').fadeIn(300);
    return false;

});

$('#q10 #p4').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q4').fadeIn(300);
    return false;

});

$('#q10 #p5').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q5').fadeIn(300);
    return false;

});

$('#q10 #p6').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q6').fadeIn(300);
    return false;

});

$('#q10 #p7').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q7').fadeIn(300);
    return false;

});

$('#q10 #p8').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q8').fadeIn(300);
    return false;

});

$('#q10 #p9').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q9').fadeIn(300);
    return false;

});

$('#q10 #p10').click(function(){
    $('.questionForm').hide();
    process('q1');
    $('#q10').fadeIn(300);
    return false;

});











});

//procesar respustas
function process(q){
    if(q=="q1"){
        var submitted=$('input[name=q1]:checked').val();
        if(submitted==sessionStorage. a1){
            score++;
        }
    }

    if(q=="q2"){
        var submitted=$('input[name=q2]:checked').val();
        if(submitted==sessionStorage. a2){
            score++;
        }
    }

    if(q=="q3"){
        var submitted=$('input[name=q3]:checked').val();
        if(submitted==sessionStorage. a3){
            score++;
        }
    }

    if(q=="q4"){
        var submitted=$('input[name=q4]:checked').val();
        if(submitted==sessionStorage. a4){
            score++;
        }
    }

    if(q=="q5"){
        var submitted=$('input[name=q5]:checked').val();
        if(submitted==sessionStorage.a5){
            score++;
        }
    }

    if(q=="q6"){
        var submitted=$('input[name=q6]:checked').val();
        if(submitted==sessionStorage.a6){
            score++;
        }
    }

    if(q=="q7"){
        var submitted=$('input[name=q7]:checked').val();
        if(submitted==sessionStorage.a7){
            score++;
        }
    }

    if(q=="q8"){
        var submitted=$('input[name=q8]:checked').val();
        if(submitted==sessionStorage.a8){
            score++;
        }
    }

    if(q=="q9"){
        var submitted=$('input[name=q9]:checked').val();
        if(submitted==sessionStorage.a9){
            score++;
        }
    }

    if(q=="q10"){
        var submitted=$('input[name=q10]:checked').val();
        if(submitted==sessionStorage.a10){
            score++; 
        }
        $('#result').html('<h3 class="h4">correctas: '+score+' de 10 <br></h3>');
        $('#promedio').html('<h3 class="nota"> tu notas es: '+score * 0.5+' de 5.0<br></h3><a href="Test.html"> <button class="b">Repetir Test</button></a>');
    }
   
    return false;
    
}



window.addEventListener ('load', init, false);

$('#q2 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q1').fadeIn(300);
    return false;

});

$('#q3 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q2').fadeIn(300);
    return false;

});

$('#q4 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q3').fadeIn(300);
    return false;

});

$('#q5 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q4').fadeIn(300);
    return false;

});

$('#q6 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q5').fadeIn(300);
    return false;

});

$('#q7 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q6').fadeIn(300);
    return false;

});

$('#q8 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q7').fadeIn(300);
    return false;

});

$('#q9 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q8').fadeIn(300);
    return false;

});

$('#q10 #anterior').click(function(){
    $('.questionForm').hide();
    $('#q9').fadeIn(300);
    return false;

});