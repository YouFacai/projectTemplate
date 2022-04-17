// 节流
export const throttle = function throttle(fn, wait) {
    let timer = null,
        previous = 0;
    return function operate(...args) {
        let now = +new Date(),
            remaining = wait - (now - previous);
        if (remaining < 0) {
            //第一次执行 (立即执行)
            timer = clearTimer(timer);
            fn(args);
            previous = +new Date();
        } else if (timer === null) {
            timer = setTimeout(() => {
                timer = clearTimer(timer);
                previous = +new Date();
                fn(args);
                //用remaining不用wait就是为了弥补第一次
            }, remaining)
        }
    }
}

const clearTimer = function clearTimer(timer) {
    if (timer !== 'null') {
        clearTimeout(timer);
        return null;
    }
    return timer;
}