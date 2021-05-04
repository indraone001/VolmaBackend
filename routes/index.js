//express require
const routes = require('express').Router();

//db connection
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

//routes
routes.get('/', (req, res) => res.send('this is volma app'))

//mahasiswa routes controller
routes.get('/mahasiswa', async(req, res) => {
    try {
        //get all mahasiswa
        let mhs = await knex('mahasiswa')

        //response
        res.status(200).send({
            success: true,
            data: mhs
        })
    } catch (e) {
        //error log
        console.log(e)
    }
})

routes.post('/mahasiswa', async(req, res) => {
    try {
        // body request
        let mhs = req.body

        // add new mahasiswa
        // TODO: add handling for existing nim
        let id = await knex('mahasiswa').insert({
            "nim": mhs.nim,
            "nama": mhs.nama,
            "jurusan": mhs.jurusan,
            "angkatan": mhs.angkatan,
            "created_at": knex.fn.now(),
            "updated_at": knex.fn.now(),
        })

        //response
        res.status(201).send({
            success: true,
            message: "Successfully insert mahasiswa",
            data: { id: id[0], mhs }
        })
    } catch (e) {
        //error log
        console.log(e)
    }
})

routes.put('/mahasiswa/:id', async(req, res) => {
    try {
        // body request & params
        let mhs = req.body
        let id_mhs = req.params.id

        // update mahasiswa by id
        let id = await knex('mahasiswa').where('id_mhs', id_mhs).update({
            "nim": mhs.nim,
            "nama": mhs.nama,
            "jurusan": mhs.jurusan,
            "angkatan": mhs.angkatan,
            "updated_at": knex.fn.now(),
        })

        //response
        res.status(200).send({
            success: true,
            message: 'Successfully update mahasiswa',
            data: { id: id[0], mhs }
        })
    } catch (e) {
        //error log
        console.log(e)
    }
})

routes.delete('/mahasiswa/:id', async(req, res) => {
    try {
        //delete mahasiswa by id
        await knex('mahasiswa').where('id_mhs', req.params.id).del()

        //response
        res.status(200).send({
            success: true,
            message: 'Successfully delete mahasiswa'
        })
    } catch (e) {
        //error log
        console.log(e)
    }
})

//kandidat routes controller
routes.post('/kandidat', async (req, res) => {
    try {
        // body & param request
        let id_ketua = req.body.id_ketua;
        let id_wakil = req.body.id_wakil;
        let no_urut = req.body.no_urut;
        let visi = req.body.visi;
        let misi = req.body.misi;

        // insert data kandidat
        let id = await knex('kandidat').insert({
            "id_ketua": id_ketua,
            "id_wakil": id_wakil,
            "no_urut": no_urut,
            "visi": visi,
            "misi": misi,
            "created_at": knex.fn.now(),
            "updated_at": knex.fn.now(),
        })

        //response
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
        //error log
        console.log(e);
        next(e)
    }
})

routes.get('/kandidat', async (req, res) => {
    try {
        //get all kandidat
        let kandidat = await knex('kandidat');

        //response
        res.status(200).send({
            success: true,
            data : kandidat,
        });
    } catch (e) {
        //error log
        console.log(e);
    }
})

routes.put('/kandidat/:id', async (req, res) => {
    try {
        // body & params request
        let id = req.params.id;
        let id_ketua = req.body.id_ketua;
        let id_wakil = req.body.id_wakil;
        let no_urut = req.body.no_urut;
        let visi = req.body.visi;
        let misi = req.body.misi;

        // update kandidat by id
        let kandidat = await knex('kandidat').where('id_kandidat', id).update({
            "id_ketua": id_ketua,
            "id_wakil": id_wakil,
            "no_urut": no_urut,
            "visi": visi,
            "misi": misi,
        });

        //response
        res.status(201).send({
            success: true,
        });
    } catch (e) {
        //error log
        console.log(e);
        next(e)
    }
})

routes.delete('/kandidat/:id', async (req, res) => {
    try {
        //body and params request
        let id = req.params.id;

        //delete kandidat by id
        await knex('kandidat').where('id_kandidat', id).del()

        //response
        res.status(201).send({
            success: true,
        });
    } catch (e) {
        //error log
        console.log(e);
        next(e)
    }
})

//login routes controllers
routes.post('/login', async (req, res) => {
    try {
        //body & params request
        let nim = req.body.nim;
        let password = req.body.password;

        //get mahasiswa by nim
        let data = await knex('mahasiswa').where('nim', nim)

        //compare password
        //Task: password encrypt
        //Task: response with data
        if(data[0].password == password){
            //success response
            res.status(200).send({
                success: true,
            });
        }else{
            //failed response
            res.status(404).send({
                success: false,
            });
        }
    } catch (e) {
        //error log
        console.log(e);
        next(e)
    }
})

module.exports = routes;