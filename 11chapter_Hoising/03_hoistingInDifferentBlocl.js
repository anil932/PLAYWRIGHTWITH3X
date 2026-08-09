// / But you CAN re-declare in a nested block:

let score = 90;
if (true) {
    let score = 100;        // Different scope, this is fine!
    console.log(score);     // 100 (block-scoped)
}
console.log(score); 