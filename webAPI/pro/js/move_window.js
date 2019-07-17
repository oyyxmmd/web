// 鼠标拖动标题栏 移动div位置
/*
1.当鼠标按下时 添加移动事件
2.鼠标放下时 删除移动事件
3.移动事件:
    获取鼠标页面位置，page / client
    获取鼠标在div的位置
4.x 关闭事件
    取消a标签默认事件
    设置隐藏
*/
// 赋值元素
var boxArr = document.getElementsByTagName('div');
var box = boxArr[0];
var top = boxArr[1];
var bodyd = boxArr[2];
bodyd.onmousedown = function(e){
    e.stopPropagation();
}


var aclose = document.getElementById('close');
var aopen = document.getElementById('open');
// add onmousEvent
top.onmousedown = mouseD;
top.onmouseup = function(e){
    e.stopPropagation();
   top.onmousemove = null;
   e.stopPropagation();
}
function mouseD(e){
    e.stopPropagation();
    console.log('我是top on');

    // 鼠标原来的位置
    var mousex = e.pageX - box.offsetLeft;
    var mousey = e.pageY - box.offsetTop;
    top.onmousemove = function(e){
        e.stopPropagation();
        // 获取鼠标页面位置，page / client
        console.log('我是top move');
        // 鼠标在盒子内的位置 = 页面位置 - 盒子本身位置 
        var mouseinx = e.pageX - mousex;
        var mouseiny = e.pageY - mousey;
        // 赋值给top
        console.log('原来鼠标在盒子的位置',mousex, mousey);
        console.log('现在盒子的位置',mouseinx, mouseiny);
        box.style.left =mouseinx + 'px';
        box.style.top =mouseiny+ 'px';
        console.log('style现在的盒子位置',box.style.left, box.style.top, mousex - mouseinx + 'px');
        console.log('当前鼠标位置',e.pageX,e.pageY);
       
    }
    e.stopPropagation();
}
// add x close Event
aclose.onclick = function(e) {
    console.log('i am hiden click');
    box.className = 'hidden';
    e.stopPropagation();
    return false;
}
aopen.onclick = function (e) {
    console.log('i am open click');
    box.className = 'open box';
    e.stopPropagation();
    return false;
}
console.log('xiaoo is running');


// move event

