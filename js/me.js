// Vue.use 使用，会执行插件函数，同时把Vue当作参数传过去。
function me(_Vue) {

    _Vue.prototype.getName = function() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    }

    // mixin 接受一个对象，该对象会被注入到 vue 实例配置中
    Vue.mixin({
        created() {
            console.log('me-created');
        }
    });

}