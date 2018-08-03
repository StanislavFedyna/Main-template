module.exports = function() {
  gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
      server: { // Определяем параметры сервера
        baseDir: '../../src' // Директория для сервера - app
      },
      notify: false // Отключаем уведомления
    });
  });
};

// ДОБАВИТИ ІНШІ КОМПОНЕНТИ CSS COMB))))