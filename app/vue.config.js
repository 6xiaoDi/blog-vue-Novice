
module.exports = {

    devServer: {
        proxy: {
            '/items': {
                target: 'http://localhost:7777'
            }
        }
    }

};