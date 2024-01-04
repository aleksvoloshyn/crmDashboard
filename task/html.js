const html = () => {
  return (
    $.gulp
      .src($.path.html.src)
      .pipe(
        $.gp.plumber({
          errorHandler: $.gp.notify.onError(),
        })
      )
      .pipe($.gp.fileInclude())
      .pipe($.gp.webpHtml())
      .pipe($.gp.size({ title: 'До сжатия' }))
      //   .pipe(htmlmin({ collapseWhitespace: false }))
      .pipe($.gp.htmlmin($.app.htmlmin))
      .pipe($.gp.size({ title: 'После сжатия' }))
      .pipe($.gulp.dest($.path.html.dest))
      .pipe($.browserSync.stream())
  )
}

module.exports = html
