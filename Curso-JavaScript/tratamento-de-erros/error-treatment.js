function ValidaArray(array, num) {
  try {
    if (!array && !num) throw new ReferenceError("envie os parametros");

    if (typeof array !== "object")
      throw new TypeError("Por favor envie uma array do tipo object");

    if (typeof num !== "number")
      throw new TypeError("Por favor insira um Número!");

    if (array.length !== num)
      throw new RangeError("O tamanho do array e o número são diferentes");

    return array;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Esse é um erro de referencia");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Esse é um erro do tipo");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Esse é um RangeError");
      console.log(e.message);
    } else {
      console.log("ocorreu um erro inesperado" + e);
    }
  }
}

console.log(ValidaArray([1, 2], 2))
