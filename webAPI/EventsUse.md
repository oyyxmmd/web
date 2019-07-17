添加事件、 修改修改事件 、 删除事件

问题:
    说一说常用两种事件添加方法的不同 ？ 单个 和 多个 的区别

事件开头（onClick、onMose、onKeydown......等等）
    1   element.事件名称 = func（）{}   
    2   element.addEvenListener(’事件名' , func)
鼠标位置获取
    clientX，clientY 坐标
    pageX，pageY坐标（有兼容性问题，IE9以上） 
        pageX = clientX + scrollX
        scrollX 兼容性： document.body.scrollX || document.documentElement.scrollX
事件冒泡和默认事件的处理
    取消默认事件：
        return false;最简单的方法
        Event.preventDefault();
        Event.returnValue = false;
    取消冒泡（事件传播）：
        tips：设置的事件要和阻止的事件名称相同！！！！
        e.stopPropagation();
        e.cancelBubble = true;  //IE old
键盘事件
    keyDown、keyUp
    获取键盘输入的内容 e.keyCode 获取ascill码判断