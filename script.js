// let tableau = ["yassine","Mohamed","Sofiane"];
// for (let i = 0 ; i < tableau.length; i++){

//     alert("Bonjour"+"" + tableau[i]);
// }

// let age = 1;

// while( age !=60 ){ 

//  if (age<11){
//    console.log("enfant");

// } else if (age<=17) { 
//    console.log("ado");

// } else if (age<=30) {
//    console.log("adultes");
  
// } else if (age<=50) { 
   
//    console.log("maturité");
// } else { 

//  console.log ("fin") 
// }
// age++;

// } 
// function varTest(){
//     for (var index = 0; index < 5; index++) {
//         console.log(index);
//     }
//     console.log(index) 
// }

// varTest();
// function letTest(){
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//      }
//      console.log(i);
// }
// letTest();
let i =  0;
let number = Math.floor(Math.random() *(101-1) );
let userNumber = window.prompt(`trouvé un chiffre ${i} tentatives`, "");
console.log(number);
//inférieur à 5 
while(userNumber != number && i < 5){

     if (userNumber < number){
             alert( "trop basse")
    } else{
              alert("trop haut")
            }
            userNumber = window.prompt(`trouvé un chiffre ${i} tentatives`, "");
            i++ // rajout une chance
}

if(userNumber == number) {
            alert("Bravo !")
        }
          else if (i === 5 ){
    alert("perdu")
}
if (i >4){
    let rejoue = confirm("vous te rejoue");
    if (rejoue == true){

        location.reload();
    }

}