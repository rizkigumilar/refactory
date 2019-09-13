var fs = require('fs');
fs.readdir('../', 'utf-8', async (err, data) => {
    if (err) {
        await console.log(new Error(err))
    }
    else {
        await console.log('name directory = ', data)
    }
})
