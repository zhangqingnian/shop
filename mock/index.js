
const cors = require('cors');  //跨域模块
let express = require('express');
let app = express();
let router = express.Router();
let goodsData = require('./goods.json')
app.use(cors());
app.get('/goodsList',(req, res, next) => {
  res.json(goodsData)
});

app.listen(3000, () => console.log('sever'))
