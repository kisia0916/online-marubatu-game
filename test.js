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