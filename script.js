const GkDiv = document.querySelector(".gkcontainer")
const DefDiv = document.querySelector(".defcontainer")
const MidDiv = document.querySelector(".midcontainer")
const ForDiv = document.querySelector(".forcontainer")

const players = [
    {name:"Arron Ramsdale",number:1,country:"England",img:"n1.jpg",position:"gk",pinfo:"https://www.arsenal.com/men/players/aaron-ramsdale"},
    {name:"Matt Turner",number:30,country:"United_States",img:"n30.jpg",position:"gk",pinfo:"https://www.arsenal.com/men/players/matt-turner"},
    {name:"Karl Hein",number:31,country:"Estonia",img:"n31.jpg",position:"gk",pinfo:"https://www.arsenal.com/men/players/karl-hein"},
    {name:"Kieran Tierney",number:3,country:"Scotland",img:"n3.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/kieran-tierney"},
    {name:"Ben White ",number:4,country:"England",img:"n4.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/ben-white"},
    {name:"Gabriel Magalhaes",number:6,country:"Brazil",img:"n6.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/gabrielmagalhaes"},
    {name:"William Saliba",number:12,country:"France",img:"n12.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/william-saliba"},
    {name:"Jakub Kiwior",number:15,country:"Poland",img:"n15.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/jakub-kiwior"},
    {name:"Rob Holding",number:16,country:"England",img:"n16.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/rob-holding"},
    {name:"Takehiro Tomiyasu",number:18,country:"Japan",img:"n18.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/takehiro-tomiyasu"},
    {name:"Oleksandr Zinchenko",number:35,country:"Ukraine",img:"n35.jpg",position:"def",pinfo:"https://www.arsenal.com/men/players/oleksandr-zinchenko"},
    {name:"Thomas Partey",number:5,country:"Ghana",img:"n5.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/thomas-partey"},
    {name:"Martin Odegaard ",number:8,country:"Norway",img:"n8.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/martin-odegaard"},
    {name:"Emile Smith Rowe ",number:10,country:"England",img:"n10.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/emile-smith-rowe"},
    {name:"Jorginho",number:20,country:"Italy",img:"n20.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/jorginho"},
    {name:"Fabio Vieira",number:21,country:"Portugal",img:"n21.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/fabio-vieira"},
    {name:"Mohamed Elneny",number:25,country:"Egypt",img:"n25.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/mohamed-elneny"},
    {name:"Granit Xhaka",number:34,country:"Switzerland",img:"n34.jpg",position:"mid",pinfo:"https://www.arsenal.com/men/players/granit-xhaka"},
    {name:"Bukayo Saka",number:7,country:"England",img:"n7.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/bukayo-saka"},
    {name:"Gabriel Jesus",number:9,country:"Brazil",img:"n9.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/gabriel-jesus"},
    {name:"Gabriel Martinelli",number:11,country:"Brazil",img:"n11.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/gabriel-martinelli"},
    {name:"Eddie Nketiah",number:14,country:"England",img:"n14.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/eddie-nketiah"},
    {name:"Leandro Trossard",number:19,country:"Belgium",img:"n19.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/leandro-trossard"},
    {name:"Reiss Nelson",number:24,country:"England",img:"n24.jpg",position:"for",pinfo:"https://www.arsenal.com/men/players/reiss-nelson"},
]


for (let i =0 ; i< players.length;i++){
    const MCard = document.createElement("div");
    MCard.classList.add("card","pdiv")
 MCard.innerHTML = `
        <a href=${players[i].pinfo} style="text-decoration:none">
        <img src="./img/${players[i].img}" class="card-img-top" height="200"/>
        <h2 class="card-title cardh">${players[i].name}</h2>
        <div class="row"><p class="pc"><img src='./img/${players[i].country}.png' width='50' height='30'/>${players[i].country}</p>
        <img src='./img/j${players[i].number}.jpg' class="pj" /></div>
        </a>`
        if(players[i].position == "gk"){
        GkDiv.append(MCard)
        }if(players[i].position == "def"){
        DefDiv.append(MCard)
        }
        if(players[i].position == "mid"){
        MidDiv.append(MCard)
        }
        if(players[i].position == "for"){
         ForDiv.append(MCard)
        }
}