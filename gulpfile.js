const gulp = require('gulp');
const tsProject = require('gulp-typescript').createProject('tsconfig.json');
const merge = require('merge2');

gulp.task('ts',()=>{
    tsResult = tsProject.src().pipe(tsProject());

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done. 
        tsResult.dts.pipe(gulp.dest('./dist')),
        tsResult.js.pipe(gulp.dest('./dist'))
    ]); 
});

gulp.task('default',['ts'],()=>{
    gulp.watch('./src/**/*.ts',['ts']);
});