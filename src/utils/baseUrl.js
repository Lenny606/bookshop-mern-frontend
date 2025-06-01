export const getBaseUrl = () => {
    if (window.location.hostname === 'localhost') {
        return  import.meta.env.VITE_BASE_DEV_URL
    }
    return import.meta.env.VITE_BASE_URL 
}