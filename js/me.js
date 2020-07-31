// Vue.use 使用，会执行插件函数，同时把Vue当作参数传过去。
function me(_Vue) {

    _Vue.prototype.getName = function() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    }
}