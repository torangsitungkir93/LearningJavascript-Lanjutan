

function panggilSplice(){
    let kota = [`Jakarta`,`Bandung`,`Medan`,`Padang`,`Malang`];
    console.log(kota);
    kota.splice(2,0,`Palembang`);

    return kota;
}

console.log(panggilSplice());