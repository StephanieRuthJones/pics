import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 0ad8e735c196826eceec13223b619dfc564316da76167c69168e04f8f4051e04'
    }
})

