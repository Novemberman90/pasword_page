const forma_block = document.querySelector('div');
forma_block.classList.add('ps-block');

const forma = document.querySelector('form');
forma.classList.add('forma');

const indicator = document.getElementById('check-block');
const pass = document.getElementById('pass');

const indicator1 = document.querySelector('#check-block1');
const indicator2 = document.querySelector('#check-block2');
const indicator3 = document.querySelector('#check-block3');

const BTN = document.querySelector('#btn').addEventListener('click', checkBNT);


function checkBNT(){
     const LOGIN = document.querySelector('#log').value;
     console.log(LOGIN);
     pass.value;
     console.log(pass.value);
};


/* password area */

const LOWECASE = "qwertyuiopasdfghjklzxcvbnm";
const UPERCASE = "QWERTYUIOPASDFGHJKLZXCVBNM";
const NUMBERS = "123456789";
const SPECIAL = "!@#$%^&*()_-+=[]{},.;:*";

pass.addEventListener('keyup', function(event) {
    let pass_test_val = pass.value;

    let lower = false;
    let up = false;
    let numb = false;
    let s = false;

    for (let i = 0; i < pass_test_val.length; i++){
        if (!lower && LOWECASE.indexOf(pass_test_val[i]) != -1 ) {
            lower = true
        } else if (!up && UPERCASE.indexOf(pass_test_val[i]) != -1 ) {
            up = true
        } else if (!numb && NUMBERS.indexOf(pass_test_val[i]) != -1 ) {
            numb = true
        } else if (!s && SPECIAL.indexOf(pass_test_val[i]) != -1 ) {
            s = true
        }
    }

let rating = 0;
if(lower) rating++;
if(up) rating++;
if(numb) rating++;
if(s) rating++;

if(pass_test_val.length < 1 && rating < 1) {
   // indicator.style.width = "10%";
   indicator1.classList.add('_grey');
    indicator2.classList.add('_grey');
    indicator3.classList.add('_grey');
    

} else if (pass_test_val.length < 6 && rating < 3) {
     indicator1.classList.remove('_grey');
    indicator2.classList.remove('_grey');
    indicator3.classList.remove('_grey');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');

    indicator1.classList.add('_red');

}
 else if (pass_test_val.length < 6 && rating >= 3) {
   // indicator.style.width = "50%";
    // indicator.classList.add('_yellow');
    // indicator.classList.remove('_red');
    indicator1.classList.remove('_red');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');

    indicator1.classList.add('_yellow');
    indicator2.classList.add('_yellow');
    //indicator.style.backgroundColor = "#ffff00";

} else if (pass_test_val.length >= 8 && rating < 3) {
   // indicator.style.width = "50%";
    indicator1.classList.remove('_red');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');

    indicator1.classList.add('_yellow');
    indicator2.classList.add('_yellow');
    //indicator.style.backgroundColor = "#ffff00";

} else if (pass_test_val.length >= 8 && rating >= 3) {
   // indicator.style.width = "100%";
    indicator1.classList.remove('_yellow');
    indicator2.classList.remove('_yellow');
    //indicator.classList.remove('_red');
    indicator1.classList.add('_green');
    indicator2.classList.add('_green');
    indicator3.classList.add('_green');
    
   //indicator.style.backgroundColor = "#008000";

} else if (pass_test_val.length >= 6 && rating == 1) {
    //indicator.style.width = "10%";
    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');

    indicator1.classList.remove('_yellow');
    indicator2.classList.remove('_yellow');

    indicator1.classList.add('_red');
   // indicator.style.backgroundColor = "#ff0000";

} else if (pass_test_val.length >= 6 && rating > 1 && rating < 4) {
   // indicator.style.width = "50%";
    indicator1.classList.remove('_red');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');

    indicator1.classList.add('_yellow');
    indicator2.classList.add('_yellow');

   // indicator.classList.remove('_red');
   // indicator.classList.remove('_green');
   //indicator.style.backgroundColor = "#ffff00";

} else if (pass_test_val.length >= 6 &&  rating == 4) {
  //  indicator.style.width = "100%";
  indicator1.classList.remove('_yellow');
  indicator2.classList.remove('_yellow');

    //indicator1.classList.remove('_red')
    indicator1.classList.add('_green');
    indicator2.classList.add('_green');
    indicator3.classList.add('_green');
    
   // indicator.style.backgroundColor = "#008000";
} else  {
    indicator1.classList.remove('_red');

    indicator1.classList.remove('_yellow');
    indicator2.classList.remove('_yellow');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');
   
};
   
});


// if (pass_test_val.length === null &&  rating === null )
/*
indicator1.classList.remove('_red');

    indicator1.classList.remove('_yellow');
    indicator2.classList.remove('_yellow');

    indicator1.classList.remove('_green');
    indicator2.classList.remove('_green');
    indicator3.classList.remove('_green');
 */