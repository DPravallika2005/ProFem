const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
var passwordHash = require('password-hash');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const serviceAccount = require('./key2.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),

});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
    console.log("started");
  });

app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.post('/signupSubmit', async (req, res) => {
    const  mail = req.body.email;
    const username = req.body.username;
    const password = passwordHash.generate(req.body.password1);
    try {
      console.log('Email:', mail);
      console.log('Username:',username);
      const userRef = admin.firestore().collection('users').doc(mail);
      const userDoc = await userRef.get();
  
      if (userDoc.exists) {
        res.status(400).json({ error: 'Account with this email already exists' });
      } else {
        await userRef.set({ username, password });
        res.redirect('/main');
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
app.listen(port, () => {
    console.log("Sever{port}");
  });