

function balikKata(kata) {
var kataReverse =``;
    for(let i=kata.length-1;i>=0;i--){
        kataReverse += kata[i];
    }
    return kataReverse;
}


// testCase
console.log(balikKata("telaso"));
// console.log(balikKata("JavaScript"))  
// console.log(balikKata("alohahola"))  
// console.log(balikKata("Jawa_Barat")) 