var
del = require('del');

module.exports = function() {
  
  return function() {
    del.sync('dist'); // Удаляем папку dist перед сборкой
  };

};
