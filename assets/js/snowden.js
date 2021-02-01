function snowden() {
    
    const json = {
        "data" : {
            "first_name": "RWR3YXJkIEpvc2VwaA==",
            "last_name": "U25vd2Rlbg==",
            "birth_name": "RWR3YXJkIEpvc2VwaCBTbm93ZGVu",
            "birthday": "MjEganVpbiAxOTgz",
            "birth_city": {
               "city": "RWxpemFiZXRoIENpdHk=",
               "state": "Q2Fyb2xpbmUgZHUgbm9yZA==",
               "pays": "RXRhdHMtVW5pcw==",
               "coordonnée": {
                  "longitude": "MzYuMjk1Njg0",
                  "latitude": "LTc2LjIyNDc3MA=="
               },
               "population": "MTggNjgz"
            },
            "profession": "SW5mb3JtYXRpY2llbg==",
            "pays_de_residence": "UnVzc2ll",
            "activite_principale": "QWRtaW5pc3RyYXRldXIgc3lzdMOobWVzIGNoZXogQm9veiBBbGxlbiBIYW1pbHRvbg==",
            "autre_activite": "UsOpdsOpbGF0ZXVyIGRlcyBwcm9ncmFtbWVzIGRlIHN1cnZlaWxsYW5jZSDDqWxlY3Ryb25pcXVlIChQUklTTSwgWEtleXNjb3JlKSBkZSBjaXRveWVucywgZCdlbnRyZXByaXNlcyBldCBkJ8OJdGF0cyBwYXIgbGVzIGFnZW5jZXMgZGUgcmVuc2VpZ25lbWVudHMgYW3DqXJpY2FpbmVzIChOU0EsIEZCSSksIGJyaXRhbm5pcXVlcyAoR0NIUSksIGNhbmFkaWVubmVzIChDU0VDKSwgYXVzdHJhbGllbm5lcyAoRFNEKSBldCBuw6lvLXrDqWxhbmRhaXNlcyAoR0NTQik="
        },
        "hint" : "Find your way",
        "encrypt" : "BASE64"
    }
         
    console.log(json);
}

function gps(x, y){
    if(x === 36.295684 && y === -76.224770) {
        console.log("c'est bon")
    }
    else {
        console.log("pas bon")
    }
}

