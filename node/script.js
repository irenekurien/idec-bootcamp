const fs = require('fs');

const fileName = "abc.txt";

const readFileAsync = async () => {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(fileName, 'utf-8', (error, data) => {
                if(error)   {
                    reject(error)
                } else {
                    resolve(data)
                }
            })
        }, 1000)
    })

    return data;
}

const processData = async() => {
    const data = await readFileAsync();
    console.log(data);
}

processData()
