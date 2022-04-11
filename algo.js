
const calChar= (ch)=>{

    
    let countChar=0;


    for (i=0;i<ch.length;i++){
        
     

    
        if("a"<ch[i] && ch[i]<"z" || "A"<ch[i] && ch[i]<"Z"){
            
            countChar=countChar+1;
        }
      
     
        
        
    }
     
     
 console.log(`The number of the characters is : ${countChar}`);
 

 
}

calChar("hello evrey body.")



    





const calNumVol= (ch)=>{


 
    let countVol=0;
    
    
   
    for (i=0;i<ch.length;i++){
        
    
        if(ch[i].toLowerCase() =="a" || ch[i].toLowerCase() =="y"|| ch[i].toLowerCase() =="z" || ch[i].toLowerCase() =="e"||  ch[i].toLowerCase() =="y" ||
        
            ch[i].toLowerCase() =="o" || ch[i].toLowerCase() =="i"){
            
            countVol=countVol+1;
            
        }   
        
        
    }
     

 
 console.log(`The number of the vowels is : ${countVol}`);


 
}









calNumVol("hello evrey body.")



const calNumWord= (ch)=>{

 
    let countWord=0;
    
    
    countWord=ch.split(" ").length-1;
    
    console.log(`The number of the word is : ${countWord}`);
    


 
}

calNumWord("hello evrey body.")
