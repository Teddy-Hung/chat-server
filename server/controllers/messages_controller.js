let messages = []
let id = 0

module.exports = {
    create: (request, response) => {
        const {text, time} = request.body
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++
        response.status(200).send(messages)
    },
    read: (request, response) => {
        response.status(200).send(messages)
    },
    update: (request, response) => {
        const {text} = request.body
        const updateID = request.params.id
        const messageIndex = messages.findIndex(message => message.id == updateID)
        response.status(200).send(messages)
    },
    delete: (request, response) => {
        const deleteID = request.params.id
        const messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1)
        response.status(200).send(messages)
    }
}