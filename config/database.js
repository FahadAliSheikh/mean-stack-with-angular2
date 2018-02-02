const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports=
{
    uri:'mongodb://fahad:fahad@ds221148.mlab.com:21148/fahad-mean-stack',
    secret:crypto,
    db:'fahad-mean-stack'
}
