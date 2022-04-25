const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '094fa8790554671ed3730870d23cf590',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;