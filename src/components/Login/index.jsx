import React, {useState} from 'react';
import {auth} from '../../firebase-config'
import {Button} from '@material-ui/core'

const Login = () => {

    let [data, setData] = useState ({
        email: '',
        password: ''
    })

    const handleInputChange = (e) =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const resetLogin = () =>{
        setData({
            email:'',
            password: ''
        })
    }

    const authFirebase = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(data.email, data.password)
        .then( () =>{
            console.log('has ingresado :)')
            console.log(auth.currentUser)
            resetLogin()
        })
        .catch(function(e) {
            let errorCode = e.code;
            let errorMessage = e.message;
            console.log(errorMessage)
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            console.log("has cerrado sesión")
            console.log(auth.currentUser)
        })
        .catch((e) =>{
            console.log(e.message)
        })
    }

    return ( 
        <div>
            <form onSubmit={authFirebase}>
                <label>Correo eléctronico</label>
                <input type="email" name="email" required="requiered" value={data.email} onChange={handleInputChange}></input>
                <label>Contraseña</label>
                <input type="password" name="password" required="required" value={data.password} onChange={handleInputChange}></input>
                <input type="submit" value="Ingresar"></input>
            </form>
            <Button variant="contained" color="secondary" onClick={signOut}>Cerrar Sesión</Button>
        </div>
     );
}
 
export default Login; 