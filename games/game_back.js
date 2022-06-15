history.pushState('./game','./game','./game');
window.addEventListener('popstate',function (){
    //# ２回目以降のpushState
    history.pushState('./game','./game','./game');
    history.go(1);
});