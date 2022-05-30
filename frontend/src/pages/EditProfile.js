import './styles/EditProfile.css'
import { useEffect, useState, useRef } from "react"
import { getID, getToken } from '../components/Auth'
import Header from '../components/Header' 

const EditProfile = () => {
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [picture, setPicture] = useState({})

    const descriptionRef = useRef()
    const token = 'Bearer '+getToken()

    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const response = await fetch('http://localhost:1337/api/users/me', {
                headers: {Authorization: token},
            })

            if(!response.ok)
            {
                setError("Błąd 😿")
            }
            else
            {
                setError(null)
                const json = await response.json()
                setData(json)
                setLoading(false)
            }
        }  
        fetchData()
    },[])
    console.log(data)

    const image = (e) =>
    {
        setPicture(e.target.files[0])
        console.log(picture)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        const file = picture
        formdata.append('files', file)
        formdata.append('refId', getID())
        formdata.append('ref', data.user_id)
        formdata.append('field', 'avatar')
        
         await fetch('http://localhost:1337/api/users/'+data.id, {
             method: 'PUT',
             headers: {Authorization: token, 'Content-Type': 'application/json'},
             body: JSON.stringify({"description":descriptionRef.current.value})
         })

         await fetch('http://localhost:1337/api/upload/', {
            method: 'POST',
             headers: {Authorization: token},
            body: formdata
        })
    }

    return(
        <>
            <Header/>
            <form id="editProfile "onSubmit={onSubmit}>
                <div className=''>
                    <input type="file" id='avatar'className='avatarInput' onChange={image} accept=".png, .jpg, .jpeg, .gif" />
                    <label htmlFor="avatar" id='avatarLabel' className='avatarLabel'><div className="imgInput"></div></label>
                    <textarea form='editProfile' className='textarea' ref={descriptionRef} defaultValue={data.description} />
                    <input type="submit" value="zapisz"/>
                </div>
            </form>
       </>
    )
}
export default EditProfile
