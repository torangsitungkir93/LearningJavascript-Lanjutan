// Cara untuk membuat object pada javascript
// 1.Object Literal
// let mahasiswa = {
//     nama : `Torangto`,
//     energi : 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama},selamat makan`);
//     }
// }

// 2. Function Declaration

const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    },
    main : function (jam){
        this.energi -= jam;
        console.log(console.log(`Halo ${this.nama}, Selamat Bermain!`));
    },
    tidur : function (jam){
        this.energi += jam*2;
        console.log(console.log(`Halo ${this.nama}, Selamat Tidur!`));
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;

    return mahasiswa;
}

let torangto = Mahasiswa(`Torangto`, 10);