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

//delete mahasiswa by id
routes.delete('/mahasiswa/:id', async(req, res) => {
  try {
    let id = req.params.id

    let is_kandidat = await knex('kandidat').where('id_ketua', id).orWhere('id_wakil', id)

    let message = ''
    if (is_kandidat.length != 0)
      message = 'Hapus mahasiswa dari kandidat terlebih dahulu'
    else {
      // check if mhs exists in pemilih table
      let voter = await knex('pemilih').where('id_mhs', id)
      if (voter.length != 0) { // if exists in pemilih table
        // if mhs has voted
        if (voter[0].status)
          await knex('vote').where('id_pemilih', voter[0].id_pemilih).del()
        await knex('pemilih').where('id_pemilih', voter[0].id_pemilih).del()
      }

      // check if mhs is an admin
      let admin = await knex('admin').where('id_mhs', id)
      if (admin.length != 0)
        await knex('admin').where('id_admin', admin[0].id_admin).del()

      await knex('mahasiswa').where('id_mhs', id).del()
      message = 'Successfully delete mahasiswa'
    }

    //response
    res.status(200).send({
      success: true,
      message
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
    let data = await knex.from('kandidat')
      .innerJoin('mahasiswa as m1', 'm1.id_mhs', 'kandidat.id_ketua')
      .innerJoin('mahasiswa as m2', 'm2.id_mhs', 'kandidat.id_wakil')
      .select('id_kandidat', 'no_urut', 'kandidat.id_ketua', 'kandidat.id_wakil', 'm1.nama as nama_ketua', 'm2.nama as nama_wakil', 'visi', 'misi', 'img_ketua', 'img_wakil');

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

    let voted = await knex('vote').where('id_kandidat', id)
    if (voted.length != 0) {
      let voter_id = voted.map((val, idx) => {
        return val['id_pemilih']
      })
      await knex('pemilih').whereIn('id_pemilih', voter_id).update({ status: false, updated_at: knex.fn.now() })
      await knex('vote').where('id_kandidat', id).del()
    }

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
        data: {
          id_mhs: data[0].id_mhs,
          id_pemilih: data[0].id_pemilih,
          nim: data[0].nim,
          nama: data[0].nama,
          status: data[0].status,
        },
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
      .select('id_kandidat', 'no_urut', 'm1.nama AS nama_ketua', 'm2.nama AS nama_wakil', 'img_ketua', 'img_wakil', 'jumlah')
      .join('mahasiswa as m1', 'm1.id_mhs', 'kandidat.id_ketua')
      .join('mahasiswa as m2', 'm2.id_mhs', 'kandidat.id_wakil')
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

//delete mahasiswa by id
routes.delete('/pemilih/:id', async(req, res) => {
  try {
    let id = req.params.id

    let voted = await knex('vote').where('id_pemilih', id)
    if (voted.length != 0)
      await knex('vote').where('id_vote', voted[0].id_vote).del()

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

// get mahasiswa to add kandidat
routes.get('/kandidat/add/get-student', async(req, res) => {
  try {
    let data = await knex('mahasiswa')
      .leftJoin('kandidat as k1', 'mahasiswa.id_mhs', 'k1.id_ketua')
      .leftJoin('kandidat as k2', 'mahasiswa.id_mhs', 'k2.id_wakil')
      .where('k1.id_ketua', null).where('k2.id_wakil', null)
      .select('id_mhs', 'nim', 'nama')

    res.status(200).send({
      success: true,
      data
    })
  } catch (e) {
    console.log(e)
  }
})

// get mahasiswa that not vote yet
routes.get('/pemilih/add/get-student', async(req, res) => {
  try {
    let data = await knex('mahasiswa')
      .leftJoin('pemilih', 'pemilih.id_mhs', 'mahasiswa.id_mhs')
      .where('pemilih.id_pemilih', null)
      .select('mahasiswa.id_mhs', 'nim', 'nama')

    res.status(200).send({
      success: true,
      data
    })
  } catch (e) {
    console.log(e)
  }
})

module.exports = routes;