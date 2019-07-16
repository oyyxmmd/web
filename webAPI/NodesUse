本文目录：
 元素获取、元素self修改、元素内容修改几种方式的优缺点
1.名词概念
    什么是API？ 应用编程接口
    API组成：ECMAscript 、 BOM 、 DOM --简单的理解由规定的语法、浏览器对象以及文档对象
    js动作：事件（Event）、事件源、动作
DOM文档对象：即将html文档看作树形结构的对象，方便我们的操作。
tips：文档对象是储存在内存的
    
2.元素获取
    问题：几种获取方法的类型是否一致？ 不一致，有单个、数组、还有文档节点的获取方式（Id，TagName，ClassName,智能的querySelector / all<IE8>)
    节点树:
    理解--》
    父子关系:
    parentNode, childNode, firstChild, lastChild
     
    兄弟关系:
    previousSibling, nextSibling
     
    元素树:
    父子关系:
    parentElement, children, firstElementChild, lastElementChild
     
    兄弟关系:
    previousElementSibling, nextElementSibling
 
 3.元素的修改
    添加元素：找到父节点/元素  .appendChild();
    插入元素：找到父节点/元素  .insertBefore(newNode,refrenceNode or nextSibling);不同的是在指定node之前插入
    删除元素：找到父节点/元素  .removeChild();
    修改元素

4.元素内容的修改（插入子node的方法对比）
    问题： innerHTML 和 innerText 属性的不同点？ tips 纯文本和node解析，后者效率更高，纯文本考虑后者
    tips：
        需要大量重复（for while）插入内容时  考虑使用 Arry 存储代替String拼接，因为前者效率更高（创建对象）
        需要修改新插入node的属性时用哪个方法合适？可以用 Pnode.creatElement（),因为该对象是直接创建于内存中（或者是实时的，我们可以随时调用并且改变他的属性）
    提供了大量便利，innerHTML更适合不需要进行属性改变、设置的情况。
