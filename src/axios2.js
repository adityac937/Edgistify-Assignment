import axios from "axios"

export default axios.create({
    baseURL: `https://datacom-97f2c.firebaseio.com/`
})