

function panggilUnshift(){

    let data = [`Bandung`,`Jakarta`,`Medan`,`Malang`];
    console.log(data);
    data.unshift("Surabaya",`Bali`);

    return data;

}

console.log(panggilUnshift());