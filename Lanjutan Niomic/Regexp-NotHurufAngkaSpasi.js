

// Hanya mengambil (kecuali) Huruf dan angka saja
function panggilRegexp(value){
    const ambilData = value.match(/\W/g);
    console.log(ambilData);
}

panggilRegexp(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);

// Fungsi \d hanya mengambil (kecuali) angka saja
function panggilRegexp2(value){
    const ambilData = value.match(/\D/g);
    console.log(ambilData);
}

panggilRegexp2(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);

// Fungsi untuk mengambil (kecuali) spasi saja
function panggilRegexp3(value){
    const ambilData = value.match(/\S/g);
    console.log(ambilData);
    console.log(`Banyaknya spasi : ${ambilData.length}`);
}

panggilRegexp3(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);