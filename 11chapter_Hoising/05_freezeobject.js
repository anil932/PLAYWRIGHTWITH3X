// / Object.freeze() makes properties read-only (SHALLOW):
const frozenConfig = Object.freeze({
    browser: "Chrome",
    timeout: 3000,
    nested: { retries: 3 }
});

frozenConfig.timeout = 5000;       // Silently fails
console.log(frozenConfig.timeout);  // 3000 (unchanged!)

// WARNING: freeze is SHALLOW!
frozenConfig.nested.retries = 10;  // This WORKS!
console.log(frozenConfig.nested.retries);  // 10

// For deep freeze, you need a recursive function or library

const browsers =["Chrome", "Firefox", "Opera"]
for(const browser of browsers) {
    console.log(browser)
}