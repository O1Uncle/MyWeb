var vi;
function init() {
    vi = document.getElementById("ps"); // 初始化函数
    vi.addEventListener("ended", function(){
        alert("播放结束");
    }, true);
}
function kjk() {
    var time = vi.currentTime;
    vi.currentTime = time + 60;
}
function play() {
    vi.play();
}
function pause() {
    vi.pause();
}
function advan() {  // 加速的
    vi.playbackRate *= 1.5;

}

function replay() {
    vi.load();
}


