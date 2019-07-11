onload = function(){
    var container = document.getElementsByClassName('container');
    
    var j =0;
    while(j<container.length){
        // 取出容器
        var divs = container[j].children;
        j++;
        // 内容div赋值

        let i = 0;
        while(i<divs.length){
            divs[i].innerHTML = i;
            divs[i].className = 'bold';
            i++;
        }
    }
    
   

}
// 比翼双飞测试

var addp = function () {
    let bytest = document.getElementById("addtest");
    let button1 = document.getElementById('button');
    bytest.innerHTML = "<p>i am Added<p>" + bytest.innerHTML;

}