// Logical  Operators


// Examples:

/*Logical   Operators
    i. AND  &&
    ii. OR  ||
    iii. NOT !

*/


/*  I have 4 variables 
    values are asigned
     let,
      Rabia has 200 rupies, u = 200;
      Anila has  167 rupies, x = 167;
      Amjad has 120 rupies, y = 120;
      Nasir has 390 rupies, z = 390;

*/

let u =200;
let x =167;
let y =120;
let z =390;


//  i. AND  &&

m = (x > y) && (u < z);

document.write(" (x > y) && (u < z)", m);
document.write("<br>");

// ii. OR  ||

 n = (z > u) && (x > u) || (y <= x);

document.write(" (z > u) && (x > u) || (y <= x)", n);
document.write("<br>");

p = (z < y) || (y > u);

document.write(" (z < y) || (y > u) ", p);
document.write("<br>");


// iii. NOT !

q = !(y <= u);
  
document.write(" !(y <= u) ", q);
document.write("<br>");

r =!(x >z);
document.write(" !(x > z)", r);
document.write("<br>");

s = !(x = z);
document.write(" !(x = z) ", s);
document.write("<br>");