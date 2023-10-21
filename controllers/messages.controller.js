const path = require('path');

function getMessages(req, res){
    res.render('messages',{
        title: 'Messages to friends',
        friend: 'Elon',
    })
   // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'photo.png')); 
}

function postMessage(req, res){
    console.log('Updating messagess...')
}

module.exports = {
    getMessages,
    postMessage,
};