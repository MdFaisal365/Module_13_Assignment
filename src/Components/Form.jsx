import {useState, useRef} from 'react';

const Form = () => {
    const myref = useRef();

    let [object, setObject] = useState({
        fName: "",
        lName: "",
        email: "",
        mobile: "",
        address: ""

});

const onStateChange = (property, value)=>{
    setObject((previousObj)=>{
        return ({
            ...previousObj,
            [property]: value,
        })
    })
}

const submittedData = (e)=>{
    e.preventDefault();

    myref.current.classList.remove('hiddenInfoList');
    myref.current.classList.add('showInfoList');

}


    return (
        <>
        <div>
            <div className=''>
                <h3 className='font-color'>Give Your All Information :</h3>
            </div>
            <form onSubmit={submittedData}>
                <input type="text" placeholder='First Name'  onChange={(e)=>{onStateChange("fName", e.target.value)}}/>
                <br />
                <input type="text" placeholder='Last Name' onChange={(e)=>{onStateChange("lName", e.target.value)}}/>
                <br />
                <input type="text" placeholder='Email' onChange={(e)=>{onStateChange("email", e.target.value)}}/>
                <br />
                <input type="text" placeholder='Mobile' onChange={(e)=>{onStateChange("mobile", e.target.value)}}/>
                <br />
                <input type="text" placeholder='Address' onChange={(e)=>{onStateChange("address", e.target.value)}}/>
                <br />

                <button type='submit'>Send</button>
            </form>
        </div>
        <div>
            <div>
                <h4 className='font-color'>please your Check data:</h4>
            </div>
            <ul className='hiddenInfoList' ref={myref}>
                <div className='listItems'>
                <li className='one'>First Name: {object['fName']}</li>
                <li className='two'>Last Name: {object['lName']}</li>
                <li className='three'>Email: {object['email']}</li>
                <li className='four'>Mobile: {object['mobile']}</li>
                <li className='five'>Address: {object['address']}</li>
                </div>
            </ul>
        </div>
        </>
    );
};

export default Form;