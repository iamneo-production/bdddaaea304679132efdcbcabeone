function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").Value
    b2 = document.getElementById("b2").Value;
    b3 = document.getElementById("b3").Value;
    b4 = document.getElementById("b4").Value;
    b5 = document.getElementById("b5").Value;
    b6 = document.getElementById("b6").Value;
    b7 = document.getElementById("b7").Value;
    b8 = document.getElementById("b8").Value;
    b9 = document.getElementById("b9").Value;

    var b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById("b1").Value
    b2btn = document.getElementById("b2").Value;
    b3btn = document.getElementById("b3").Value;
    b4btn = document.getElementById("b4").Value;
    b5btn = document.getElementById("b5").Value;
    b6btn = document.getElementById("b6").Value;
    b7btn = document.getElementById("b7").Value;
    b8btn = document.getElementById("b8").Value;
    b9btn = document.getElementById("b9").Value;

    if ((b1 == 'x') || (b1 == 'X') && (b2 == 'x') || (b2 == 'X') && (b3 == 'x') || (b3 == 'X')) {

    document.getElementById('print')
        .innerHTML = "player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;
    
    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
}
    else if((b1 == 'x') || (b1 == 'X') && (b4 == 'x') || (b4 == 'X') && (b7 == 'x') || (b7 == 'X')){
     document.getElementById('print')
        .innerHTML = "player X won";
    
        b2btn.disabled = true;
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
        
        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }

    else if((b7 == 'x') || (b7 == 'X') && (b8 == 'x') || (b8 == 'X') && (b9 == 'x') || (b9 == 'X')){
        document.getElementById('print')
           .innerHTML = "player X won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b3btn.disabled = true;
           b4btn.disabled = true;
           b5btn.disabled = true;
           b6tn.disabled = true;
           
           b7btn.style.color = "red";
           b8btn.style.color = "red";
           b9btn.style.color = "red";
       }

       else if((b1 == 'x') || (b1 == 'X') && (b5 == 'x') || (b5 == 'X') && (b9 == 'x') || (b9 == 'X')){
        document.getElementById('print')
           .innerHTML = "player X won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b4btn.disabled = true;
           b6btn.disabled = true;
           b8btn.disabled = true;
           b9tn.disabled = true;
           
           b3btn.style.color = "red";
           b5btn.style.color = "red";
           b7btn.style.color = "red";
       }

       else if((b2 == 'x') || (b2 == 'X') && (b5 == 'x') || (b5 == 'X') && (b8 == 'x') || (b8 == 'X')){
        document.getElementById('print')
           .innerHTML = "player X won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b4btn.disabled = true;
           b6btn.disabled = true;
           b7btn.disabled = true;
           b9btn.disabled = true;
           
           b2btn.style.color = "red";
           b5btn.style.color = "red";
           b8btn.style.color = "red";
       }
}