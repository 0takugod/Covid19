const tcases_url = "https://api.covid19api.com/total/dayone/country/india/status/confirmed";
const tdeath_url = "https://api.covid19api.com/total/dayone/country/india/status/deaths";
const ncases_url = "https://api.covid19api.com/live/country/india/status/confirmed";
const ndeath_url = "https://api.covid19api.com/live/country/india/status/deaths";
async function getApiData(URL){
    let res = await fetch(URL)
    let pokemon = await res.json();

    return pokemon;  
}

window.onload = async function() {
    // getPokemon(1);
    
        let xyz = await cases(tcases_url);
        console.log(xyz);
        
        document.getElementById("tcases").innerText = xyz;
        n =  new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementById("tdate").innerHTML = d + "/" + m + "/" + y;


        let abu = await cases(tdeath_url);
        //console.log(abu);
        document.getElementById("tdeath").innerText = abu;
        let sum=0;

        let jkl = await getApiData(ncases_url);
        for (let i = 0; i < jkl.length; i++) {
            sum=sum+jkl[i].cases;
        }
        let ncase = sum-xyz;
        ncase=ncase.toString();
        document.getElementById("ncase").innerText = ncase;

        let mod = await getApiData(ndeath_url);
        let sum1=0;
        for(let j=0;j < mod.length ;j++){
            sum1=sum1+mod[j].cases;

        }
        let ndeath=sum1-abu;
        document.getElementById("ndeath").innerText = ndeath;




}


async function cases(url){
    let abc = await getApiData(url);
    console.log(abc);
        //console.log(abc);
        let xyz = abc[888].Cases;
        xyz=xyz.toString();
        return xyz;

}