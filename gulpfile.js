const gulp = require("gulp");
const browserSync = require("browser-sync");
const del = require("del");
const cache = require("gulp-cache");
const minifyHTML = require("gulp-htmlmin");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const minifyJS = require("gulp-minify");
const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const browserify = require('gulp-browserify');
const babelify = require('babelify');

let paths = {
	html: {
		src: "app/**/*.html",
		dest: "dist"
	},
	css: {
		src: "app/css/**/*.css",
		dest: "dist/css"
	},
	sass: {
		src: "app/sass/**/*.+(sass|scss)",
		dest: "dist/sass",
		compileDest: "app/css"
	},
	js: {
		compileJsSrc: "app/js/framework/**/*.js",
		compileJsDest: "app/js/build",
		src: ["app/js/**/*.js", "!app/js/build/**/*.js"],
		loadSrc: "app/js/build/**/*.js",
		dest: "dist/js/build"
	},
	fonts: {
		src: "app/fonts/**/*.+(ttf|woff|eot)",
		dest: "dist/fonts"
	},
	images: {
		src: "app/images/**/*.+(jpeg|jpg|png|svg|gif)",
		dest: "dist/images"
	}
};

// Running server
function server() {
	browserSync({
		server: {
			baseDir: ["./app", './']
		},
		notify: false
	});
}

// Removing dist folder
function removeDist() {
	return del("dist");
}

// Clearing cache
function clearCache() {
	return cache.clearAll();
}

// Handling sass
function compileSASS() {
	return gulp.src(paths.sass.src)
	.pipe(sass())
	.pipe(autoprefixer(["last 15 versions", "> 1%", "ie 8", "ie 7"], {cascade: true})) // add prefixes to css properties
	.pipe(gulp.dest(paths.sass.compileDest))
	.pipe(browserSync.reload({stream: true})); // reload page if sass files changed
}

// Load css files to dist folder and uglify them
function loadCSS() {
	return gulp.src(paths.css.src)
	.pipe(cssnano())
	.pipe(gulp.dest(paths.css.dest));
}

// Load sass to dist folder
function loadSASS() {
	return gulp.src(paths.sass.src)
	.pipe(gulp.dest(paths.sass.dest));
}

// Load js files to dist folder (compiles, uglifies them)
function loadJS() {
	return gulp.src(paths.js.loadSrc)
	// Transforms ES6 and higher to ES5
	.pipe(babel({
        presets: ['@babel/env']
    }))
    // Uglifing JS
    .pipe(uglify())
	.pipe(gulp.dest(paths.js.dest));
}

// Load fonts to dist folder
function loadFonts() {
	return gulp.src(paths.fonts.src)
	.pipe(gulp.dest(paths.fonts.dest));
}

// Load images to dist folder and handle them
function loadImages() {
	return gulp.src(paths.images.src)
	.pipe(cache(imagemin([
		pngquant(), // better handling PNG images
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({
	        plugins: [
	            {removeViewBox: true},
	            {cleanupIDs: false}
	        ]
	    })
	])))
	.pipe(gulp.dest(paths.images.dest));
}

// Reloading page contennt if it changes
function reloadHTML() {
	return gulp.src(paths.html.src)
	.pipe(browserSync.reload({stream: true}));
}

// Reloading js if it changes
function reloadJS() {
	return gulp.src(paths.js.src,)
	.pipe(browserSync.reload({stream: true}));
}

// Making Node.js modules possible to require
function browserifyJS() {
	del("app/js/build");
    return gulp.src(paths.js.compileJsSrc)
        .pipe(browserify({
            insertGlobals : true,
            transform: [babelify.configure({
                presets: ["@babel/preset-env", "@babel/preset-react"]
            })]
        }))
        .pipe(gulp.dest(paths.js.compileJsDest));
}

// Watching after changes in files
function watch() {
	gulp.watch(paths.sass.src, gulp.series(compileSASS)); // sass
	gulp.watch(paths.html.src, gulp.series(reloadHTML)); // html
	gulp.watch(paths.js.src, gulp.series(reloadJS)); // js
	gulp.watch(paths.js.src, gulp.series(browserifyJS)); // also js
}


// Initializing tasks
exports.server = server;
exports.removeDist = removeDist;
exports.clearCache = clearCache;
exports.compileSASS = compileSASS;
exports.loadCSS = loadCSS;
exports.loadSASS = loadSASS;
exports.loadJS = loadJS;
exports.loadFonts = loadFonts;
exports.loadImages = loadImages;
exports.reloadHTML = reloadHTML;
exports.reloadJS = reloadJS;
exports.browserifyJS = browserifyJS;
exports.watch = watch;

// General tasks which runs some other task and perform some result

// Load everyrhing to dist folder
let loadTask = gulp.parallel( 
	loadCSS,
	loadSASS,
	loadJS,
	loadFonts,
	loadImages
);
gulp.task("load", loadTask);

// Build final project
let buildTask = gulp.series(
	removeDist,
	compileSASS,
	browserifyJS,
	"load"
);
gulp.task("build", buildTask);

// Running server and starting watching changes
let defaultTask = gulp.series(
	                gulp.parallel(browserifyJS),
					gulp.parallel(compileSASS, reloadHTML, reloadJS),
					gulp.parallel(watch, server)
				);
gulp.task("default", defaultTask);
