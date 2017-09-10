var
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    cssmin = require('gulp-cssmin'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');

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
    watch: {
        css: ['./template/css/*.css'],
        js: ['./template/js/*.js'],
        sass: ['./source/scss/**/*.scss']
    },
    copy: {
        html: './source/*.html',
        fonts: './source/fonts/*',
        images: './source/images/*',
        css: ['./source/css/style.css','./source/css/style-rtl.css'],
        js: './source/js/*.js'
    },
    dist: {
        html: './dist',
        fonts: './dist/fonts',
        images: './dist/images',
        css: './dist/css',
        js: './dist/js'
    }
};




gulp.task('js', () => {
    return gulp.src(config.jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.jsDest))
})

gulp.task('css', () => {
    return gulp.src(config.cssFiles)
        .pipe(concatCss("template.css"))
        .pipe(cssmin())
        .pipe(gulp.dest(config.cssDest))
        .on("end", () => {
            gulp.start('sass')
        });
})


gulp.task('sass', () => {
    return gulp.src('./source/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(config.cssDest))
});



gulp.task('watch', () => {
    gulp.watch(config.watch.css, ['css']);
    gulp.watch(config.watch.js, ['js']);
    gulp.watch(config.watch.sass, ['sass']);
})

gulp.task('copy:html', () => {
    gulp.src(config.copy.html).pipe(gulp.dest(config.dist.html));
})

gulp.task('copy:fonts', () => {
    gulp.src(config.copy.fonts).pipe(gulp.dest(config.dist.fonts));
})

gulp.task('copy:images', () => {
    gulp.src(config.copy.images).pipe(gulp.dest(config.dist.images));
})

gulp.task('copy:css', () => {
    gulp.src(config.copy.css).pipe(gulp.dest(config.dist.css));
})

gulp.task('copy:js', () => {
    gulp.src(config.copy.js).pipe(gulp.dest(config.dist.js));
})

gulp.task('copyFiles', ['copy:html', 'copy:fonts', 'copy:images', 'copy:css', 'copy:js']);


gulp.task('default', ['js', 'css', 'watch']);


gulp.task('build', ['js', 'css', 'sass'], () => {
    gulp.start('copyFiles');
})