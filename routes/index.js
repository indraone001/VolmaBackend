//express require
const routes = require('express').Router();
const bcrypt = require('bcrypt');

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
  // connection: {
  //   host: 'localhost',
  //   port: '3306',
  //   database: 'Volma',
  //   user: 'root',
  //   password: ''
  // },
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
routes.post('/kandidat', async(req, res) => {
  try {
    // body request
    let data = req.body
      // insert data kandidat
    let kandidat = await knex('kandidat').insert({
      "id_ketua": data.id_ketua,
      "id_wakil": data.id_wakil,
      "nama_wakil": data.nama_wakil,
      "no_urut": data.no_urut,
      "img_ketua": data.img_ketua,
      "img_wakil": data.img_wakil,
      "visi": data.visi,
      "misi": data.misi,
      "created_at": knex.fn.now(),
      "updated_at": knex.fn.now(),
    })

    //response
    res.status(201).send({
      success: true,
      data: { kandidat }
    });
  } catch (e) {
    //error log
    console.log(e);
    next(e)
  }
})

routes.get('/kandidat', async(req, res) => {
  try {
    //get all kandidat
    let data = await knex.from('kandidat').innerJoin('mahasiswa', 'mahasiswa.id_mhs', 'kandidat.id_ketua').select('id_kandidat', 'no_urut', 'kandidat.id_ketua', 'kandidat.id_wakil', 'mahasiswa.nama', 'nama_wakil', 'visi', 'misi', 'img_ketua', 'img_wakil');

    //response
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    //error log
    console.log(e);
  }
})

