import { useState } from "react"

const usePostRequest = async (url, body) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

      setLoading(true)

      const requestOption= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
 
      try {
        await fetch(url, requestOption)
        setLoading(false)
      }
      catch (error) {
        setError(error)
        setLoading(false)
      }
      return { loading, error, data }
    }    
export default usePostRequest