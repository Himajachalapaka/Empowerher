let n=5;
let count=0;
function prime(n){

for(let i=1; i<=n; i++){
    if(n%i==0){
        count++;
    }
}
if(count==2)
    return true;
else
    return false;

}
console.log(prime(n));