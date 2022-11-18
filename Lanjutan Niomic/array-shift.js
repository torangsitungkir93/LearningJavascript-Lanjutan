function panggilShift(){
    let kota = [`Jakarta`,`Bandung`,`Medan`,`Jogja`,`Makasar`];
    console.log(kota);
    console.log("=========");

    // Menghapus sekaligus mengambil array
    kota = kota.shift();
    console.log("=========");
    
    return kota;
}

console.log(panggilShift());
