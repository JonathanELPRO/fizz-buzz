
function generarFizzbuzz(n){
    // const FIZZ=3;
    // if (n===FIZZ)
    // {
    //     return "fizz"
    // }
    if (n%3===0)
    {
        return "Fizz"
    }
    if (n%5===0)
    {
        return "Buzz"
    }
    return n+"";
}
export default generarFizzbuzz