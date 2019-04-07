/* calculator */

//alert("ok");

//페이지가 로드된 다음에 실행됨
let i,j;
var numadd = [];
var num = [];
var c = [];
let result = 0, num_len;
function number(t,check){

   if(check == 3){
      if(c.length == 3){
         if(c[1] == '-'){
            c = [];
            c.push(parseInt(-t));
         }
         else if(c[1] == '+'){
            c = [];
            c.push(t);
         }
      }
      else c.push(t);
   }
   else if(check == 2){
      c.push(' ');
      c.push(t);
      c.push(' '); 
   }
   else if(check == 1){
      if(c.length == 1) c = [];
      else if(c[c.length -1] == ' '){
         c.pop();
         c.pop();
         c.pop();
      }
      else if(c.length != 0) c.pop();
   }
   else if(check == 0){
      if(c.length != 0){
         compute();
         result = num[0];
         c = [];
      }
      else result = 0;
   } 
   if( check == 0 ) document.querySelector(".back").innerHTML=result;
   else if(c.length == 0) document.querySelector(".back").innerHTML=0;
   else document.querySelector(".back").innerHTML=c.join('');
}
function compute(){
   num = [];
   numadd = [];
   for(i=0; i<c.length; i++){
      if(c[i] != ' ') {
         numadd.push(c[i]);
         if(i == c.length - 1) num.push(parseInt(numadd.join('')));
      }
      else{
         num.push(parseInt(numadd.join('')));
         num.push(c[i+1]);
         i=i+2;
         numadd = [];
      }
   }
   
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