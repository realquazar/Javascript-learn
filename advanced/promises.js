function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if(success) {
                resolve("Data fetched succesfully")
            }
            else {
                reject("Data not fetched")
            }
        }, 3000)
    })
}

fetchData()
    .then((data) => {
        console.log(data);
        return data.toLowerCase();
    })
    .then((value) => {
        console.log(value);
        
    })
    .catch((error) => {console.error(error)})
