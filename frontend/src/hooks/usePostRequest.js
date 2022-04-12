//imports?
import { useEffect, useState } from "react"

function usePostRequest(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const postData = async () => {
      setLoading(true)
      const requestOption= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"data":{"title":"Super gra"}})
      };
 
      try {
        //body
        const res = await fetch(url, requestOption)
        

        setLoading(false)
      }
      catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    postData()
  }, [])

  return { loading, error, data }
}

export default usePostRequest