// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
	var clone = src;
    //对于Date
    if (src instanceof Date){
    	clone = new Date(src.getDate());
    	return clone;
    }
    //对于数组
    if (src instanceof Array){
    	clone = [];
    	for (var i in src){
    		clone[i] = arguments.callee(src[i]);
    	}
    	return clone;
    }
    //对于对象
    if (src instanceof Object){
    	clone = {};
    	for (var i in src){
    		clone[i] = arguments.callee(src[i]);
    	}
    	return clone;
    }
    //对于其他
    return clone;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var result = [];
    var obj = {};

    if (Object.prototype.toString.call(arr) !== "[object Array]") {
        return [];
    }

    if (arr.length <= 1) {
       return arr;
    }

    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
            result.push(arr[i]);
        }
    }
    console.log(obj)
    return result;
}
// 使用示例
var a = [1,3,5,7,6,7];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for (var i = 0;i < arr.length; i++){
    	fn(arr[i],i)
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    var name = element.className.match(/\S+/g) || [];
    var valid = name.indexOf(newClassName);
    if (valid = -1) {
    	element.className = trim(element.className + " " + newClassName);
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var name = element.calssName.match(/\S+/g) || [];
    var valid = name.indexOf(oldClassName);
    if (valid != -1) {
    	element.className = trim(element.className.replace(oldClassName,""));
    }
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode === siblingNode.parentNode;
}
// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var x = 0;
    var y = 0;
    var current = element;
    while (current !== null) {
    	x += current.offsetLeft;
    	y += current.offsetTop;
    	current = current.offsetParent;
    }
    return {
    	x: x,
    	y: y
    };

}
// 实现一个简单的Query
function $(selector) {
	var sele = selector.split(" ");
	var ele = document;

	for (var i = 0 len = sele.length; i<len; i++) {
		
		switch (sele[i][0]) {
			case '#':
				ele = ele.getElementById(sele[i].slice(1));
				break;
			case '.':
				ele = ele.getElementsByClassName(sele[i].slice(1))[0];
				break;
			case '[':
				var valueloc = sele[i].indexOf('=');
				var temp = sele.getElementByTagName("*");

				if (valueloc !== -1) {
					var key = sele[i].substring(1,valueloc);
					var value = sele[i].substring(valueloc+1,sele[i].length-1);
					for (var j = 0 ; j < temp.length; j++) {
						if (temp[j][key] === value ){
							ele = temp[j];
							break;
						}
					}
				}
				else {
					var key = sele[i].substring(1, sele[i].length - 1);
					for (var j = 0; j < temp.length; j++) {
						if (temp[j][key]){
							ele = temp[j];
							break;
						}
					}
				}
				break;
			default: 
				ele = ele.getElementBytagName(sele[i])
				break;	
		}
	}
	if (!ele){
		ele = null;
	}
	return ele;
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    element.addEventListener(event,listener);
}

// 例如：
function clicklistener(event) {
    ...
}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    element.removeEventListener(event,listener);
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    element.addEventListener('click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    element.addEventListener('keydown',function(event){
    	event = event || window.event;
    	var keyCode = event.which || event.keyCode;
    	if (keyCode = 13){
    		listener.call(element,event);
    	}
    })
}
// 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.enter = addEnterEvent;

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    // your implement
    element.addEventListener(eventName,function(event){
    	event = event || window.event;
    	var target = event.target || event.srcElement;

    	if (target && target.tagName.toLowerCase() === tag){
    		listener.call(target,event);
    	}
    },false);
}

$.delegate = delegateEvent;

// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "click", clickHandle);
