// bmpgl.js
export function BMPGL() {
    return new Promise(function (resolve, reject) {
        window.init = function () {
            // eslint-disable-next-line
            window.BMap = window.BMapGL
            resolve(window.BMapGL)
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=9ltNyQVyzhRxsllkcbjzrCyUQ15rWXqw&callback=init`
        script.onerror = reject
        document.head.appendChild(script)
    })
}
