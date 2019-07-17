var btn1 = document.getElementById('btn');

// btn1.addEventListener('click', function () {
//     alert('i am second Event!');
// });
btn1.onclick = function () {
    alert('i am onclick Event!');
};
btn1.addEventListener('click', function () {
    alert('i am first Event!');
});
var btn2 = document.getElementById('btn2');

// 测试网页点击文字
var arr = ['爱过','富强','民主','和谐'];
var i = 0;
document.addEventListener('click',function(){
   console.log(arr[i]);
    i++;
    if(i===arr.length){
        i = 0;
    }
});