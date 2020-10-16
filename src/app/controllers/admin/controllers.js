const db = require('../../models/database/db')
const saveOrphanage = require('../../models/database/insertOrphanage')

module.exports = {
    async insertOrphanageController(req, res) {
        const { lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends } = req.body

        if (Object.values(req.body).includes('')) {
            res.send({ status: 502, error: true, errormessage: "Preencha todos os campos!" })
        } else {
            const database = await db;
            await saveOrphanage(database, {
                lat,
                lng,
                name,
                about,
                whatsapp,
                images: images.toString(),
                instructions,
                opening_hours,
                open_on_weekends
            })

            res.send({ status: 200, error: false, message: "Orfanato adicionado com sucesso!" })

        }
    }
}