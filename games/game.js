
let socket_1 = io();


const canvas = document.getElementById('canvas');
//const canvas_2 = document.getElementById('canvas_2');
const ctx = canvas.getContext('2d');
//const ctx_2 = canvas_2.getContext('1d');
document.body.style.overflow = "hidden";
canvas.style.textAlign = "center";
let can_width = '600';
let can_heght = '400';
let moouse_x,moouse_y;
let turn = 1;
let test_counter = 0;
let j_drow = 0;
let turn_change_counter = 0;
let mouse_click = 0;
let mouse_list_x;
let mouse_list_y;
let turn_counter = 0;
let my_turn = window.sessionStorage.getItem(['key4']);
let game_stage = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
socket_1.on("server_turn",(turn_1,id)=>{
    if (window.sessionStorage.getItem(['k2']) == id){
        //turn = turn_1;
    }
})
/*
socket_1.on("aite_nasi_1",(room)=>{
    if (room == window.sessionStorage.getItem(['k2'])){
        console.log("相手がいません");
        game_stage = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
        window.sessionStorage.setItem(['key3'],game_stage);
        test_list = null;
    }
})
*/
console.log(game_stage);
//write_text();
let ban = 1;
let win_count = 0;
ctx.fillStyle = "#008080";
let fillStyle = ctx.fillStyle;
ctx.rect(0,0,1000,2000);
console.log(turn)
write_line()
ctx.fill();
write_line()
main_program()
socket_1.on("end_koma_server",(mess)=>{
    let count = 0;
    console.log(mess);
    console.log("fffff"+window.sessionStorage.getItem(['k2']));
    if (mess == window.sessionStorage.getItem(['k2'])){
        if (ban == 1){
            //turn_counter = 0;
            //ここにすうびょう松処理を入れる
            //main_program_2()
            //stage_update(game_stage,window.sessionStorage.getItem(['k2']))
            const d1 = new Date();
            while (true) {
            const d2 = new Date();
            if (d2 - d1 > 300) {
                ban = 2;
                turn_counter = 0;
                turn_change_counter = 0;
                write_koma();
                write_turn();
                //turn_counter = 0;
                break;
                }
            }
            write_koma();
            write_turn();
            //駒のデータ送信もここで行う

            //main_program_2()
            //stage_update(game_stage,window.sessionStorage.getItem(['k2']))
            //stage_update(game_stage,window.sessionStorage.getItem(['k2']))
            console.log("dddd"+ban);
            console.log(my_turn);
            count = 1;

        }
        if (ban == 2 && count !=1){
            //main_program_2()
            //stage_update(game_stage,window.sessionStorage.getItem(['k2']))
            const d1 = new Date();
            while (true) {
            const d2 = new Date();
            if (d2 - d1 > 300) {
                
                ban = 1;
                turn_change_counter = 0;
                turn_counter = 0;
                write_koma();
                write_turn();

                //turn_counter = 0;
                break;
                }
            }
            write_koma();
            write_turn();
            //main_program_2()
            //stage_update(game_stage,window.sessionStorage.getItem(['k2']))
            console.log("dddd"+ban);

        }
    }
})
socket_1.on("distract_sesstion",(user)=>{
    if (window.sessionStorage.getItem(['k1']) == user){
        window.sessionStorage.setItem(['k1'],"");
        window.sessionStorage.setItem(['k2'],"");
        window.sessionStorage.setItem(['key3'],"");
        window.sessionStorage.setItem(['key4'],"");
        window.sessionStorage.setItem(['key5'],"");
    }
});
/////////////////////////////////////////////////////
function get_mouse(e){
    let mouse_posi = e.target.getBoundingClientRect();
    moouse_x = e.clientX - mouse_posi.left;
    moouse_y = e.clientY - mouse_posi.top;
    mouse_list_x = Math.abs(Math.floor((moouse_x) / 200));
    mouse_list_y = Math.abs(Math.floor((moouse_y) / 250));
}
let frag = false;
function get_mouse_button_fun(){
    main_program_2();
    if (my_turn == ban && game_stage[mouse_list_y][mouse_list_x] == 0){
        console.log(turn);
        console.log("kkey"+turn)
        mouse_click = 1;
        if (my_turn == 1){
               ///////////////////////////
                //sleep(1000);
                const d1_1 = new Date();
                while (true) {
                const d2_1 = new Date();
                if (d2_1 - d1_1 > 150) {
                    if (turn_counter == 0){
                        turn_counter = 1;
                        game_stage[mouse_list_y][mouse_list_x] = 1;
                        socket_1.emit("turn_change_1",window.sessionStorage.getItem(['k2']));
                        socket_1.emit("stage_update",game_stage,window.sessionStorage.getItem(['k2']));
                        socket_1.emit("test_data_send",window.sessionStorage.getItem(['k2']),ban);
                        write_koma();
                        write_turn();

                        const d1_2 = new Date();
                        while (true) {
                        const d2_2 = new Date();
                        if (d2_2 - d1_2 > 50) {
                            break;
                            }
                        }
                        
                    }
                    break;
                    }
                }
                /*
                const d1_2 = new Date();
                while (true) {
                const d2_2 = new Date();
                if (d2_2 - d1_2 > 50) {
                    break;
                    }
                }
                */
                //turn_counter = 1;

                //main_program_2()///


        }else if (my_turn == 2){
            ///////////////////////////////////////
            //sleep(1000);
            const d1 = new Date();
            while (true) {
            const d2 = new Date();
            if (d2 - d1 > 150) {
                if (turn_counter == 0){
                    turn_counter = 1;
                    game_stage[mouse_list_y][mouse_list_x] = 2;
                    socket_1.emit("turn_change_1",window.sessionStorage.getItem(['k2']));
                    socket_1.emit("stage_update",game_stage,window.sessionStorage.getItem(['k2']));
                    socket_1.emit("test_data_send",window.sessionStorage.getItem(['k2']),ban);
                    write_koma();
                    write_turn();

                    const d1_3 = new Date();
                    while (true) {
                    const d2_3 = new Date();
                    if (d2_3 - d1_3 > 50) {
                        break;
                        }
                    }
                    
                }
                break;
                }
            }
            /*
            const d1_3 = new Date();
            while (true) {
            const d2_3 = new Date();
            if (d2_3 - d1_3 > 50) {
                break;
                }
            }
            */
            //turn_counter = 1
            
                    //game_stage[mouse_list_y][mouse_list_x] = 1;
                
        }
        write_koma()
        window.sessionStorage.setItem(['key3'],game_stage);
        socket_1.emit("test_data_send",window.sessionStorage.getItem(['k2']),ban);
        //console.log("stage"+window.sessionStorage.getItem(['key3']))
        //console.log(game_stage)
        socket_1.emit("stage_update",game_stage,window.sessionStorage.getItem(['k2']));
        //Jatch_win()
        //setTimeout(3000);
    }

}
function maru_list(){

    game_stage[mouse_list_y][mouse_list_x] = 1;
}
function batu_list(){

    game_stage[mouse_list_y][mouse_list_x] = 2;
}
function Jatch_drwo(){
    if (game_stage[0][0] !=0&&game_stage[0][1] !=0&&game_stage[0][2] !=0&&game_stage[1][0] !=0&&game_stage[1][1] !=0&&game_stage[1][2] !=0&&game_stage[2][0] !=0&&game_stage[2][1] !=0&&game_stage[2][2] !=0){
        win_count = 1;
        alert_log_hikiwake();
    }
 }
