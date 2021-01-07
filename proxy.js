const http = require('http')
const fs = require('fs')

const fontName = 'mem8YaGs126MiZpBA-UFVZ0b.woff2'
const font = fs.readFileSync('./public/' + fontName)
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config()

const endpoint = process.env.REACT_APP_API_URL ?? ''

http.createServer(async (req, res) => {
  if (req.url.toLowerCase().includes(fontName.toLowerCase())) {
    res.writeHead(200, { 'Content-Type': 'font/woff2' })
    res.write(font)
    return res.end()
  }

  const fid = Math.random().toString().slice(-8)
  console.log(fid, req.url)
  let pxbRes
  try {
    const qs = req.url.split('?')[1] || ''
    pxbRes = (await axios.get(`${endpoint}?${qs}`)).data
    console.log(fid, { totalHits: pxbRes.totalHits })
  } catch (e) {
    console.error(fid, e.message.split('\n')[0])
    if (e.response) {
      res.writeHead(e.response.status || 500)
      res.write(JSON.stringify({ statusText: e.response.statusText }))
    } else {
      res.writeHead(500)
    }
    return res.end()
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(pxbRes.hits))
  res.end()
}).listen(3001)
console.log('Proxy server listening at http://localhost:3001')
