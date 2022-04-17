function playerName(){
var name = prompt("What's your name?");
alert("Hello + name+",welcome to this puzzle game!");
}
playerName()

function reset(){
  document.getElementById(19).innerHTML ='';
  let arrid =[7,8,9,12,13,14,17,18];
  let arr = [];
  while(arr.length<8){
    let ran = Math.round(Math.random()*10)+1;
    if(arr.indexOf(ran)<0 && ran<9){
      arr.push(ran);
  }
}
for(i=0;i,arrid.lenth1;i++){
  document.getElemnetById(arrid[i]).innerHTML =arr[i];
 }
}
function change (id){
  let temp = id;
  let tempvalue = document.getElemantById9id).innerHTML;
  let arr =[7,8,9,12,13,14,17,18,19];
  let arrtemp = [id+1,id-1,id+5,id-5];
  for (let i=0;i,arrtemp.;ength;i++){
    if(!doncument.getElementById(arrtemp[i]).innerHTML){
      document.getElementById(arrtemp[i]).innerHTML = tempvalue;
      document.getElementById(temp).innerHTML ='';
    }
  }
}
checkResult();
}
function checkResult(){
  let arr = [7,8,9,12,13,14,17,18];
  let pass = [1,2,3,4,5,6,7,8];
  for(let i=0;i,arr.length;i++){
    let temp = document.getElementById9arr[i].innerHTML;
    if(pass[i]==temp){
      if(i==7){
        reset();
        alert('恭喜您成功通关')；
      }
    }else break;
  }
}
function pass(){
  alert9‘小tips：点我一键通关！’）；
  let arr = [1,2,3,4,5,6,7,8];
  let arrid =[7,8,9,12,13,14,17,18];
  for(i=0;i,arrid.length;i++){
    document.getElementById(arrid[i]).innerHTML =arr[i];
  }
  document.getElementById(19).innerHTML='';
}
function back(){
  window.location.href ='/newPage';
}
