import React, { useState } from 'react'
import "../CSS/Contact.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import Modal from "react-modal";
Modal.setAppElement('#root');


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
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [subject, setSubject] = useState("");
    var [message, setMessage] = useState("");

    const classes = useStyles();
    const subjectClass = subjectStyles();
    var [showModal, setShowModal] = useState(false);



    function onSubmit() {
        axios.post('http://localhost:5100/contact', {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message,
        })
            .then((response) => {
                // console.log(response);
                if (response.status == 200) {
                    console.log("done");
                    setShowModal(true);
                
                }
                else {
                    console.log("Failed");
                }
            }, (error) => {
                console.log(error);
            });
    }


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

                <TextField onChange={(event) => setName(event.target.value)} className={classes.root} label="Name" variant="filled" />
                <TextField onChange={(event) => setEmail(event.target.value)} className={classes.root} label="Email" variant="filled" />

            </form>
            <br></br>
            <TextField onChange={(event) => setSubject(event.target.value)} className={subjectClass.root} label="Subject" variant="filled" />
            <br></br>
            <br></br>
            <TextField onChange={(event) => setMessage(event.target.value)} className={subjectClass.root} label="Your Message" variant="filled" rows={6} multiline={true} />
            <br></br>
            <br></br>
            <Button onClick={() => onSubmit()} variant="contained" color="primary">
                Send Me
            </Button>

            <Modal className="modal" contentLabel="Example Modal" isOpen={showModal} onRequestClose={() => setShowModal(false)} style={
                {

                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',



                    },
                    content: {
                        backgroundColor: "white",
                        color: "black",
                    }

                }
            }>
                <h1>This is title</h1>
                <p>Hi there! I am a modal.</p>
                <button onClick={() => setShowModal(false)}>Close me</button>
            </Modal>



        </div>
    )
}

export default ContactPage
