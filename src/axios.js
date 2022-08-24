import { create } from 'axios'

const axiosInstance = create({
    baseURL: 'https://api.github.com/',
    headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `token ${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`
    }
})

export default axiosInstance
