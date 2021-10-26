window.onload = function (){
    for (var i = 0; i < 9; i++) {
        document.getElementById('game').innerHTML+=
        "<div class = 'block'></div>";
    }

    var hod = 0;

    document.getElementById('game').onclick = function(event){
    console.log(event);
    if (event.target.className == 'block'){
        if(hod%2 == 0){
            event.target.innerHTML = 'x';
        }
        else{
            event.target.innerHTML = 'օ';
        }    
        hod++;
        checkWinner();
    }
}
    function checkWinner(){
        var allBlock = document.getElementsByClassName('block');
        //console.log(allBlock);
        if(allBlock[0].innerHTML == 'x' && allBlock[1].innerHTML == 'x' && 
            allBlock[2].innerHTML == 'x')
            alert('x - երը հաղթեցին!');
            if(allBlock[3].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && 
            allBlock[5].innerHTML == 'x')
            alert('x - երը հաղթեցին!');
            if(allBlock[6].innerHTML == 'x' && allBlock[7].innerHTML == 'x' && 
            allBlock[8].innerHTML == 'x')
            alert('x - իկի պաբեձիծելի!');
            if(allBlock[0].innerHTML == 'x' && allBlock[3].innerHTML == 'x' && 
            allBlock[6].innerHTML == 'x')
            alert('x - երը հաղթեցին!');
            if(allBlock[1].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && 
            allBlock[7].innerHTML == 'x')
            alert('x - երը հաղթեցին!');
            if(allBlock[2].innerHTML == 'x' && allBlock[5].innerHTML == 'x' && 
            allBlock[8].innerHTML == 'x')
            alert('x - այ տես, որ ուզենաս, կռնաս!');
            if(allBlock[0].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && 
            allBlock[8].innerHTML == 'x')
            alert('x - երը ջարդին!');
            if(allBlock[2].innerHTML == 'x' && allBlock[4].innerHTML == 'x' && 
            allBlock[6].innerHTML == 'x')
            alert('x - երը մալադեց!');
            //հմի նոլիկները
            if(allBlock[0].innerHTML == 'օ' && allBlock[1].innerHTML == 'օ' && 
            allBlock[2].innerHTML == 'օ')
            alert('օ - երը հաղթեցին!');
            if(allBlock[3].innerHTML == 'օ' && allBlock[4].innerHTML == 'օ' && 
            allBlock[5].innerHTML == 'օ')
            alert('օ - երը հաղթեցին!');
            if(allBlock[6].innerHTML == 'օ' && allBlock[7].innerHTML == 'օ' && 
            allBlock[8].innerHTML == 'օ')
            alert('օ - իկի պաբեձիծելի!');
            if(allBlock[0].innerHTML == 'օ' && allBlock[3].innerHTML == 'օ' && 
            allBlock[6].innerHTML == 'օ')
            alert('օ - երը հաղթեցին!');
            if(allBlock[1].innerHTML == 'օ' && allBlock[4].innerHTML == 'օ' && 
            allBlock[7].innerHTML == 'օ')
            alert('օ - երը կրին!');
            if(allBlock[2].innerHTML == 'օ' && allBlock[5].innerHTML == 'օ' && 
            allBlock[8].innerHTML == 'օ')
            alert('օ - այ տես, որ ուզենաս, կռնաս!');
            if(allBlock[0].innerHTML == 'օ' && allBlock[4].innerHTML == 'օ' && 
            allBlock[8].innerHTML == 'օ')
            alert('օ - երը ջարդին!');
            if(allBlock[2].innerHTML == 'օ' && allBlock[4].innerHTML == 'օ' && 
            allBlock[6].innerHTML == 'օ')
            alert('օ - երը մալադեց!');
    }

}

