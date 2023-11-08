
import NavBar from '../Components/NavBar';
import Form from '../Components/Form';

const Contact = () => {
    return (
        <div className='container'>
            <NavBar/>
            <div className='header'>
                <h2>Contact</h2>
            </div>
            <div>
                <h2 className='contact-h2'>WE ARE APPROACHABLE</h2>
                <p className='contact-p'>We believe that a healthy relationship keeps us sailing across the ocean. Leave us your details to strengthen our on-going alliance.</p>
            </div>
            <div className='formContainer'>
                <Form/>
            </div>

        </div>
    );
};

export default Contact;