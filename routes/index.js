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

routes.post('/kandidat', async (req, res) => {
    try {
        let id_ketua = req.body.id_ketua;
        let id_wakil = req.body.id_wakil;
        let no_urut = req.body.no_urut;
        let visi = req.body.visi;
        let misi = req.body.misi;

        let id = await knex('kandidat').insert({
            "id_ketua": id_ketua,
            "id_wakil": id_wakil,
            "no_urut": no_urut,
            "visi": visi,
            "misi": misi,
            "created_at": knex.fn.now(),
            "updated_at": knex.fn.now(),
        })
        res.status(201).send({
            success: true,
            data : {
                id: id[0],
                id_ketua,
                id_wakil,
                no_urut,
                visi,
                misi,
            }
        });
    } catch (e) {
        console.log(e);
        next(e)
    }
})

routes.get('/kandidat', async (req, res) => {
    try {
        let kandidat = await knex('kandidat');
        res.status(200).send({
            success: true,
            data : kandidat,
        });
    } catch (e) {
        console.log(e);
    }
})

routes.put('/kandidat/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let id_ketua = req.body.id_ketua;
        let id_wakil = req.body.id_wakil;
        let no_urut = req.body.no_urut;
        let visi = req.body.visi;
        let misi = req.body.misi;

        let kandidat = await knex('kandidat').where('id_kandidat', id).update({
            "id_ketua": id_ketua,
            "id_wakil": id_wakil,
            "no_urut": no_urut,
            "visi": visi,
            "misi": misi,
        });

        res.status(201).send({
            success: true,
        });
    } catch (e) {
        console.log(e);
        next(e)
    }
})

routes.delete('/kandidat/:id', async (req, res) => {
    try {
        let id = req.params.id;

        await knex('kandidat').where('id_kandidat', id).del()
        res.status(201).send({
            success: true,
        });
    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = routes;