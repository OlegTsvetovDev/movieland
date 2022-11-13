import { API_URL } from './const'


const getMovieBySearch = async (search) => {
  console.log('starting fetch')

  const options = {
    method: 'GET'
  }

  try {
    const response = await fetch(API_URL + `&s=${search}`, options)
    if (response.ok) {
      const data = await response.json()
      if (data.Response === 'False') {
        console.log('Response failed: "Movie not found!"')
        return []
      }
      return data.Search
    }
  } catch (e) {
    console.log(e)
  }
}


export default getMovieBySearch
