const routes = require('express').Router();

//knex require
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "db4free.net",
        port: "3306",
        database: "volma01",
        user: "volma01",
        password: "volmadb4free",
    }
});

//route
routes.get('/', (req, res) => res.send('this is volma app'))

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

routes.get('/mahasiswa', async(req, res) => {
    try {
        let mhs = await knex('mahasiswa')
        res.status(200).send({
            success: true,
            data: mhs
        })
    } catch (e) {
        console.log(e)
    }
})

routes.post('/mahasiswa', async(req, res) => {
    try {
        let mhs = req.body

        // TODO: add handling for existing nim
        let id = await knex('mahasiswa').insert({
            "nim": mhs.nim,
            "nama": mhs.nama,
            "jurusan": mhs.jurusan,
            "angkatan": mhs.angkatan,
            "created_at": knex.fn.now(),
            "updated_at": knex.fn.now(),
        })

        res.status(201).send({
            success: true,
            message: "Successfully insert mahasiswa",
            data: { id: id[0], mhs }
        })
    } catch (e) {
        console.log(e)
    }
})

routes.put('/mahasiswa/:id', async(req, res) => {
    try {
        let mhs = req.body
        let id_mhs = req.params.id

        let id = await knex('mahasiswa').where('id_mhs', id_mhs).update({
            "nim": mhs.nim,
            "nama": mhs.nama,
            "jurusan": mhs.jurusan,
            "angkatan": mhs.angkatan,
            "updated_at": knex.fn.now(),
        })

        res.status(200).send({
            success: true,
            message: 'Successfully update mahasiswa',
            data: { id: id[0], mhs }
        })
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/mahasiswa/:id', async(req, res) => {
    try {
        await knex('mahasiswa').where('id_mhs', req.params.id).del()

        res.status(200).send({
            success: true,
            message: 'Successfully delete mahasiswa'
        })
    } catch (e) {
        console.log(e)
    }
})

routes.post('/login', async (req, res) => {
    try {
        let nim = req.body.nim;
        let password = req.body.password;

        let data = await knex('mahasiswa').where('nim', nim)

        if(data[0].password == password){
            res.status(200).send({
                success: true,
            });
        }else{
            res.status(404).send({
                success: false,
            });
        }
    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = routes;