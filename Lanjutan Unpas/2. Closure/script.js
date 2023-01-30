

// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan !`);
//     }
// }

// let selamatPagi = ucapkanSalam(`Pagi`);
// let selamatMalam = ucapkanSalam(`Malam`);

// selamatPagi(`Torangto`);
// selamatMalam(`Torangto`);


let counter = 0;
let add = function(){
    return ++counter;
};

console.log(add());