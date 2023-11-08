const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Replace this with your own database or authentication system
const users = [{ username: 'user', password: 'pass' }];

app.get('/', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form method="post" action="/login">
      <label>Username:</label>
      <input type="text" name="username" required />
      <br />
      <label>Password:</label>
      <input type="password" name="password" required />
      <br />
      <input type="submit" value="Submit" />
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Replace with your own way of setting a login session
    req.session.loggedIn = true;
    res.send('You are logged in!');
  } else {
    res.send('Invalid username or password');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
