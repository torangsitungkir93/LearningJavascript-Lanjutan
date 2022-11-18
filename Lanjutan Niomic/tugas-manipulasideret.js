

function deretAngka(n){
    let deret=0;
    for(let i=1;i<=n;i++){
        
        if(i%3==0 && i%5==00){
            deret+="NIOMIC ";
        }else if(i%5 == 0){
            deret+="MIC "
        }else if(i%3==0){
            deret+="NIO "
        }
        else{
            deret=deret+i+" ";
        }
    }
    return deret;
}

console.log(deretAngka(10));
console.log("=============================");
console.log(deretAngka(20));
console.log("=============================");
console.log(deretAngka(30));