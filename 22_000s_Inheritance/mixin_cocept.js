

let loggerMixin = function(Base) {
    return class extends Base {
        log(msg) {
        console.log("[Log] " +msg)
        }
    }
}

let screenShotmixin = function(Base) {
    return class extends Base {
        takeScreenshot() {
          console.log("Screenshot captured ")
        }
    }
}