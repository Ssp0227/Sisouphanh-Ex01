/**
 * ກຳນົດໃຫ້ຕົວປ່ຽນ
 */

let x = "Hello World"

 /**
  * ຈົ່ງຂຽນ code ເພື່ອຫາຜົນຮັບ ດັ່ງນີ້
  * 
  *     ==================================== Display ========================================
  *     Hello Wor
  */

// coding
console.log ('==================================== Display ========================================');

function substr(x, index, length) {

  var substring = x.substr(index, length);

  console.log(substring);
}

substr(x, index, length);