function placeorder(item, callback) {
    console.log(`order placed ${item}`)
    callback()
}

placeorder("Pizza", function () {
    console.log("Please pay the Payment and pick up yoiur order")
})