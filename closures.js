let add = function(a) {
  return function(b) {
    return function (c) {
      return c + b + a;
    }
  }
}

add(1)(2)(3)
