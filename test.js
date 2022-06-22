//mainが終わった後に引数の関数を実行する
/*
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
*/
let test = [
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
let test_2 = test;
let test_3 = test;
for (let i = 0;2>=i;i++){
  for (let s =0;2>=s;s++){
    if (test_2[i][s] == 1){
      console.log("aaa");
    }
    if (test_3[i][s] == 1){
      console.log("bbb");
    }
  }
}