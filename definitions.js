// NULL: is an actual value

console.log(typeof(null)) // logs 'Object'

// UNDEFINED: not an actual value

console.log(typeof(undefined)) // logs undefined

let a;
console.log(a) // logs undefined

console.log(null == undefined) // true
console.log(null === undefined) // compares types, false



//* CALL, BIND, APPLY - manipulate context of functions

const person = {
    name: "faiza", 
    hello: function(thing){
        console.log(this.name + ' says hello ' + thing)
    }
}

person.hello('world') // 'faiza says hello world'

const alterEgo = {
    name: "Little bunny foo foo", 
    
}

person.hello.call(alterEgo, 'world') // 'Little bunny foo foo says hello world'

person.hello.apply(alterEgo, ['world']) // 'Little bunny foo foo says hello world'

const newHello = person.hello.bind(alterEgo) 
newHello("world"); //'Little bunny foo foo says hello world'


