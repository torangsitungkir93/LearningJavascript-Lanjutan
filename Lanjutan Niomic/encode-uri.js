var res;

function encodeUri(){
    let uri = "my test-asp?name=torang&&car=saab";
    res = encodeURI(uri);

    console.log(res);
}

encodeUri();
console.log(`================`);
function decodeUri(){
    
    let decode = decodeURI(res);

    console.log(decode);
}

decodeUri();