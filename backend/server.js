const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const clickerRoutes = require('./routes/clickRoutes')
app.use('/api/clicks', clickerRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Server is running')
})