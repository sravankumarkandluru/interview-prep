 /* a = [1,2,3,4,5,6,7,8,9,10];
    b = []; */
 function pair(a,b){
    for(let i = 0; i < a.length; i++){
        for(let j = 1; j < a.length; j++){
            if(i + j == 10){
                b.push(i,j);
                break;    
            }
        }   
    }
    console.log(b);
}
pair([3,4,5,6,7,2,3],[]);  

// duplicate numbers

/* c = [1,2,1,3,4,3,5,7,5];
d = [];

function duplicate(){
    d.push(c[0]);
    for(let i = 1;i<c.length;i++){
        for(j = 0; j < d.length; j++){
          if(c[i] !== d[j]){
              console.log(c[i],d[j]);
              d.push(c[i])
              break;
          }
        }
    }
    //console.log(d);
}
duplicate(); */


// even number
/* a = [1,2,3,4,5,6,7,8,9];
b = [];
function even(){
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            b.push(a[i])
        }
    }
    console.log(b);
}
even(); */

/* a = ['12zbc',1,2,'c',5,'d'];
b = [];
c = [];
function pick(){
    for(let i = 0; i < a.length; i++){
        if(typeof(a[i]) == String){
            b.push(a[i])
        }
        else{
            c.push(a[i])
        }
    }
    console.log('string:' , b);
    console.log('number:' , c);
}
pick(); */



