
// function Expression

const tampilNama = (nama) => {
    return `Halo,${nama},selamat malam`;
}

console.log(tampilNama(`torangto`));

let mahasiswa = [`Torangto Situngkir`,`Rifqy Wahyu`,`Khalil Attala`];

let jumlahHuruf = mahasiswa.map(function(nama){
    return nama.length; 
});