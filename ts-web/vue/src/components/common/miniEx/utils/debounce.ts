/**
 * 防抖：在事件触发后的一段时间内，如果再次触发该事件，则重新计算时间间隔。直到该时间间隔内没有再次触发事件，才执行一次该事件。
 * 简单来说，防抖是在短时间内多次触发同一个函数，只执行最后一次，中间的都被抛弃了。
 * @param func
 * @param delay
 * @param immediate
 * @param resultCallback
 */
type Func = (...args: any[]) => any

const debounceBase = (func: Func, delay: number = 200, immediate?: boolean, resultCallback?: Func) => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    let isInvoke = false;
    const _debounce = function (this: unknown, ...args: any[]) {
        return new Promise((resolve, reject) => {
            if (timer) clearTimeout(timer);
            // 判断是否是第一次进入触发而不是每次点击都触发
            if (immediate && !isInvoke) {
                try {
                    const result = func.apply(this, args);
                    if (resultCallback) resultCallback(result);
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
                isInvoke = true;
            } else {
                timer = setTimeout(() => {
                    try {
                        const result = func.apply(this, args);
                        if (resultCallback) resultCallback(result);
                        resolve(result);
                    } catch (e) {
                        reject(e);
                    }
                    // 执行结束回到初始值,这样下次再次触发还是第一次
                    isInvoke = false;
                    timer = null;
                }, delay);
            }
        });
    };
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer);
        isInvoke = false;
        timer = null;
    };
    return _debounce;
}

/**
 * 节流：在事件触发的一段时间内，只执行一次该事件，如果该时间段内事件再次触发，则不予理睬。
 * 简单来说，节流是按照一定时间间隔执行函数。
 * @param func
 * @param interval
 * @param options
 * leading:初始 trailing:结尾
 */
const throttle = (func: Func, interval: number, options = { leading: false, trailing: true }) => {
    let timer: null | ReturnType<typeof setTimeout> = null;
    let lastTime = 0;
    const { leading, trailing } = options;
    const _throttle = function (this: unknown, ...args: any[]) {
        const nowTime = Date.now();
        // 现在时间-初始时间 > 设置时间 为负 就会立即执行一次
        if (!lastTime && !leading) lastTime = nowTime;
        const remainTime = interval - (nowTime - lastTime);
        if (remainTime <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            lastTime = nowTime;
            func.apply(this, args);
        }
        // !timer 是因为当timer为空时还没有触发结尾事件,当已经触发了不需要再次执行定时器
        if (trailing && !timer) {
            timer = setTimeout(() => {
                // 当定时器执行完成 判断leading 当为ture设置为0下次调用会执行最上面那个if
                lastTime = !leading ? 0 : Date.now();
                timer = null;
                func.apply(this, args);
            }, remainTime);
        }
    };
    _throttle.cancel = function () {
        if (timer) clearTimeout(timer);
        timer = null;
        lastTime = 0;
    };
    return _throttle;
}

export{
    debounceBase,throttle
}