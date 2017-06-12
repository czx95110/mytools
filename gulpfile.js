var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var lp=loadPlugins();

var srcArray=['js-src/a.js'];
// 任务：将ES6语法转成ES5语法
gulp.task('toES5', function () {
  gulp.src(srcArray)
  .pipe(lp.babel({
      presets:['es2015']
    }))
  .pipe(gulp.dest('js'));
});
// 任务：压缩所有js文件
gulp.task('minify-js', function () {
  gulp.src('js/*.js')
  .pipe(lp.uglify())
  .pipe(lp.rename({
      suffix:'.min'
    }))
  .pipe(gulp.dest('js'));
});
// 任务：压缩所有css文件
gulp.task('minify-css', function () {
  gulp.src('css/*.css')
  .pipe(lp.cleanCss({compatibility:'ie8'}))
  .pipe(lp.rename({suffix:'.min'}))
  .pipe(gulp.dest('css'));
});
// 任务：css加前缀
gulp.task('prefixer-css', function () {
  gulp.src('css-src/*.css')
  .pipe(lp.autoprefixer())
  .pipe(gulp.dest('css'));
});
// 任务：合并 css 文件 将a,b合并到after中
gulp.task('concat-css', function () {
  gulp.src(['css-src/a.css', 'css-src/b.css'])
  .pipe(lp.concat('after.css'))
  .pipe(lp.rename({suffix:'-concat'}))
  .pipe(gulp.dest('css'));
});
// 任务：文件包含
gulp.task('file', function () {
  gulp.src('html-gulp/test-ab.html')
  .pipe(lp.fileInclude({
      prefix:'@@',
      basepath:'@file'
    }))
  .pipe(gulp.dest('html'));
});





// --------任务：测试示例熟悉用法的任务
gulp.task('file99', function () {
  gulp.src('html-gulp/test-ab.html')
    .pipe(lp.fileInclude({
      prefix:'@@',
      basepath:'@file',
      context:{
        name:"test8",
        arr:['test1','test2','test3']
      }
    }))
    .pipe(gulp.dest('html'));
});
// --------任务：测试多dest
gulp.task('ab', function () {
  gulp.src('js/a.js')
    .pipe(lp.uglify())
    .pipe(gulp.dest('a'))
    .pipe(lp.rename({
      suffix:'.tes'
    }))
    .pipe(gulp.dest('b'));
});
// --------任务：jsdoc3 说明文档用法
gulp.task('jsdoc3', function (cb) {
  gulp.src('my-tools.js')
  .pipe(lp.jsdoc3(cb));
});

/*
*监测 srcArray 下的某一个或多个文件变动
*执行 missionArray中的任务。
*貌似反应有点慢，不是无效果
* */
var missionArray=['toES5'];
//gulp.watch(srcArray,missionArray);
