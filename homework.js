function notReturnSomething(){
    let doYouHaveSomeProblem = '0100110';
}
function returnSomething(){
    return 'I do think so.';
}
returnSomething();

function triangleArea(){
    let a=document.getElementById('a').value*1;
    let b=document.getElementById('b').value*1;
    let c=document.getElementById('c').value*1;
    var p=(a+b+c)/2;
    var x=p*(p-a)*(p-b)*(p-c);
    var y=Math.sqrt(x);
    if(a + b <= c||a + c <= b||b + c <= a){
        document.getElementById('result').value = 'Wrong triangle';
    }
     else {
         document.getElementById('result').value = y;
    }
}

function isPrime(n) {
    n = parseInt(n);
    if (n <= 3) {
        return n > 1;
    }
    if (n % 6 !== 1 && n % 6 !== 5) {
        return false;
    }
    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
function findPrime(a,b){
    for(let i = a; i<=b ; i++){
        if(isPrime(i))
            console.log(i+' is prime');
    }
}
findPrime(1,199);
