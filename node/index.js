// console.log("start");

// for(let i=0; i<1000000000000; i++) {

// }

// setTimeout(() => console.log("end"), 1000);

// console.log("ending")

function fun()  {

}

const fun1 = () => {
    
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() < 0.5)
            resolve("The operation was successfull")
        else reject("The operation was unsuessfull")
    }, 1000)
})

myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))