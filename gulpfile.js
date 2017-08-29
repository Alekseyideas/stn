// Подключаем Gulp и все необходимые библиотеки
var     gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		cleanCSS       = require('gulp-clean-css'),
		autoprefixer   = require('gulp-autoprefixer'),
		bourbon        = require('node-bourbon'),
		ftp            = require('vinyl-ftp'),
		uglify         = require('gulp-uglify'),
    	concat         = require('gulp-concat'),
        cache          = require('gulp-cache'),
		babel          = require('gulp-babel');



gulp.task('min-js',function () {
    gulp.src('app/js/main.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify('main.min.js'))
        .pipe(gulp.dest('app/js/'))
});


gulp.task('min-css',function () {
    gulp.src('app/css/stylesheet.css')
        .pipe(concat('stylesheet.min.css'))
        .pipe(cleanCSS('stylesheet.min.js'))
        .pipe(gulp.dest('app/css/'))
});

// Обновление страниц сайта на локальном сервере
gulp.task('browser-sync', function() {
	browserSync({
        port: 5100,
		proxy: "stn",
		notify: false
	});
});

	gulp.task('babel', function() {
		return gulp.src('app/es6/*.js')
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest('app/js/'))
			.pipe(browserSync.reload({stream: true}))
	});
// Компиляция stylesheet.css
gulp.task('sass', function() {
    return gulp.src('app/sass/*.sass')
        .pipe(sass({
            includePaths: bourbon.includePaths
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions']))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}))
});

// Наблюдение за файлами
gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/es6/*.js', ['babel']);
	gulp.watch('app/js/*.js', ['min-js']);
	gulp.watch('app/css/*.css', ['min-css']);
	gulp.watch('**/*.php', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});



gulp.task('img', ()=>{
    gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'))
});


gulp.task('build',['img','sass','babel','min-js','min-css'], () =>{

    let buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'));
let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
let buildJs = gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'));
let buildTemplate = gulp.src('app/**/*.php')
    .pipe(gulp.src('dist/parts'));
let buildPhp = gulp.src('app/*.php')
    .pipe(gulp.src('dist'))
});



// Выгрузка изменений на хостинг
gulp.task('deploy', function() {
	var conn = ftp.create({
		host:      'hostname.com',
		user:      'username',
		password:  'userpassword',
		parallel:  10,
		log: gutil.log
	});
	var globs = [
	'path/to/folder/'
	];
	return gulp.src(globs, {buffer: false})
	.pipe(conn.dest('/path/to/folder/on/server'));
});

gulp.task('default', ['watch']);
