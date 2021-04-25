
let  userName = prompt("Hello I'm doing a quick survey, so lets start with your name?");
let userAge = prompt('Welcome ' + userName + ' How old are you?');
let userTall = prompt(userAge +' Cool!, How tall are you ' + userName+ '? in (m) please. ');
let userWeight = prompt('How much do you weigh?');



alert('Welcome To My Page Mr/Ms ' + userName + ' :: Your Age is ' + userAge + ' & Your Body Mass Index is ' + (( userWeight) / (userTall * userTall)) );


//document.write('Welcome To My Page Mr/Ms ' + userName + ' Your Age is ' + userAge + ' Your Perfect Weight is ' + userResult);
