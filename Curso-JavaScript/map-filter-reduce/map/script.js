// map

const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

function mapWithThis(array, thisArg) {
  return array.map(function(item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log("this -> maçã(map com this)", mapWithThis(nums, maca)); //faz nums * 2
console.log("this -> Laranja(map com this) ", mapWithThis(nums, laranja)); // nums * 3


// map sem this
function mapSemThis(arr) {
    return arr.map((item) => {
        return item * 4
    });
}

console.log('Map sem this', mapSemThis(nums))