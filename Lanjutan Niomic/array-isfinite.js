

function panggilIsFinite(){
    const a = isFinite([1,2,3,4,5]);
    const b = isFinite([`Jakarta`,`Lampung`,`Depok`]);
    const c = isFinite([1,2,3,,`Hello`,`Niomic`]);

    const d = isFinite(9);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

panggilIsFinite();