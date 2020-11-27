// Add your functions here
function map(src, func) {
    let new_array = []
    for(const item of src) {
        new_array.push(func(item))
    }
    return new_array
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }