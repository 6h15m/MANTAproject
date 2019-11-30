var mouseX = 0;
    var mouseY = 0; 
 
    function getMousePosition(e){
        var eObj = window.event? window.event : e;
        mouseX = eObj.clientX;
        mouseY = eObj.clientY + document.documentElement.scrollTop;
    }
 
    function moveImg(){
        var m_x = parseInt(document.getElementById('img1').style.left.replace('px', ''));
        var m_y = parseInt(document.getElementById('img1').style.top.replace('px', ''));

        document.getElementById('img1').style.left = Math.round(m_x + ((mouseX - m_x) / 5)) + 'px';
        document.getElementById('img1').style.top = Math.round(m_y + ((mouseY - m_y) / 5)) + 'px';

    }
 
    document.onmousemove = getMousePosition;
    setInterval("moveImg()", 50);

var audio = new Audio('audio/a1.mp3');

function audioplay() {
    alert( '음악을 재생합니다.' );
    audio.play();
};

function goManta(){
    var gogo;
    gogo = confirm('빈첸 소개글 창으로 이동하시겠습니까?');
    if(gogo){
        window.open("manta.html");
    } 
}

