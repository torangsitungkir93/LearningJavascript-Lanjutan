


function deretAngka(n){
    let deret=0;
    for(let i=1;i<=n;i++){
        
        if(i%3 == 0){
            deret+="NIO ";
        }else if(i%5 == 0){
            deret+="MIC "
        }else{
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