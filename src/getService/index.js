import { API_URL } from './const'


const getMovieBySearch = async (search) => {
  console.log('started fetch')

  const options = {
    method: 'GET'
  }

  try {
    const response = await fetch(API_URL + `&s=${search}`, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data.Search)
      return data.Search
    } else {
      console.log('Response failed')
    }
  } catch (e) {
    console.log(e)
  }
}


export default getMovieBySearch
