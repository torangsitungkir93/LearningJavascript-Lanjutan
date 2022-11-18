

function panggilEval(){
    const x = [1,2,3,4,5,6,7,8,9];
    let total =0;

    for(let i=0;i<x.length;i++){
        total += x[i];
    }

    console.log(eval(total));
}

panggilEval();