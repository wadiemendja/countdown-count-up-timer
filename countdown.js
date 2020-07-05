    var sec=0; var min=10;
    var secLab=document.getElementById('sec');
    var minLab=document.getElementById('min');
    setInterval(() => {
        if(sec!=0){
            sec--;
            if(sec<10) secLab.innerHTML='0'+sec;
            else secLab.innerHTML=sec;
        }else{
            min--;
            if(min<10) minLab.innerHTML='0'+min;
            else minLab.innerHTML=min;
            sec=59;
        }
    },999);
