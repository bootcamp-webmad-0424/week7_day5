import axios from 'axios'

class AuthServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/auth`
        })
    }

    signupUser(userData) {
        return this.axiosApp.post('/signup', userData)
    }

    loginUser(userData) {
        return this.axiosApp.post('/login', userData)
    }

    verifyUser(token) {
        return this.axiosApp.get('/verify',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

    }


}

const authServices = new AuthServices()

export default authServices