import useFetch from "../hooks/useFetch";
const Account = () =>
{
    const { loading, error, data } = useFetch('http://localhost:1337/api/users/1')
    console.log(data)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    
    return (
        <div>
        <h1>{data.username}</h1>
        <img src="http://localhost:1337/" alt="" />
        </div>
    );
}

export default Account