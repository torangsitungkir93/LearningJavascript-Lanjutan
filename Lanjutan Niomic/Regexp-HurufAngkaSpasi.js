

// Hanya mengambil Huruf dan angka saja
function panggilRegexp(value){
    const ambilData = value.match(/\w/g);
    console.log(ambilData);
}

panggilRegexp(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);
// Fungsi \d hanya mengambil angka saja
function panggilRegexp2(value){
    const ambilData = value.match(/\d/g);
    console.log(ambilData);
}

panggilRegexp2(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);

function panggilRegexp3(value){
    const ambilData = value.match(/\s/g);
    console.log(ambilData);
    console.log(`Banyaknya spasi : ${ambilData.length}`);
}

panggilRegexp3(`Bulan ke 1 sd ke 4`);
console.log(`=====================`);