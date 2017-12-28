var gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    sprite = require('gulp-sprite-generator');
    folder = {
        src: 'src/',
        build: 'build/'
      }



gulp.task('images',function(){
    var out = folder.build + '/images/';
    return gulp.src(folder.src +'assets/images/**/*')
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel:5 }))
    .pipe(gulp.dest(out))
})
gulp.task('sprites', function() {
    var spriteOutput;
    spriteOutput = gulp.src(folder.src +'assets/images/**/*')
        .pipe(sprite({
            spriteSheetName: "sprite.svg"
        }));
 
    spriteOutput.css.pipe(gulp.dest("./dist/css"));
    spriteOutput.img.pipe(gulp.dest(folder.build + '/images/'));
});
gulp.task('run',['images','sprites']);