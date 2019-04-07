/* calculator */

//alert("ok");

//페이지가 로드된 다음에 실행됨
let i,j, temp;
var numadd = [];
var num = [];
var c = [];
let result = 0, num_len;
function number(t,check){

   if(check == 3){
      temp = num[num.length -1];
      if(num.length != 0 && temp != '*' && temp != '/' && temp != '%' && temp != '+' && temp != '-'){
         // num의 마지막 글자가 숫자이면
         numadd[0] = temp;
         num.pop();
      }
      c.push(parseInt(t));
      numadd.push(t);
   }
   else if(check == 2){
      if(numadd.length != 0) num_com();
      num.push(t);
      c.push(' ');
      c.push(t);
      c.push(' '); 
   }
   else if(check == 1){
      if(c.length == 1){
         c = [];
         num = [];
         numadd = [];
      }
      else if(numadd.length == 0 && c.length != 0){
         if(c[c.length -1] == " "){
            c.pop();
            c.pop();
            c.pop();
            num.pop();
         }
         else{
            temp = parseInt(num[num.length -1]*0.1);
            if(temp == 0) num.pop();
            else {
               numadd[0] = temp;
               num.pop();
            }
            c.pop();
         }
      }
      else if(c.length != 0){
         if(numadd.length == 1 && numadd[0] < 10) numadd = [];
         else numadd.pop();
         c.pop();
      }
   }
   else if(check == 0){
      if(numadd.length != 0) num_com();
      if(num.length != 0){
         compute();
         c = [];
         c[0] = num[0];
      }
   }

   if( c.length == 0 ) document.querySelector(".back").innerHTML=0;
   else document.querySelector(".back").innerHTML=c.join('');
   if(check == 0){
      num = [];
      c = [];
      numadd = [];
   }
}

function num_com(){
   num.push(parseInt(numadd.join('')));
   numadd = [];
}
function compute(){
   num_len = num.length;
   result = 0;
   for(i=1; i<num_len; i=i+2){
      if(num[i] == '*'){
         result = num[i-1]*num[i+1];
         num.splice(i-1,3,result);
         i=i-2;
         num_len = num_len - 2;
      }
      else if(num[i] == '/'){
         result = num[i-1]/num[i+1];
         num.splice(i-1,3,result);
         i=i-2;
         num_len = num_len - 2;
      }
      else if(num[i] == '%'){
         result = num[i-1]%num[i+1];
         num.splice(i-1,3,result);
         i=i-2;
         num_len = num_len - 2;
      }
   }
   for(i=1; i<num_len; i=i+2){
      if(num[i] == '+') result = num[i-1]+num[i+1];
      else if(num[i] == '-') result = num[i-1]-num[i+1];
      num.splice(i-1,3,result);
      i=i-2;
      num_len = num_len - 2;
   }

}