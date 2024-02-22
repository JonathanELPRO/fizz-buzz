
function generarFizzbuzz(n){
    const FIZZ=3;
    const BUZZ=5
    if (n%3===0 && n%5===0)
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
export default generarFizzbuzz