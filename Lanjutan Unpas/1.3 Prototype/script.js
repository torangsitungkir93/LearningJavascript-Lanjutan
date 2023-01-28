

// function Mahasiswa(nama, energi) {
//    this.nama = nama;
//    this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama},Selamat Makan !`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama},Selamat Bermain !`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Halo ${this.nama},Selamat Tertidur !`;
// }


// let torangto = new Mahasiswa(`Torangto`,10);

// ! Versi Class

class Mahasiswa {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama},Selamat Makan !`;
    }

    main(jam){
        this.energi -= jam;
        return `Halo ${this.nama},Selamat Bermain !`;
    }

    tidur(jam){
        this.energi += jam*2;
        return `Halo ${this.nama},Selamat Tertidur !`;
    }
}

let torangto = new Mahasiswa(`Torangto`,10);
let doddy = new Mahasiswa(`Doddy`,15);
