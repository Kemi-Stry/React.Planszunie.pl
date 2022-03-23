const Account = () =>
{
    const fetch = async () =>
    {
        fetch("http//localhost:1337/api/users/1")
       .then((response) => response.json())
       then((responseJson) => {
        console.log(responseJson)
    })
    

    

     

   // const datamap = data.map ((data) => 
   // <div>
    //    <h1>{data.username}</h1>
      //  <img src="{data.avatar}" alt="" />
       // </div>
   // );
    


    return (
        datamap
    );
}
}
export default Account