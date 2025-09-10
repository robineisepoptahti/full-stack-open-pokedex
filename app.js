const express = require('express')
const app = express()

// get the port from env variable/ Changed the default to 5001 since 5000 is reserved for apple sharing in IOS
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