function Jatch_win(){
    let drwo_count = 0;
    for (let i = 0;2>=i;i++){
        for (let s = 0;2>=s;s++){
            /*
            if (game_stage[i][s] !=0){
                test_counter +=1;
                if (test_counter >=9){
                    console.log(test_counter);
                    alert_log_hikiwake()
                    console.log("hiki");
                    win_count=1;
                }
            }
            */
            if (game_stage[i][s] != 0){
                drwo_count +=1;
                if (drwo_count >=9){
                    write_koma()
                    alert_log_hikiwake()
                    win_count=1;
                }
            }
            if (s == 1){
                if (game_stage[i][s] == 1 && game_stage[i][s+1] == 1 && game_stage[i][s-1] == 1){
                    if (my_turn == 1){
                        //write_koma()
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==2){
                        write_koma()
                        //write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
                if (game_stage[i][s] == 2 && game_stage[i][s+1] == 2 && game_stage[i][s-1] == 2){
                    if (my_turn == 2){
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==1){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
            }
            if (i == 1){
                if (game_stage[i][s] == 1 && game_stage[i+1][s] == 1 && game_stage[i-1][s] == 1){
                    if (my_turn == 1){
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==2){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
                if (game_stage[i][s] == 2 && game_stage[i+1][s] == 2 && game_stage[i-1][s] == 2){
                    if (my_turn == 2){
                         write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==1){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
            }
            if (i == 1){
                if (game_stage[i-1][s-1] == 1 && game_stage[i][s] == 1 && game_stage[i+1][s+1] == 1){
                    if (my_turn == 1){
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==2){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
                if (game_stage[i-1][s-1] == 2 && game_stage[i][s] == 2 && game_stage[i+1][s+1] == 2){
                    if (my_turn == 2){
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==1){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
            }
            if (i == 1){
                if (game_stage[i+1][s-1] == 1 && game_stage[i][s] == 1 && game_stage[i-1][s+1] == 1){
                    if (my_turn == 1){
                        write_koma()
                        alert_log_win()
                        win_count =1;
                    }
                    if(my_turn ==2){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }
                if (game_stage[i+1][s-1] == 2 && game_stage[i][s] == 2 && game_stage[i-1][s+1] == 2){
                    if (my_turn == 2){
                        write_koma()
                        alert_log_win()

                        win_count =1;
                    }
                    if(my_turn ==1){
                        write_koma()
                        alert_log_lose()
                        win_count =1;
                    }
                }

            }
        }
    }
}
function up_button(){
    mouse_click = 0;

}
function alert_log_win(){
    //write_koma()
    write_koma()
    if (!alert('you win')) {
        write_koma()
        window.sessionStorage.setItem(['k1'],"");
        window.sessionStorage.setItem(['k2'],"");
        window.sessionStorage.setItem(['key3'],"");
        window.sessionStorage.setItem(['key4'],"");
        window.sessionStorage.setItem(['key5'],"");
        location.href = "/";
    }
}
function alert_log_lose(){
    write_koma()

    if (!alert('you lose')) {
        write_koma()
        window.sessionStorage.setItem(['k1'],"");
        window.sessionStorage.setItem(['k2'],"");
        window.sessionStorage.setItem(['key3'],"");
        window.sessionStorage.setItem(['key4'],"");
        window.sessionStorage.setItem(['key5'],"");
        location.href = "/";
    }
}
function alert_log_hikiwake(){
    //write_koma()
    write_koma()
    if (!alert('draw')) {
        write_koma()
        window.sessionStorage.setItem(['k1'],"");
        window.sessionStorage.setItem(['k2'],"");
        window.sessionStorage.setItem(['key3'],"");
        window.sessionStorage.setItem(['key4'],"");
        window.sessionStorage.setItem(['key5'],"");
        location.href = "/";
    }
}
"test_data_send"
function write_koma(){
    ctx.beginPath() ;
    //ctx.strokeStyle = "purple" ;
    for (let s = 0;2 >= s;s++){
        for (let i =0;2 >=i;i++){
            //console.log(game_stage[s][i]);
            if (game_stage[s][i] == 1){
                ctx.beginPath();
                ctx.strokeStyle = "#FFFFFF" ;
                //ctx.arc(mouse_list_x*200-100,mouse_list_y*200-100,80,Math.PI*2,true);
                //ctx.arc(100,100,50,2*Math.PI,false);
                ctx.arc(i*200+100,s*200+100+54,73,2*Math.PI,false);
                ctx.stroke() ;
            }
            if (game_stage[s][i] == 2){
                ctx.beginPath();
                ctx.strokeStyle = "#FFFFF";
                ctx.moveTo(i*200+25,s*200+85); 
                ctx.lineTo(i*200+175,s*200+220);
                ctx.moveTo(i*200+175,s*200+85); 
                ctx.lineTo(i*200+25,s*200+220);
                ctx.stroke() ;
            }
        }
    }
}
function write_koma_2(sub){
    ctx.beginPath() ;
    //ctx.strokeStyle = "purple" ;
    for (let s = 0;2 >= s;s++){
        for (let i =0;2 >=i;i++){
            //console.log(game_stage[s][i]);
            if (game_stage[s][i] == 1){
                ctx.beginPath();
                ctx.strokeStyle = "#FFFFFF" ;
                //ctx.arc(mouse_list_x*200-100,mouse_list_y*200-100,80,Math.PI*2,true);
                //ctx.arc(100,100,50,2*Math.PI,false);
                ctx.arc(i*200+100,s*200+100+54,73,2*Math.PI,false);
                ctx.stroke() ;
                
            }
            if (game_stage[s][i] == 2){
                ctx.beginPath();
                ctx.strokeStyle = "#FFFFF";
                ctx.moveTo(i*200+25,s*200+85); 
                ctx.lineTo(i*200+175,s*200+220);
                ctx.moveTo(i*200+175,s*200+85); 
                ctx.lineTo(i*200+25,s*200+220);
                ctx.stroke() ;
                
            }
        }
    }
    sub();
}
function main_program(){
    canvas.addEventListener("mousemove",(e)=>{
        get_mouse(e);
    });
    canvas.addEventListener('click',get_mouse_button_fun);
    canvas.addEventListener('mouseup',up_button)

}
let text = "";
function write_turn(){
    //console.log(my_turn);
    if (ban == my_turn && my_turn == 1){
        ctx.fillStyle = "#0ff";
        ctx.font = "50px cursive";
        ctx.fillText("turn ○", 360, 40);
    }else if (ban == my_turn && my_turn == 2){
        ctx.fillStyle = "#0ff";
        ctx.font = "50px cursive";
        ctx.fillText("turn ×", 360, 38);
    }else if (ban != my_turn){
        ctx.fillStyle="#333333";
        ctx.fillRect(360, 0.5, 200, 49);
    }

}
setInterval("main_program_2()",100);
function main_program_2(){
    //write_koma()
    if (win_count !=1){
        //Jatch_drwo();
        write_koma_2(function(){
            Jatch_win()
        })


    }
    write_turn();
    let test_list_2 = [[0],[0],[0]];
    turn = window.sessionStorage.getItem(['key5']);

    if (window.sessionStorage.getItem(['key3'])){
        //console.log("aaaa");
        let test_list;
        window.sessionStorage.setItem(['k100'],game_stage);
        let brfore_stage = window.sessionStorage.getItem(['k100']);
        test_list = window.sessionStorage.getItem(['key3']);//セッションに入ったやつは配列じゃなくなるから変換が必要
        let c1 =  test_list.substring(0,1);
        let c2 = test_list.substring(2,3);
        let c3 = test_list.substring(4,5);
        let c4 = test_list.substring(6,7);
        let c5 = test_list.substring(8,9);
        let c6 = test_list.substring(10,11);
        let c7 = test_list.substring(12,13); 
        let c8 = test_list.substring(14,15); 
        let c9 = test_list.substring(16,17); 
        //let c3 = test_list.substr(,18);
        game_stage[0][0] = Number(c1);
        game_stage[0][1] = Number(c2);
        game_stage[0][2] = Number(c3);
        game_stage[1][0] = Number(c4);
        game_stage[1][1] = Number(c5);
        game_stage[1][2] = Number(c6);
        game_stage[2][0] = Number(c7);
        game_stage[2][1] = Number(c8);
        game_stage[2][2] = Number(c9);
        /*
        console.log(c1);
        console.log(c2);
        console.log(c3);
        console.log(c4);
        console.log(c5);
        console.log(c6);
        console.log(c7);
        console.log(c8);
        console.log(c9);
        */
        //console.log(game_stage);
        window.sessionStorage.setItem(['k90'],game_stage);
        let after_stage = window.sessionStorage.getItem(['k90']);
        write_koma()
        if (window.sessionStorage.getItem(['k90']) != window.sessionStorage.getItem(['k100'])){
            let koma_counter_1 = 0;
            let koma_counter_2 = 0;
            console.log("aaaaaaa");
            console.log(brfore_stage);
            console.log(after_stage)
                for (let s =0;16>=s;s++){
                  if (brfore_stage[s] == 1 || brfore_stage[s] == 2){
                    console.log("aaa");
                    koma_counter_1 = koma_counter_1 +1;
                  }
                  if (after_stage[s] == 1 || after_stage[s] == 2){
                    console.log("bbb");
                    koma_counter_2 = koma_counter_2 +1;
                  }
                }
                console.log("ccccccccccccccccccccccc"+koma_counter_1);
                console.log("vvvvvvvvvvvvvvvv"+koma_counter_2);
                if (koma_counter_2>koma_counter_1){
                    if (turn_change_counter == 0){
                        socket_1.emit("end_koma",window.sessionStorage.getItem(['k2']));
                        window.sessionStorage.setItem(['k90'],"");
                        window.sessionStorage.setItem(['k100'],"");
                        turn_change_counter = 1;
                    }
                }

        }
            
    }
}
function write_line(){
    ctx.strokeStyle = "#05a6a6";
    ctx.lineCap = "round"
    ctx.lineWidth = 20;
    ctx.beginPath();     // 1.Pathで描画を開始する

    ///////
    ctx.moveTo(200,60); 
    ctx.lineTo(200,660);
    ctx.moveTo(400,60); 
    ctx.lineTo(400,660);
    ctx.moveTo(0,260); 
    ctx.lineTo(600,260);
    ctx.moveTo(0,450); 
    ctx.lineTo(600,450);
    ctx.stroke();     
}