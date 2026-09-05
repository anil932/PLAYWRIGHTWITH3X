class Environment {
    constructor(env1 = "stagging", port=3000) {
        this.env1 = env1;
        this.port = port
    }

    getUrl() {
        console.log(`https://${this.env1}//${this.port}`)
    }
}

let env2 = new Environment()
env2.getUrl()