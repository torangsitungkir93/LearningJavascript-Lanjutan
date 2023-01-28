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
// function Mahasiswa (nama,energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(console.log(`Halo ${this.nama}, Selamat Bermain!`));
//     }

//     return mahasiswa;
// }

// let torangto = Mahasiswa(`Torangto`,10);

// 3. Constructor Function
// keyword new

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(console.log(`Halo ${this.nama}, Selamat Bermain!`));
    }
}

let torangto = new Mahasiswa(`Torangto`,20);