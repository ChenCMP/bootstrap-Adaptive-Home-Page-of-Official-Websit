 function changeImage(){
        // 步骤：
        // 1.0 索引值
        var index = 0 ;
        // 2.0 定义宽度
        // document 文档对象
        // querySelector()   javascript : 基于客户端对象的事件驱动脚本语言；
        // a.调用者 ：document  
        // b.参数 ： 类名 / id名 / 标签名 ；
        // c.返回值： 指定的元素 ； 
        // d.功能：获取页面的元素
        var ele = document.querySelector(".banner");  
        var ul = document.querySelector(".banner-list"); //单一元素
        var circle = document.querySelectorAll(".banner-points li");//获取元素集合
        // 检查代码的方法
        console.log(ele)
        console.log(circle)
        // 获取 jd_banner的宽度
        var width = ele.offsetWidth;
        // 3.0 定时器 （内置的函数） setInterval(a,b) a.匿名函数  b.时间  1000毫秒 = 1秒
        var timer = setInterval(function(){
            // 4.0 索引值 自增一
            index++;
            if(index > 2){
                index = 0;
            }
            // 5.0 设置ul盒子的水平位置
            // style 样式
            ul.style.marginLeft = -(index*width)+ "px";

            // 6.0 设置小圆点跟随轮播
            for(var i = 0 ; i < circle.length ; i++){
                circle[i].className = "";
            }
            // 和索引值对应的点
            circle[index].className = "active";
        },3000);
    }