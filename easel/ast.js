export class Literal {
    constructor(value) {
        this.type = 'Literal'
        this.value = value
    }
}

export class Var {
    constructor(name, value) {
        this.type = 'Var'
        this.name = name
        this.value = value
    }
}

export class Binary {
    constructor(left, op, right) {
        this.type = 'Binary'
        this.left = left
        this.op = op
        this.right = right
    }
}

export class Array {
    constructor(value) {
        this.type = 'Array'
        this.value = value
    }
}

export class Func {
    constructor(name, params, body) {
        this.type = 'Func'
        this.name = name
        this.params = params
        this.body = body
    }
}

export class Return {
    constructor(value) {
        this.type = 'Return'
        this.value = value
    }
}

export class Conditional {
    constructor(condition, body, otherwise) {
      this.type = 'Conditional'
      this.condition = condition
      this.body = body
      this.otherwise = otherwise
    }
  }
export class Set {
    constructor(caller, property, value) {
        this.type = 'Set'
        this.caller = caller
        this.property = property
        this.value = value
    }
}
export class For {
    constructor(id, range, body) {
        this.type = 'For'
        this.id = id
        this.range = range
        this.body = body
    }
}

export class While {
    constructor(condition, body) {
        this.type = 'While'
        this.condition = condition
        this.body = body
    }
}

export class Struct {
    constructor(name, members) {
        this.type = 'Struct'
        this.name = name
        this.members = members
    }
}

export class Instance {
    constructor(name, members) {
        this.type = 'Instance'
        this.name = name
        this.members = members
    }
}

export class Call {
    constructor(caller, args) {
        this.type = 'Call'
        this.caller = caller
        this.args = args
    }
}

export class Get {
    constructor(caller, property, isExpr = false) {
        this.type = 'Get'
        this.caller = caller
        this.property = property
        this.isExpr = isExpr
    }
}

export class Unary {
    constructor(op, apply) {
        this.type = 'Unary'
        this.op = op
        this.apply = apply
    }
}

export default {
    Literal,
    Var,
    Binary,
    Array,
    Func,
    Return,
    For,
    Set,
    Struct,
    Instance,
    Call,
    Get,
    Unary,
    Conditional,

}