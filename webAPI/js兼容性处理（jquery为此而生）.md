由于浏览器对js 的事件支持情况不一，一些浏览器支持，一些不支持
那么 我们写一套代码不能适用于所有浏览器，那么怎么解决这一个问题呢？
    1.手写封装代码
        element.事件名称  返回boolean值，接下来，手动写处理方法
    2.使用别人写好的扩展 jquery等js
        引入js文件，调用制定好的事件

事件源
    处理
        e || window.event
        Event.target || Event.srcElement进行赋值操作
    Event.target
    Event.srcElement
页面位置
    处理
