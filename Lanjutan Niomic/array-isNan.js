


//Cek tipe data array
function panggilIsNaN(){
    const a = isNaN([1,2,3,4,5]);
    const b = isNaN([`Jakarta`,`Medan`]);
    const c = isNaN(12);

    console.log(a);
    console.log(b);
    console.log(c);
}

panggilIsNaN();