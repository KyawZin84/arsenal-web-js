const Epldiv = document.querySelector(".epldiv")
const Fadiv = document.querySelector(".fadiv")
const Lcdiv = document.querySelector(".leaguecupdiv")
const Shielddiv = document.querySelector(".shielddiv")

const epl = ["1930/1931","1932/1933","1933/1934","1934/35"," 1937/38", "1947/1948", "1952/1953", "1970/1971", "1988/1989", "1990/1991", "1997/1998", "2001/2002", "2003/2004"]
const fa=["1929/1930", "1935/1936", "1949/1950", "1970/1971", "1978/1979", "1992/1993", "1997/1998", "2001/2002", "2002/1003", "2004/2005", "2013/2014", "2014/2015", "2016/2017","2019/2020"]
const shield = ["1930", "1931", "1933", "1934", "1938", "1948", "1953", "1991 (shared)", "1998", "1999", "2002", "2004", "2014", "2015", "2017", "2020"]
const  efl = ["1986/1987", "1992/1993"]

for(let i = 0;i<epl.length;i++){
    const Mdiv = document.createElement("div");
    Mdiv.classList.add("trophydiv","card")
    if(i== 12){
        Mdiv.innerHTML=`
        <img src='./image/eplgold.jpg' class="card-img-top" height="200"/>
        <h3 class="cuph3">${epl[i]}</h3>`
    }else{
    Mdiv.innerHTML=`
    <img src='./image/epl.jpg' class="card-img-top" height="200"/>
    <h3 class="cuph3">${epl[i]}</h3>
    ` }
    Epldiv.append(Mdiv);
}

for(let i = 0;i<fa.length;i++){
    const Mdiv = document.createElement("div");
    Mdiv.classList.add("trophydiv","card")
    Mdiv.innerHTML=`
    <img src='./image/fa.png' class="card-img-top"/>
    <h3 class="cuph3">${fa[i]}</h3>
    `
    Fadiv.append(Mdiv);
}

for(let i = 0;i<efl.length;i++){
    const Mdiv = document.createElement("div");
    Mdiv.classList.add("trophydiv","card")
    Mdiv.innerHTML=`
    <img src='./image/leaguecup.png' class="card-img-top"/>
    <h3 class="cuph3">${efl[i]}</h3>
    `
    Lcdiv.append(Mdiv);
}

for(let i = 0;i<shield.length;i++){
    const Mdiv = document.createElement("div");
    Mdiv.classList.add("trophydiv","card")
    Mdiv.innerHTML=`
    <img src='./image/cs.png' class="card-img-top"/>
    <h3 class="cuph3">${shield[i]}</h3>
    `
    Shielddiv.append(Mdiv);
}