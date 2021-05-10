const mongoose = require('mongoose')
mongoose.connect(process.env.DB).then(() => {
    console.log('DB Connection Successfully');
}).catch((err) => {
    console.log(`Database Error - ${err}`);
})
