var
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    watch = require('gulp-watch');

var config = {
    jsFiles: [
        './template/js/jquery-1.11.3.min.js',
        './template/js/bootstrap.min.js',
        './template/js/jquery.flexslider-min.js',
        './template/js/custom.js',
    ],
    jsDest: './source/js/',
    cssFiles: [
        './template/css/bootstrap.min.css',
        './template/css/font-awesome.min.css',
        './template/css/flexslider.css',
        './template/css/jquery-ui.css',
        './template/css/jquery.selectBox.css',
        './template/css/pace-minimal.css',
        './template/css/style.css',
        './source/css/custom.css',
        './template/css/responsive.css',
    ],
    cssDest: './source/css/',
    rtlFiles: [
        './template/css/bootstrap-rtl.css',
        './source/css/custom-rtl.css',
    ]
};

gulp.task('js', () => {
    return gulp.src(config.jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsDest))
})

gulp.task('css', () => {
    return gulp.src(config.cssFiles)
        .pipe(concatCss("styles.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(config.cssDest))
})

gulp.task('css-rtl', () => {
    return gulp.src(config.rtlFiles)
        .pipe(concatCss("rtl.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(config.cssDest))
})
gulp.task('watch', () => {
    gulp.watch('./template/css/*.css', ['css']);
    gulp.watch('./template/js/*.js', ['js']);
    gulp.watch('./source/css/*.css', ['css', 'css-rtl']);
})

gulp.task('copy:html',()=>{
    gulp.src('source/*.html').pipe(gulp.dest('dist'));
})

gulp.task('copy:fonts',()=>{
    gulp.src('source/fonts/*').pipe(gulp.dest('dist/fonts'));
})

gulp.task('copy:images',()=>{
    gulp.src('source/images/*').pipe(gulp.dest('dist/images'));
})

gulp.task('copy:css',()=>{
    gulp.src('source/css/*.css').pipe(gulp.dest('dist/css'));
})

gulp.task('copy:js',()=>{
    gulp.src('source/js/*.js').pipe(gulp.dest('dist/js'));
})

gulp.task('copyFiles', ['copy:html','copy:fonts','copy:images','copy:css','copy:js']);


gulp.task('default', ['js','css','css-rtl','watch']);


gulp.task('build',['js','css','css-rtl'] , ()=>{
    gulp.start('copyFiles');
})