
const array = ['foo', 'bar'];

function cheer() {
  return _.map(array, function(key) {
    return key.toUpperCase() + ', ' + key.toUpperCase() + ', ' + key.toUpperCase() + '!!!'
  });

}

console.log(cheer());