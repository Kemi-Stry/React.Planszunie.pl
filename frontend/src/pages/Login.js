const Login = () =>
{
    return(
        <>
        <div className="form">
            <h1>Logowanko</h1>
            <form>
                <input type="text" name="identifier" placeholder="Nazwa użytkownika"/>
                <input type="password" name="password" placeholder="Hasło"/>
                <input type="submit" value="Zaloguj"/>
            </form>
        </div>
        </>
    )
    
}
export default Login