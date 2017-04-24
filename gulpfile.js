// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    path = require('path'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    server = lr();

var fontName = 'AppCareIconFont';

// Styles
gulp.task('styles', function () {
    return gulp.src('src/less/main.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest("build/css/"))
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src(['src/js/libs/jquery.js','src/js/libs/swiper.jquery.js','src/js/libs/swiper.js', 'src/js/input_behavior.js','src/js/header_behavior.js', 'src/js/swiperModule.js','src/js/AnimationModule.js', 'src/js/main_page.js'])
    //.pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/scripts'))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest('build/scripts'))
        .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('main-page-scripts',function () {
    return gulp.src(['src/js/libs/jquery.js','src/js/libs/swiper.jquery.js','src/js/libs/swiper.js', 'src/js/input_behavior.js', 'src/js/swiperModule.js','src/js/AnimationModule.js' , 'src/js/main_page.js'])
        .pipe(concat('main_page.js'))
        .pipe(gulp.dest('build/scripts'))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest('build/scripts'))
        .pipe(notify({message: 'Scripts task complete'}));
})

// Images
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(livereload(server))
        .pipe(gulp.dest('build/images'))
        .pipe(notify({message: 'Images task complete'}));
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['build/styles', 'build/scripts', 'build/images'], {read: false})
        .pipe(clean());
});

//Move html

gulp.task('move', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'));
});

// Move css libs

gulp.task('move-css',function () {
    return gulp.src('src/css_libs/**/**.css')
        .pipe(gulp.dest('build/css/libs'));
});

//Iconfont

gulp.task('iconfont', function () {
    gulp.src(['src/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'src/icons/_icons.css',
            targetPath: '../../css/_icons.css',
            fontPath: '../fonts/icons/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true,
            normalize: true,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
        }))
        .pipe(gulp.dest('build/fonts/icons/'));
});

// Default task
gulp.task('default', ['clean'], function () {
    gulp.run('styles', 'scripts', 'images', 'move-css');
});

// Watch
gulp.task('watch', function () {

    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err)
        }
        ;
        gulp.run('default');
        // Watch .scss files
        gulp.watch('src/less/**/*.less', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('styles');
        });

        gulp.watch('src/*.html', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('move');
        });

        // Watch .js files
        gulp.watch('src/js/**/*.js', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('scripts');
        });

        // Watch image files
        gulp.watch('src/images/**/*', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('images');
        });

        // Watch icon folder

        gulp.watch('src/icons/**/*', function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('iconfont');
        });

        // Watch css libs

        gulp.watch('src/css_libs/**/*',function (event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            gulp.run('move-css');
        })

    });

});