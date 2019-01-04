express = require('express')
app = express()

app.get('/',(pedido,resposta) => {

resposta.send('olá')

})


app.listen(3000)
