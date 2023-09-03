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

       else if((b4 == 'x') || (b4 == 'X') && (b5 == 'x') || (b5 == 'X') && (b6 == 'x') || (b6 == 'X')){
        document.getElementById('print')
           .innerHTML = "player X won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b3btn.disabled = true;
           b7btn.disabled = true;
           b8btn.disabled = true;
           b9btn.disabled = true;
           
           b4btn.style.color = "red";
           b5btn.style.color = "red";
           b6btn.style.color = "red";
       }

       else if((b1 == 'x') || (b1 == 'X') && (b4 == 'x') || (b4 == 'X') && (b7 == 'x') || (b7 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
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
           .innerHTML = "player 0 won";
       
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
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b3btn.disabled = true;
           b4btn.disabled = true;
           b5btn.disabled = true;
           b6btn.disabled = true;
           
           b7btn.style.color = "red";
           b8btn.style.color = "red";
           b9btn.style.color = "red";
       }
       else if((b3 == 'x') || (b3 == 'X') && (b6 == 'x') || (b6 == 'X') && (b9 == 'x') || (b9 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b4btn.disabled = true;
           b5btn.disabled = true;
           b7btn.disabled = true;
           b8btn.disabled = true;
           
           b3btn.style.color = "red";
           b6btn.style.color = "red";
           b9btn.style.color = "red";
       }
       else if((b7 == 'x') || (b7 == 'X') && (b8 == 'x') || (b8 == 'X') && (b9 == 'x') || (b9 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b3btn.disabled = true;
           b4btn.disabled = true;
           b5btn.disabled = true;
           b6btn.disabled = true;
           
           b7btn.style.color = "red";
           b8btn.style.color = "red";
           b9btn.style.color = "red";
       }
       else if((b1 == 'x') || (b1 == 'X') && (b5 == 'x') || (b5 == 'X') && (b9 == 'x') || (b9 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b2btn.disabled = true;
           b3btn.disabled = true;
           b4btn.disabled = true;
           b6btn.disabled = true;
           b7btn.disabled = true;
           b8btn.disabled = true;
           
           b1btn.style.color = "red";
           b5btn.style.color = "red";
           b9btn.style.color = "red";
       }
       else if((b3 == 'x') || (b3 == 'X') && (b5 == 'x') || (b5 == 'X') && (b7 == 'x') || (b7 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b4btn.disabled = true;
           b6btn.disabled = true;
           b8btn.disabled = true;
           b9btn.disabled = true;
           
           b3btn.style.color = "red";
           b5btn.style.color = "red";
           b7btn.style.color = "red";
       }
       else if((b2 == 'x') || (b2== 'X') && (b5 == 'x') || (b5 == 'X') && (b8 == 'x') || (b8 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b3btn.disabled = true;
           b4btn.disabled = true;
           b6btn.disabled = true;
           b7btn.disabled = true;
           b9btn.disabled = true;
           
           b2btn.style.color = "red";
           b5btn.style.color = "red";
           b8btn.style.color = "red";
       }
       else if((b4 == 'x') || (b4 == 'X') && (b5 == 'x') || (b5 == 'X') && (b6 == 'x') || (b6 == 'X')){
        document.getElementById('print')
           .innerHTML = "player 0 won";
       
           b1btn.disabled = true;
           b2btn.disabled = true;
           b3btn.disabled = true;
           b7btn.disabled = true;
           b8btn.disabled = true;
           b9btn.disabled = true;
           
           b4btn.style.color = "red";
           b5btn.style.color = "red";
           b6btn.style.color = "red";
       }
       else {

        if (flag == 1){

            document.getElementById('print')
           .innerHTML = "x turn";
        }
        else{
            document.getElementById('print')
            .innerHTML = "0 turn";
        }
       }
}

function myfunc_2() {
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9-'';
}

flag = 1;

function myfunc_3(){
    if(flag == 1){
        document.getElementById("b1").Value = 'X'
        document.getElementById("b1").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b1").Value = 'X'
        document.getElementById("b1").Value = 'true'
        flag = 1;

    }
}


function myfunc_4(){
    if(flag == 1){
        document.getElementById("b2").Value = 'X'
        document.getElementById("b2").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b2").Value = 'X'
        document.getElementById("b2").Value = 'true'
        flag = 1;

    }
}

function myfunc_5(){
    if(flag == 1){
        document.getElementById("b3").Value = 'X'
        document.getElementById("b3").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b3").Value = 'X'
        document.getElementById("b3").Value = 'true'
        flag = 1;

    }
}


function myfunc_6(){
    if(flag == 1){
        document.getElementById("b4").Value = 'X'
        document.getElementById("b4").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b4").Value = 'X'
        document.getElementById("b4").Value = 'true'
        flag = 1;

    }
}

function myfunc_7(){
    if(flag == 1){
        document.getElementById("b5").Value = 'X'
        document.getElementById("b5").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b5").Value = 'X'
        document.getElementById("b5").Value = 'true'
        flag = 1;

    }
}

function myfunc_8(){
    if(flag == 1){
        document.getElementById("b6").Value = 'X'
        document.getElementById("b6").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b6").Value = 'X'
        document.getElementById("b6").Value = 'true'
        flag = 1;

    }
}

function myfunc_9(){
    if(flag == 1){
        document.getElementById("b7").Value = 'X'
        document.getElementById("b7").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b7").Value = 'X'
        document.getElementById("b7").Value = 'true'
        flag = 1;

    }
}

function myfunc_10(){
    if(flag == 1){
        document.getElementById("b8").Value = 'X'
        document.getElementById("b8").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b8").Value = 'X'
        document.getElementById("b8").Value = 'true'
        flag = 1;

    }
}

function myfunc_11(){
    if(flag == 1){
        document.getElementById("b9").Value = 'X'
        document.getElementById("b9").Value = 'true'
        flag = 0;
    }
    else{
        document.getElementById("b9").Value = 'X'
        document.getElementById("b9").Value = 'true'
        flag = 1;

    }
}