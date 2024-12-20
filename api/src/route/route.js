const express = require('express')
const h3Router = require('./h3Routes')

const router = express.Router()

const defualtRoute = [
    {
        path:'/h3',
        route:h3Router
    }
]

defualtRoute.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router