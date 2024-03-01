
const p1Tag =document.querySelector("#p1");
const p2Tag =document.querySelector("#p2");
const p3Tag =document.querySelector("#p3");
const p4Tag =document.querySelector("#p4");


 
let number =0; 
const imgshow=()=>{
    setTimeout(()=>{
        p1Tag.style.display="none";
        p2Tag.style.display="inline";
        number+=1;
        setTimeout(()=>{
            p2Tag.style.display="none";
            p3Tag.style.display="inline";
            setTimeout(()=>{
                p3Tag.style.display="none";
                p4Tag.style.display="inline";
             setTimeout(()=>{
                    p4Tag.style.display="none";
                    p1Tag.style.display="inline";
                    number+=1;
                    if(number===2){
                        number=0;
                        imgshow();
                    }
                },3000)//p4
            },3000)//p3
           },3000)//p2
       },3000)//p1
    }  
imgshow();  


