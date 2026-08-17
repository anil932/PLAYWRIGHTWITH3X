
function shoppingStory(item, callMeSoreIsEmpty) {
    console.log("Store is very busy")

    callMeSoreIsEmpty()

}

shoppingStory("Start shopping ", () => {
    console.log("lets start the shopping .........")
})
