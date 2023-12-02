class DataSource {
    static searchMovies(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=fd29abd0b24f07110c8af31a1874e36a&query=${keyword}`)
            .then(Response => {
                return Response.json();
            })
            .then(ResponseJSon => {
                if (ResponseJSon.results) {
                    return Promise.resolve(ResponseJSon.results);
                } else {
                    return Promise.reject(`${keyword} tidak ada!`);
                }
            });
    }
}

export default DataSource;