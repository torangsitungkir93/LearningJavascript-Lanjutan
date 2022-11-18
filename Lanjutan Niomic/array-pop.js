function panggilpop(){
    let kota = [`Jakarta`,`Bandung`,`Medan`,`Jogja`,`Makasar`,`Surabaya`];
    console.log(kota);

    // Menghapus data paling terakhir
    kota.pop();
    return kota;
}

console.log(panggilpop());