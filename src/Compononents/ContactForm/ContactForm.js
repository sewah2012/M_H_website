import './ContactForm.css'
import React, { useState } from 'react'
import { Button, Grid, Snackbar, TextField } from '@material-ui/core'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return console.log('working')
    }
    setOpen(false)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    // db.collection('contact').add({
    // 	name: name,
    // 	email: email,
    // 	message: message,
    // })
    // 	.then(() => {
    // 		setOpen(true);
    // 	})
    // 	.catch((error) => {
    // 		alert(error.message)
    // 	})

    setOpen(true)

    console.log(name, email, message)

    setName('')
    setEmail('')
    setMessage('')
  }
  // function Alert(props) {
  // 	return <MuiAlert elevation={6} variant='filled' {...props} />;
  // }

  return (
    <div>
      <br />
      <br />

      <form noValidate>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container item>
            <TextField
              require={true}
              type="text"
              id="name"
              label="Name"
              variant="outlined"
              autoComplete="new-name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <br />
          <br />
          <Grid container item>
            <TextField
              required
              type="email"
              id="email"
              label="Email"
              variant="outlined"
              autoComplete="new-email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <br />
          <br />
          <Grid container item>
            <TextField
              required
              type="text"
              id="message"
              label="Message"
              fullWidth
              multiline
              rows={4}
              value={message}
              variant="outlined"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid container item>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              onClick={onSubmitHandler}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
      {/* <Alert onClose={handleClose} severity='success'>
					message submitted successfully!
          		</Alert> */}
      {/* message submitted successfully! */}
      {/* </Snackbar> */}
    </div>
  )
}

export default ContactForm
