'use strict'
const gulp = require('gulp')
const watch = require('gulp-watch')
const contractTransform = require('gulp-contract-transform')

const compileSolidity = () => {
  gulp.src('contracts/**/*.sol')
  .pipe(contractTransform.compileContracts())
  .pipe(gulp.dest('modified-files'))
}

gulp.task('compile', () => {
  compileSolidity()
})

gulp.task('deploy', () => {
  gulp.src('modified-files/**/*.sol.js')
  .pipe(contractTransform.deployContracts())
  .pipe(gulp.dest('modified-files-deployed'))
})

gulp.task('watch', () => {
  return watch('contracts/**/*.sol', () => {
    compileSolidity()
  })
})
