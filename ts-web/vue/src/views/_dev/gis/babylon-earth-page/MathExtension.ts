/**
 * lng 0 lat 0  level 0 x_1  y_
 * 计算经纬度转换成3857瓦片坐标
 * @param {Number} lng 经度 角度
 * @param {Number} lat 纬度
 * @param {Number} level 层级
 */
function calcXY(lng: number, lat: number, level: number) {
    let x = (lng + 180) / 360; //横向百分比
    let n = Math.pow(2, level); //2的level次方个瓦片  首级2——0 1_1 2-1 2_2
    let title_X = Math.floor(x * n); //向下取整
    let lat_rad = (lat * Math.PI) / 180; //lat 弧度
    let y = (1 - Math.log(Math.tan(lat_rad) + 1 / Math.cos(lat_rad)) / Math.PI) / 2;
    let title_Y = Math.floor(y * n);
    return { title_X, title_Y };
}

// 瓦片编号转经纬度
function tile2long(x: number, z: number) {
    return (x / Math.pow(2, z) * 360 - 180);
}
function tile2lat(y: number, z: number) {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
    return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
}

// 

export { calcXY }