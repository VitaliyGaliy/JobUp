import express from 'express'
import mongodb from 'mongodb'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/jobUp';


const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

mongodb.MongoClient.connect(dbUrl, (err, db) => {

  app.get('/api/tasks', (req, res) => {
    db.collection('tasks').find({}).toArray((err, tasks) => {
      res.json({ tasks })
    });
  });

  app.post('/api/tasks', (req, res) => {
    const { task } = req.body;
    console.log('req.body', req.body);
    db.collection('tasks').insert({ task }, (err, result) => {
      if (err) {
        res.status(500).json({ errors: { global: "Something went wrong"}});
      } else {
        res.json({ tasks: result.ops[0] })
      }
    })
  });

  app.put('/api/tasks/:_id', (req, res) => {

      const {description, index, name, sentence, addressObj} = req.body.t;
      console.log('PU', req.params)
      db.collection('tasks').findOneAndUpdate(
        { _id: new mongodb.ObjectId(req.params._id) },
        { $set: { description, index, name, sentence, addressObj } },
        { returnOriginal: false },
        (err, result) => {
          if (err) { res.status(500).json({ errors: { global: err }}); return; }

          res.json({ tasks: result.value });
        }
      );
  });

  app.get('/api/tasks/:_id', (req, res) => {
    db.collection('tasks').findOne({ _id: new mongodb.ObjectId(req.params._id )}, (err, task) => {
      res.json({ task })
    })
  })

  app.delete('/api/tasks/:_id', (req, res) => {
    db.collection('tasks').deleteOne({ _id: new mongodb.ObjectId(req.params._id)}, (err, r) => {
      if (err) {re.status(500).json({ errors: { global: err }}); return}

      res.json({});
    })
  })

  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Some errors has happened"
      }
    })
  })

  app.listen(8000, () =>console.log('Server is running 8000') )
})
