function getMessages(req, res){
    res.send('<ul><li>Hello Boh!</li></ul>');
}

function postMessage(req, res){
    console.log('Updating messagess...')
}

module.exports = {
    getMessages,
    postMessage,
};