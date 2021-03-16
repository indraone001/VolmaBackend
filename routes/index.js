const routes = require('express').Router();

//knex require
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        database: 'Volma',
        user: 'root',
        password: '',
    }
});

//route
routes.get('/', (req, res) => res.send('Hello World!'))

routes.get('/book', async (req, res) => {
    try {
        let buku = await knex('books');
        res.json(buku)
    } catch (e) {
        console.log(e);
    }
})

routes.post('/book', async (req, res) => {
    try {
        let judul = req.body.judul;
        let sinopsis = req.body.sinopsis;
        let penulis = req.body.penulis;

        let id = await knex('books').insert({
            "judul": judul,
            "sinopsis": sinopsis,
            "penulis": penulis,
            "created_at": knex.fn.now(),
            "updated_at": knex.fn.now(),
        })
        res.json({
            id: id[0],
            judul,
            sinopsis,
            penulis
        })
    } catch (e) {
        console.log(e);
        next(e)
    }
})

routes.put('/book/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let judul = req.body.judul;
        let sinopsis = req.body.sinopsis;
        let penulis = req.body.penulis;

        await knex('books').where('id', id).update({
            "judul": judul,
            "sinopsis": sinopsis,
            "penulis": penulis
        })
        res.json({
            id,
            judul,
            sinopsis,
            penulis
        })
    } catch (e) {
        console.log(e);
        next(e)
    }
})

routes.delete('/book/:id', async (req, res) => {
    try {
        let id = req.params.id;

        await knex('books').where('id', id).del()
        res.json({
            id,
        })
    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = routes;