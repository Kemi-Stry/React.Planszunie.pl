const Register = () =>
{

    return(
        <div>
            <h1>Rejestracja</h1>
            <p>Nick:</p>
            <input type="text" />
            <p>Hasło:</p>
            <input type="text" />
            <p>Powtórz Hasło:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="text" />
            <br />
            <br />
            <input type="checkbox"/> 
            <p>Akceptuje regulamin</p>
            <br />
            <br />
            <button>Zarejestruj się!</button>{' '}
            
        </div>
     
    )
    
}
export default Register