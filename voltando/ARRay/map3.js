Array.prototype.map2 = function(callback) {
  let newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const nums = [1, 2, 3, 4, 5]

const nums2 = nums.map2(el => el * 2)
console.log(nums2)