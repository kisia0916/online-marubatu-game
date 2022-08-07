const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const session = require('express-session');
const { notEqual } = require("assert");
const url = require("url");
const fs = require("fs");
const { NONAME } = require("dns");
let req_1,res_1;
let counter = 0;
let my_url_1 = "/";
let now_player = [];
let conn_user = {
    users:[],
    user_count:0
};
let game_stage = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
class user_now_data_class{//ここに今のユーザーの状態を入れてユーザーが接続してきたタイミングでコンストラクターにしてリストにまとめる
    constructor(userName,nowUrl,nowStatas){
        this.userName = userName;
        this.nowUrl = nowUrl;
        this.nowStatas = nowStatas;
    }
    get_name(){
        return this.userName;
    }
    get_url(){
        return this.nowUrl;
    }
    get_statas(){
        return this.nowStatas;
    }
    set_url(url){
        this.nowUrl = url;
    }
    set_statas(sta){
        this.nowStatas = sta;
    }
}
let now_user_list = [];
let mat_user = {
    user_list:[],
    user_count:0,
}
class room_clss{
    constructor(id,start_time,statas,player_1,player_2,players,stage,one,two,now_turn){
        this.id = id;
        this.start_time = start_time;
        this.statas = statas;
        this.player_1 = player_1;
        this.player_2 = player_2;
        this.players = players;
        this.stage = stage;
        this.one = one;
        this.two = two;
        this.now_turn = now_turn;
    }
    get_room_id(){
        return this.id;
    }
    get_start_time(){
        return this.start_time;
    }
    get_player_1(){
        return this.player_1;
    }
    get_player_2(){
        return this.player_2;
    }
    get_players(){
        return this.players;
    }
    get_stage(){
        return this.stage;
    }
    get_one(){
        return this.one;
    }
    get_two(){
        return this.two;
    }
    get_now_turn(){
        return this.now_turn
    }
    set_now_turn(turn){
        this.turn = turn;
    }
    update_stage(stage_ban){
        this.stage = stage_ban;
    }
}
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use("/games", express.static("games"));
app.use("/img",express.static("img"));
let room_list = [];
let user_name_1;
let page_count = false;
app.get("/",(req,res)=>{
    //ユーザー接続処理
    console.log("test");
    res.sendFile(__dirname+"/views/index.html")
    console.log("1"+req.session.user);
    console.log("2"+req.session.user)
    console.log("test");
    //console.log("t:"+global_user_id);
    //
    //req.session.user = "";
    //req.session.connection_data = "";
    //
    req_1 = req;
    res_1 = res;
});
io.on("connection",(Socket)=>{
    //接続処理
    let test_name = "";
    let my_url_1 = "/";
    console.log("front"+my_url_1)
    let get_my_url;
    let connection_test = null;
    let global_user_id;
    console.log("ddddddddddddddddd"+req_1.session.connection_data);
    if (req_1.session.connection_data == undefined){
        io.emit("con_my_user","hello_marubatu");
        req_1.session.connection_data = true;
        if (req_1.session.user){
            req_1.session.user = "";
        }
        conn_user.user_count += 1;
        //globalユーザーIDの設定
        if(conn_user.users.indexOf("user"+conn_user.user_count) == -1){
            global_user_id = req_1.session.user = "user"+(conn_user.user_count);//
            console.log(1);
            now_user_list[now_user_list.length] = new user_now_data_class(req_1.session.user,"/",false);
            console.log(now_user_list);
        }else if(conn_user.users.indexOf("user"+conn_user.user_count) >= 0){
            global_user_id = req_1.session.user = "user"+(conn_user.user_count+1);
            console.log(2);
            now_user_list[now_user_list.length] = new user_now_data_class(req_1.session.user,"/",false);
            console.log(now_user_list);
        }
        //
        let main_user = req_1.session.user;
        io.emit("user_name",req_1.session.user);
        let local_user_id = global_user_id;//////////
        console.log("connection");
        console.log(conn_user.users.length);
        conn_user.users[conn_user.users.length] = local_user_id;
        Socket.on("yes_data",(name)=>{
                for(let i=0;now_user_list.length >i;i++){
                    if (now_user_list[i].get_name() == name){
                        now_user_list[i].set_url("/game");///////////
                        console.log("test_url"+now_user_list[i].get_url()+":name"+now_user_list[i].get_name());
                        console.log("gamemem"+now_user_list[i].get_url());//ここでは最後に接続したユーザーのurlの変更しか行われない
                    }
                }
                for (let i = 0;room_list.length >i;i++){
                    if(room_list[i].get_player_1() == name){
                        let p2 = room_list[i].get_player_2();
                        console.log("eeeeee"+p2);
                        for (let i=0;now_user_list.length >i;i++){
                            if (now_user_list[i].get_name() == p2){
                                console.log("test_url"+now_user_list[i].get_url()+":name"+now_user_list[i].get_name());
                                now_user_list[i].nowUrl = "/game";
                            }
                        }
                    }
                }
                /*
                for (let i = 0;room_list.length >i;i++){
                 if(room_list[i].get_player_2() == name){
                     let p2 = room_list[i].get_player_2();
                     console.log("eeeeee"+p2);
                     for (let i=0;now_user_list.length >i;i++){
                         if (now_user_list[i].get_name() == p2){
                            console.log("test_url"+now_user_list[i].get_url()+":name"+now_user_list[i].get_name());
                             now_user_list[i].nowUrl = "/game";
                         }
                     }
                 }
             }
             */
        }) 
        Socket.on("disconnect",()=>{
            let user = null;
            let url = null;
            console.log("name"+local_user_id);
            console.log("tst"+url);
            for (let i = 0;now_user_list.length >i;i++){
                console.log(i);
                if (now_user_list[i].get_name() == local_user_id){
                    user = now_user_list[i].get_name();
                    url = now_user_list[i].get_url();
                    console.log("aa"+url);
                }
            }
            console.log("tst"+url);
            console.log(now_user_list);
            if (url == "/"){
                console.log("uuuuuuuuuu"+my_url_1);
                console.log("ssssssssssssssssssssssssssssssssssssssssss");
                console.log("aaa");
                conn_user.user_count -= 1;
                console.log(local_user_id);
                //切断処理
                console.log("starrrrrrrrrrrrrrrrrrrreeeeeeeeeee");
                for (let i = 0;conn_user.users.length > i;i++){
                        console.log("for:"+conn_user.users[i]);
                        console.log(local_user_id);
                        if (conn_user.users[i] == local_user_id){
                            console.log("i"+i);
                            conn_user.users.splice(i,1);
                        }
                    }
                for (let i = 0;mat_user.user_list.length > i;i++){
                        if (mat_user.user_list[i] == local_user_id){
                            mat_user.user_list.splice(i,1);
                            console.log("liet"+mat_user.user_list);
                            mat_user.user_count -= 1;
                        }
                }
                for (let i = 0;now_user_list.length > i;i++){
                    if (now_user_list[i].get_name() == local_user_id){
                        now_user_list.splice(i,1);
                        console.log(now_user_list);
                    }
                }
                console.log(conn_user.users);
            }else if (url == "/game"){
                //conn_userから削除
                console.log(conn_user.users);
            }
        })
        Socket.on("user_name",(user_name)=>{
            test_name = "";
            test_name = user_name;
            console.log("usettttt"+test_name);
            page_count = true;
            io.emit("redirect_mypage",now_player);
        });
        console.log(conn_user.users);
        //マッチング開始処理
        Socket.on('start_match',(glo_id)=>{
            console.log("start");
            io.emit("start_user",local_user_id);
            console.log(mat_user.user_list.indexOf(local_user_id));
            if (mat_user.user_list.indexOf(local_user_id) == -1){
                mat_user.user_count += 1;
                mat_user.user_list[mat_user.user_list.length] = local_user_id;
                console.log(mat_user.user_list);
                //Socket.emit("run_start",)
                //ルーム作成プログラム
                if (mat_user.user_count >= 2){
                    console.log("test:"+mat_user.user_count);
                    let player_1 = mat_user.user_list[0];
                    let player_2 = mat_user.user_list[1];
                    let players = [player_1,player_2];
                    for (let i = 0;0 >= i;i++){
                        console.log("num"+i);
                        room_list[room_list.length] = new room_clss(room_list.length+1,200,true,player_1,player_2,players,game_stage,1,2,1);
                        console.log("qqqqqqqqqqqqqqqqqq"+room_list[room_list.length-1].get_room_id());
                        io.emit("send_user_id",room_list[room_list.length-1]);
                        io.emit("play_num",room_list[room_list.length-1].get_room_id(),room_list[room_list.length-1].get_player_1(),room_list[room_list.length-1].get_player_2(),room_list[room_list.length-1].get_one(),room_list[room_list.length-1].get_two())
                        mat_user.user_list.splice(0,2);
                        mat_user.user_count -= 2;
                        //let players_1 = room_list[room_list.length].get_players()
                        console.log("room"+room_list[room_list.length-1].get_players());

                        io.emit("success_match",room_list[room_list.length-1].get_players());
                        now_player[now_player.length] = room_list[room_list.length-1].get_player_1();
                        now_player[now_player.length] = room_list[room_list.length-1].get_player_2()
                        
                        console.log("0000000000000"+my_url_1);
                    }"success_match"
                    io.emit("match_user",room_list[room_list.length-1].get_players());
                    req_1.session.myUrl = my_url_1;//この処理は一回しか行われないため、片方にしか反映されない
                    console.log("my_url"+my_url_1);
                    console.log(room_list);
                    console.log(mat_user.user_count);
                    io.emit("matchdata",room_list[room_list.length-1].get_players());
                    /////////
                    //////////////////////////////////
                }
            function get_user_id(){
                let playerList = []//ここにユーザー情報を入れてreturnで/gameに送信する
                playerList[0] = local_user_id;
                playerList[1] = room_list[length-1].get_room_id;
                return playerList;
                }
            }
            //ゲーム開始、フィールドに移動
            Socket.on("user_name",(user_name)=>{
                user_name_1 = user_name;
                console.log("unnkokokokoko"+my_url_1);
            });
            }) 
}
Socket.on("test_match",(data)=>{//なんかここが一回しか実行されてないみたい
    console.log("test_dataaa");
    counter += 1;
    console.log("a"+counter);
    for (let i = 0;now_player.length > i;i++){
        if (data == now_player[i]){
            my_url_1 = "/game";
            console.log("test_dataaa2");
        }
    }
});
let test_name_1;
console.log(global_user_id);
})
let test_user_name_1 = "";
let user_test_name = [];
let res_2 = null
app.get("/game",(req,res)=>{
    res_2 = null;
    res.sendFile(__dirname+"/views/game.html");
    res_2 = res;
});
io.on("connection",(Socket_4)=>{
    let local_user_id;
    io.emit("con_send","test");
    io.emit("con_test","hello");
    Socket_4.on("end_koma",(room_id_90)=>{
        io.emit("end_koma_server",room_id_90);
    })
    Socket_4.on("stage_update",(stage,room)=>{
        ///ここに書

        for (let i= 0;room_list.length > i;i++){
            if (room_list[i].get_room_id() == room){
                io.emit("send_stage",stage,room);
                console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
                //game_stage = stage;
                console.log(stage);
                console.log(room);
                console.log(room_list);
                room_list[i].update_stage(stage);
                //console.log(room_list.get_stage());
                io.emit("stage_update",room_list[i].get_stage(),room);
            }
            
        }
    });
    Socket_4.on("turn_change_1",(room)=>{
        io.emit("test_data_send_2",room);
    })
    /*
    Socket_4.on("change_turn",(turn,room_id)=>{
        console.log("ooooooooooooooooooo")
        for (let i =0;room_list.length >0;i++){
            if (room_list[i].get_room_id() == room_id){
                room_list[i].set_now_turn(turn);
                io.emit("server_turn",turn,room_id);
                console.log("ppppppppppppppppppp");
            }
        }
    })
    */
    /*
    Socket_4.on("change_turn",(turn,id)=>{
        for (let i = 0;room_list.length > 0;i++){
            if (room_list[i].get_room_id() == id){
                room_list[i].set_now_turn(turn);
                io.emit("player_turn",turn,id);
            }
        }
    })
    */
    Socket_4.on("game_page_id",(user_id)=>{
        console.log("aaaaaaaaaaaaaaaaaaaaaaaa"+user_id);
        local_user_id = user_id
        console.log("///////")
        console.log("conn_user:"+conn_user.users);
        console.log("now_user:"+now_player);
        console.log(now_user_list);
        console.log("mat_user:"+mat_user.user_list);
        console.log("///////")
    })
    /*
    Socket_4.on("test_data_send",(room_id,turn_8)=>{
        console.log(room_id);
        console.log(turn_8);
        io.emit("test_data_send_2",room_id,turn_8);
    })
    */
    Socket_4.on("disconnect",()=>{
        Socket_4.emit("distract_sesstion",local_user_id);
        console.log(local_user_id);//ここに/gameの切断処理を描く
        //connuserから削除
        for (let i= 0;conn_user.users.length > i;i++){
            if (conn_user.users[i] == local_user_id){
                conn_user.users.splice(i,1);
                conn_user.user_count -= 1;
            }
        }
        //now_userから削除
        for (let i = 0;now_player.length > i;i++){
            if (now_player[i] == local_user_id){
                now_player.splice(i,1);
            }
        }
        //now_user_listから削除
        for (let i = 0;now_user_list.length > i;i++){
            if (now_user_list[i].get_name() == local_user_id){
                now_user_list.splice(i,1);
            }
        }
        //roomを削除
        for (let i = 0;room_list.length > i;i++){
            if (room_list[i] != undefined){
                if (room_list[i].get_player_1() == local_user_id){
                    io.emit("aite_nasi_1",room_list[i].get_room_id());
                    io.emit("aite_nasi",room_list[i].get_room_id());;
                    room_list.splice(i,1);
                    console.log(room_list);
                    req_1.session.user = "";
                    req_1.session.connection_data = undefined;
                    local_user_id = "";
                }
                if (room_list[i] != undefined){
                    if (room_list[i].get_player_2() == local_user_id){
                        io.emit("aite_nasi_1",room_list[i].get_room_id());
                        io.emit("aite_nasi",room_list[i].get_room_id());
                        room_list.splice(i,1);
                        console.log(room_list);
                        req_1.session.user = "";
                        req_1.session.connection_data = undefined;
                        local_user_id = "";
                    }
                }
            }
        }
    })
})
server.listen(process.env.PORT||3000,()=>{
    console.log("run");
})