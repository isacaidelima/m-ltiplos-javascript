//encontre os múltiplos de 3 e 5

let numero = 0;
let i;

numero = window.prompt('será de 0 até qual valor?')

for(i=0; i<numero; i++)
{
    if(i%3==0 && i%5==0)
    {   
        console.log(i);
    }

}