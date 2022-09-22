const fahrenheit=document.querySelector('#temperatureF');
const celsius=document.querySelector('.temperatureC');
const convert=document.querySelector('.convert');
const fillBar=document.querySelector('.fillBar');

let result;

convert.addEventListener('click', ()=>{(fahrenheit.value)?convertFahrenheit():location.reload()})

function convertFahrenheit(){
    result=((fahrenheit.value-32)*(5/9)).toFixed(1);
    celsius.innerHTML=result+' °';
    fillRedBar()
}

function fillRedBar(){
    let percentage;
    if(result<0) percentage=0
    else if(result>100) percentage=250
    else percentage=250*result/100;
    fillBar.innerHTML=result+'°';
    fillBar.style.height=`${percentage}px`
}