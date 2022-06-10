let my_text = "";
//write_text()
window.onload = function(){
    const canvas_1 = document.getElementById("canvas_2");
    const ctx_1 = canvas.getContext('2d');
    console.log(my_turn);
    ctx_1.fillStyle = "#0ff";
    ctx_1.font = "50px cursive";
    send_text()
    ctx_1.fillText(my_text, 150, 40);
  }
function send_text(){
    console.log("send"+my_turn);
    if (my_turn == 1){
        my_text = "you ○";
        console.log(my_text);
    }else if (my_turn == 2){
        my_text = "you ×";
        console.log(my_text);
    }
}