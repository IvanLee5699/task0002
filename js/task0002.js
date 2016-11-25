// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if (arr instanceof Array) {
    	return true;
    }
    return false;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if(typeof fn == "function"){return true;}
    return false;
}

var arr = ["sd","sda"]
var fn = function(){

}
console.log(isFunction(fn));
console.log(isArray(arr));
console.log(typeof arr);
