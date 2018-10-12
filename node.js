class Node {
    constructor(value) {
        this.value = value
        this.parent = null
        this.child = []
    }

    assignParent(parent) {
        if (this.parent !== null) return "Error" ;
        this.parent = parent
        parent.child.push(this)
    }

    assignChild(child) {
        this.child.push(child)
        child.parent = this
    }
}

module.exports = Node