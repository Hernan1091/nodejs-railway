import express from 'express'
import ejs from 'ejs'
import {dirname,join} from 'path'
import { fileURLToPath } from 'url'
import {PORT} from './config.js'

import indexRoutes from './routes/index.js'

const app = express()

//La siguiente linea lo que hace es mantener la dirección del archivo index dinámica
const __dirname = dirname(fileURLToPath(import.meta.url))


//console.log(join(__dirname,'views'))
//la siguiente linea ocupa la funcion join que importamos del modulo path que utiliza el carctaer equivalente a "/" para todos los sistemas operativos
app.set('views',join(__dirname,'views'))
//la siguiente linea de codigo ejecuta el motor de ejs para mostra html con funciones adicionales.
app.set('view engine','ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname,'public')))

app.listen(PORT)
console.log('Server is listening on port', PORT)