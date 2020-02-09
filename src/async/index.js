const doSomeAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('Do something async')
            }, 3000)
            : reject(new Error('Test  Error'))
    })
}

const doSome = async () => {
    const some = await doSomeAsync()
    console.log(some)
}

console.log('Hola')
doSome()
console.log('Adios')

const anotherFunc = async () => {
    try {
        const some = await doSomeAsync()
        console.log(some)
    }  catch(err){
        console.error(err)
    }
}

console.log('Hola')
anotherFunc()
console.log('Adios')
