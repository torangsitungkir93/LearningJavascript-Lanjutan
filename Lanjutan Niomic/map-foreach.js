

function panggilPerintahMap(){
    const dataKota = [`Jakarta`,`Balikpapan`,`Medan`];
    dataKota.map((item,index,array)=> {
        console.log(item);
        console.log(index);
        console.group(array);
    });
}

panggilPerintahMap();