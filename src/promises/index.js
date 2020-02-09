const sometimesWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        } else {
            reject('Oops!')
        }
    })
}

const some2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 3000);
        }else{
            const error = new Error('Oops!');
            reject(error)
            
        }
    })
}

sometimesWillHappen()
    .then(response => console.log(response))
    .catch(response => console.error(response))

some2()
    .then(response => console.log(response))
    .catch(response => console.error(response))

Promise.all([sometimesWillHappen(), some2()])
    .then(response => {
        console.log('Array of result ' + response)
    })
    .catch(err => {
        console.error(err)
    })