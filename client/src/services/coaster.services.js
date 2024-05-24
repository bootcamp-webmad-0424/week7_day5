import axios from 'axios'

class CoasterServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/coasters`
        })
    }

    getAllCoasters() {
        return this.axiosApp.get('/')
    }

    getOneCoaster(coasterId) {
        return this.axiosApp.get(`/${coasterId}`)
    }

    saveCoaster(coasterData) {
        return this.axiosApp.post('/', coasterData)
    }
}

const coasterServices = new CoasterServices()

export default coasterServices