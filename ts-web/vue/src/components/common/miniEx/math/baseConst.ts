const degrees2radiansParam = Math.PI / 180; //角度转换为弧度参数
const degrees2kmParam = 111.0; //角度转公里参数  degrees2kmParam
/**
      * 经度差到公里差 改正数比例（根据纬度值中间过程必须处理）
      * lonDegrees2kmParam
      * lat+
      * lonDegrees2kmParam-
      * dLonDegree = dLonKm/degrees2kmParam/lonDegrees2kmParam +
      */
const getDLonDegrees2DKmParam = (positionCenterLat: number) => Math.abs(
    Math.cos(positionCenterLat * degrees2radiansParam)
);


export {
    degrees2radiansParam, degrees2kmParam, getDLonDegrees2DKmParam
}