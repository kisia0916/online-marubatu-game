//mainが終わった後に引数の関数を実行する
function main(sub){
    console.log("aa");
    sub();
}
function sub_2(){
    console.log("bbb")
}
main(function(){
    sub_2()
})
const d1 = new Date();
while (true) {
  const d2 = new Date();
  if (d2 - d1 > 2000) {
    break;
  }
}
console.log("sleep");