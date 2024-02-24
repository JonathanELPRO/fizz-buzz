
function generarFizzbuzz(n)
{
    const FIZZ=3;
    const BUZZ=5
    if (n%FIZZ===0 && n%BUZZ===0)
    {
        return "FizzBuzz"
    }
    if (n%FIZZ===0)
    {
        return "Fizz"
    }
    if (n%BUZZ===0)
    {
        return "Buzz"
    }
    return n+"";
}
function cadenaDeSecuenciaFizzBuzz(limite)
{
    let secuencia=""
    for (let i=1;i<=limite;i++){
        if (i===limite){
            secuencia=secuencia+generarFizzbuzz(i)
        }
        else{
            secuencia=secuencia+generarFizzbuzz(i)+" "
        }
    }
    return secuencia
}
export {generarFizzbuzz,cadenaDeSecuenciaFizzBuzz}