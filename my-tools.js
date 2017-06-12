/**
 * @function randomNum
 *
 * @param {number} min 希望得到的最小随机数
 * @param {number} max 希望得到的最大随机数
 * @returns {number} 返回生成的一个从min到max之间的非负整数，含min,max
 */
function randomNum(min, max) {
  if (arguments.length != 2) {
    throw new Error('only accept two params from min to max')
  }
  //如果输入的不是数字，强行赋值为-999
  if (typeof min !== 'number' || typeof max !== 'number') {
    min = max = -999;
  }
  if (min < 0 || max < 0) {
    throw new Error('the input must be a int number >= 0');
  }
  if (min > max) {
    throw new Error('the min is bigger than max ');
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @function randomColor
 *
 * @param {number} rMin 颜色RGB中r的小值 default:0
 * @param {number} rMax 颜色RGB中r的大值 default:255
 *
 * @param {number} gMin 颜色RGB中g的小值 default:0
 * @param {number} gMax 颜色RGB中g的大值 default:255
 *
 * @param {number} bMin 颜色RGB中b的小值 default:0
 * @param {number} bMax 颜色RGB中b的大值 default:255
 *
 * @returns {string} 返回一个随机颜色比如 rgb(102,34,223)
 *
 */
function randomColor(rMin, rMax, gMin, gMax, bMin, bMax) {
  rMin = rMin || 0;
  gMin = gMin || 0;
  bMin = bMin || 0;
  rMax = rMax || 255;
  gMax = gMax || 255;
  bMax = bMax || 255;
  var r = randomNum(rMin, rMax);
  var g = randomNum(gMin, gMax);
  var b = randomNum(bMin, bMax);

  return "rgb(" + r + ',' + g + ',' + b + ")";

}







