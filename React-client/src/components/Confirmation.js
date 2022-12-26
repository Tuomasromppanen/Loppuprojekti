import '../styles/Confimation.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Confirmation() {

    let navigate = useNavigate();

    useEffect(() => {
        // Set a timer to navigate to the home page after 5 seconds
        const timer = setTimeout(() => {
          navigate('/');
        }, 3000);
    
        // Return a cleanup function to clear the timer when the component unmounts
        return () => clearTimeout(timer);
      }, []);

    return (
        <div id='format'>
            <div className='container-fluid'>
            <div className='row'>
            <div className='col-12'>
            <h1>Kiitos tilauksesta</h1>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Confirmation