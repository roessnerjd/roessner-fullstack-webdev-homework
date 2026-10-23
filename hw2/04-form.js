// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

/*
Use file 04-form.js and run this file with the following command: node 04-form.js
- Open localhost to view the web page
Create the necessary client and server files to submit a form using Express.js.
Create the following routes for the form submission behavior:
- /form should return a form with input elements for username, email, comments, newsletter sign up, and submit button.
- /submit should return all the data the user entered.
*/

const port = process.env.PORT || 5001;
const express = require('express');
const app = express();

// used to read data
app.use(express.urlencoded({ extended: false }));

// display form
app.get('/form', (req, res) => {
  res.send(`
    <h1>Form Exercise</h1>

    <form action="/submit" method="POST">
      <label>Username:</label>
      <input type="text" name="username" required>
      <br><br>

      <label>Email:</label>
      <input type="email" name="email" required>
      <br><br>

      <label>Comments:</label>
      <textarea name="comments"></textarea>
      <br><br>

      <label>
        <input type="checkbox" name="newsletter" value="Yes">
        Sign up for newsletter
      </label>
      <br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// submit form request
app.post('/submit', (req, res) => {
  const { username, email, comments, newsletter } = req.body;

  res.type('text');
  res.send(`Username: ${username}
Email: ${email}
Comments: ${comments}
Newsletter: ${newsletter || 'No'}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
