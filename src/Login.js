import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {

    const [email,setEmail] = useState(" ");
    const [password,setPassword] = useState(" ");
    const [name,setName] = useState(" ");
    const [profilePic,setProfilePic] = useState(" ");
    const dispatch = useDispatch();


    const loginToApp = (e)=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileURL: userAuth.user.photoURL,

            }));
        })
        .catch((error)=> alert(error));

        // auth
    };

    const register = () => {
        // e.preventDefault();

        if(!name) {
            return alert("Please enter a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                     login ({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            });
        })
        .catch((error ) => alert(error.message));
    }


    return (
        <div className='login'>
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKYCOCKElhyAiAp_F35EeC0eqIyevleerdI0YRo7rTcWEv2F0LGvxKJU1VoPwG8FnsA&usqp=CAU"
            alt="" 
            />

            <form>
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name" type="text" 
                />

                <input 
                value={profilePic} 
                onChange={(e)=> setProfilePic(e.target.value)}
                placeholder="Profile pic Url (optional)" type="text"
                />
                
                <input 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="email" type="email" 
                />

                <input 
                value = {password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" type="password" />

                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>


            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