routes.put('/kandidat/:id', async(req, res) => {
  try {
    // body & params request
    let id = req.params['id']
    let data = req.body

    // update kandidat by id
    await knex('kandidat').where('id_kandidat', id).update({
      "id_ketua": data.id_ketua,
      "id_wakil": data.id_wakil,
      "nama_wakil": data.nama_wakil,
      "no_urut": data.no_urut,
      "img_ketua": data.img_ketua,
      "img_wakil": data.img_wakil,
      "visi": data.visi,
      "misi": data.misi,
      "updated_at": knex.fn.now(),
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

routes.delete('/kandidat/:id', async(req, res) => {
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
routes.post('/login', async(req, res) => {
  try {
    //body & params request
    let nim = req.body.nim;
    let password = req.body.password;

    //get mahasiswa by nim
    let data = await knex('mahasiswa').where('nim', nim).innerJoin('pemilih', 'mahasiswa.id_mhs', 'pemilih.id_mhs').select('mahasiswa.*', 'id_pemilih', 'status');

    //compare password
    if (bcrypt.compareSync(password, data[0].password)) {
      //get admin
      let admin = false;
      let i = 0;
      const role = await knex('admin');
      while (i <= data.length + 1) {
        if (data[0].id_mhs == role[i].id_mhs) {
          admin = true;
        }
        i++;
      };
      //success response
      res.status(200).send({
        success: true,
        data,
        admin
      });
    } else {
      //failed response
      res.status(404).send({
        success: false
      });
    }
  } catch (e) {
    //error log
    console.log(e);
    next(e)
  }
})

//pemilih routes controller
routes.get('/pemilih', async(req, res) => {
  try {
    let data = await knex('pemilih').innerJoin('mahasiswa', 'mahasiswa.id_mhs', 'pemilih.id_mhs').select('id_pemilih', 'pemilih.id_mhs', 'nim', 'nama', 'mahasiswa.password', 'status');

    res.status(200).send({
      success: true,
      data: data
    })
  } catch (e) {
    console.log(e)
  }
})

//pemilih random password
routes.get('/pemilih/:id', async(req, res) => {
  try {
    let id = req.params.id;

    let password = (Math.floor(100000 + Math.random() * 900000)).toString();
    const hash = bcrypt.hashSync(password, 10);

    await knex('mahasiswa').where('id_mhs', id).update({
      "password": hash,
    });

    res.status(201).send({
      success: true,
      data: password
    })
  } catch (e) {
    console.log(e)
  }
})

//pemilih Dashboard
routes.get('/dashboard', async(req, res) => {
  try {
    //count jumlah pemilih
    const jumlah_pemilih = await knex('pemilih').count('id_pemilih AS jumlah');
    //select count pemilih where status = 1
    const voted = await knex('pemilih').count('id_pemilih AS jumlah').where('status', 1);
    const total = ((voted[0].jumlah / jumlah_pemilih[0].jumlah) * 100).toFixed(2);
    //select count kandidat
    const kandidat = await knex('kandidat').count('id_kandidat AS jumlah');
    //select periode pemilihan
    const periode = await knex('periode').select('end');

    res.status(201).send({
      success: true,
      data: {
        jumlah_pemilih: jumlah_pemilih[0].jumlah,
        voted: total,
        kandidat: kandidat[0].jumlah,
        periode: periode[0].end.toLocaleDateString()
      },
    })
  } catch (e) {
    console.log(e)
  }
})

// vote result
routes.get('/result', async(req, res) => {
  try {
    const kandidat = await knex('kandidat')
      .select('id_kandidat', 'no_urut', 'nama AS nama_ketua', 'nama_wakil', 'img_ketua', 'img_wakil', 'jumlah')
      .join('mahasiswa', 'mahasiswa.id_mhs', 'kandidat.id_ketua')
      .leftJoin(knex('vote').select('id_kandidat AS idk')
        .count('id_kandidat as jumlah')
        .groupBy('id_kandidat').as('voted'), 'voted.idk', 'kandidat.id_kandidat')

    const total_voted = await knex('vote').count('id_vote AS total')

    kandidat.map((val, idx) => {
      if (kandidat[idx]['jumlah'] == null) kandidat[idx]['jumlah'] = 0
      kandidat[idx]['persentase'] = ((kandidat[idx]['jumlah'] / total_voted[0]['total']) * 100).toFixed(2)
    })

    res.status(200).send({
      success: true,
      data: {
        kandidat: kandidat,
      }
    })
  } catch (e) {
    console.log(e)
  }
})

// vote
routes.post('/vote/:id_pemilih/:id_kandidat', async(req, res) => {
  try {
    let voter = req.params.id_pemilih

    await knex('vote').insert({
      "id_pemilih": voter,
      "id_kandidat": req.params.id_kandidat,
      "created_at": knex.fn.now(),
      "updated_at": knex.fn.now(),
    })
    await knex('pemilih').where('id_pemilih', voter).update({
      "status": 1,
      "updated_at": knex.fn.now(),
    })

    res.status(201).send({ success: true })
  } catch (e) {
    console.log(e)
  }
})

routes.post('/pemilih', async(req, res) => {
  try {
    // body request
    let nim = req.body.nim;
    let name = req.body.name;

    // check nim has registered
    let mhs = await knex('mahasiswa').where('nim', nim).select('id_mhs');
    if (mhs[0] === undefined) {
      //response
      res.status(400).send({
        success: false,
        message: "NIM has not registered",
      })
    }

    // add new pemilih
    let id = await knex('pemilih').insert({
        "id_mhs": mhs[0].id_mhs,
        "status": 0,
        "created_at": knex.fn.now(),
        "updated_at": knex.fn.now(),
      })
      //response
    res.status(201).send({
      success: true,
      message: "Successfully insert pemilih",
      data: {
        'id_pemilih': id[0],
        'id_mhs': mhs[0].id_mhs,
        'status': 0
      }
    })
  } catch (e) {
    //error log
    console.log(e)
  }
})

routes.put('/periode', async(req, res) => {
  try {
    // body & params request
    let start = req.body.start;
    let end = req.body.end;

    // update kandidat by id
    let kandidat = await knex('periode').where('id_periode', 1).update({
      "start": start,
      "end": end,
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

routes.delete('/pemilih/:id', async(req, res) => {
  try {
    //delete mahasiswa by id
    await knex('pemilih').where('id_pemilih', req.params.id).del()

    //response
    res.status(200).send({
      success: true,
      message: 'Successfully delete pemilih'
    })
  } catch (e) {
    //error log
    console.log(e)
  }
})

module.exports = routes;