var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var config = {
    jsFiles:[
        './template/js/jquery-1.11.3.min.js',
        './template/js/bootstrap.min.js',
        './template/js/jquery.flexslider-min.js',
        './template/js/custom.js',
    ],
    jsDest :'./dist/js/',
    cssFiles :[
        './template/css/bootstrap.min.css',
        './template/css/font-awesome.min.css',
        './template/css/flexslider.css',
        './template/css/jquery-ui.css',
        './template/css/jquery.selectBox.css',
        './template/css/pace-minimal.css',
        './template/css/style.css',
        './template/css/responsive.css',
    ],
    cssDest :'./dist/css/'
};

gulp.task('js',function(){
    return gulp.src(config.jsFiles)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsDest))
})

gulp.task('css',function(){
    return gulp.src(config.cssFiles)
    .pipe(concatCss("styles.css"))
    .pipe(cssmin())
    .pipe(gulp.dest(config.cssDest))
})

gulp.task('default',function(){

})