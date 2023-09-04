import {useState} from 'react'; // use hooks to set the name and use it as function


const Register = () => {

    const [name , setName ] = useState(" ");
    const [email , setEmail ] = useState(" ");
    const [password , setPassword ] = useState(" ");

    /* 
      added handleSubmit to prevent the page refresh on submit by default
    
    */
    const handleSubmit = (e) => {
        e.eventPreventDefault(); 
        console.table(name , email , password);
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Register</h1>
           

           <div className="container col-md-4 offset-md-4 pb-5">
               <form onSubmit={handleSubmit}>
                <input type="text" 
                 className="form-control mb-4 p-3"
                 value ={name}
                 onChange = {(e) =>setName(e.target.value)}
                 placeholder='Enter Name'
                 required
                 />


                <input type="email"
                 className="form-control mb-4 p-3"
                 value ={email}
                 onChange = {(e) =>setEmail(e.target.value)}
                 placeholder='Enter Email'
                 required
                 />

                <input type="password" 
               
                 className="form-control mb-4 p-3"
                 value ={password}
                 onChange = {(e) =>setPassword(e.target.value)}
                 placeholder='Enter password'
                 required
                 />

                 <br/>
                 <button type="submit" className='btn btn-block btn-primary p-2'>
                    Submit
                 </button>
               </form>

           </div>

        </>
    );
};

export default Register; 