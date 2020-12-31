const express = require('express')
const messageController = require('./controllers/messages_controller')

const app = express()
//creating body parser
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

//endpoints
app.post('/api/messages', messageController.create)
app.get('/api/messages', messageController.read)
app.put(`/api/messages/:id`, messageController.update)
app.delete(`/api/messages/:id`, messageController.update)


const port = 3001
// console.log(app)
app.listen(port, () => console.log(`Server listening on port: ${port}`))