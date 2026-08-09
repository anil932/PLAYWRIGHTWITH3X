console.log(typeof randomVar);   // "undefined" (no error)

// But typeof in TDZ throws an error!
// console.log(typeof myLet);    // ReferenceError!
// let myLet = 42;
// console.log(myLet)

// The engine KNOWS about myLet (it's hoisted)
// but it's in the TDZ, so even typeof cannot access it