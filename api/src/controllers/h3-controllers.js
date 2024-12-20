const h3 = require('h3-js')

class H3Controllers {
    getH3Index = async (req, res) => {
        try {
            const { lat, lng, resolution } = req.query;
            const h3Index = h3.latLngToCell(parseInt(lat), parseInt(lng), parseInt(resolution))
            return res.status(200).send({ response: h3Index })
        } catch (error) {
            return res.status(500).send({ response: error.message });
        }
    }
}

module.exports = H3Controllers