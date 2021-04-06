import React from 'react'
import "../CSS/Contact.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        marginLeft: '0px',
        marginRight: "1vw",
        width: '20vw',

        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#08FDD8",

        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple",

        }
    },
    input: {
        color: "green"
    }
});

const subjectStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        width: '41vw',


        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#08FDD8",

        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "purple",

        }
    },
    input: {
        color: "green"
    }
});



function ContactPage() {

    const classes = useStyles();
    const subjectClass = subjectStyles();



    return (
        <div className="Contact">

            <div className="contact-title-description">
                <h1>Contact Me</h1>
                <p>
                    I’m interested in freelance opportunities – especially ambitious<br></br> or large projects. However, if you have other request or  question,<br></br> don’t hesitate to use the form.
       </p>

            </div>
            <br></br>
            <form>

                <TextField className={classes.root} label="Name" variant="filled" />
                <TextField className={classes.root} label="Email" variant="filled" />

            </form>
            <br></br>
            <TextField className={subjectClass.root} label="Subject" variant="filled" />
            <br></br>
            <br></br>
            <TextField className={subjectClass.root} label="Your Message" variant="filled" rows={6} multiline={true} />
            <br></br>
            <br></br>
            <Button variant="contained" color="primary">
                Send Me
            </Button>

        </div>
    )
}

export default ContactPage
