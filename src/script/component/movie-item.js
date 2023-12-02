class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:'open'});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }

            .movie-poster {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }

            .movie-card {
                padding: 24px;
            }

            .movie-card h4 {
                margin-top: 10px;
            }

            .movie-card p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
        </style>

        <section class="movie-card">
            <img class="movie-poster" src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" alt="Poster">
            <h2>${this._movie.original_title}</h2>
            <h4>Rating: ${this._movie.vote_average}</h4>
            <p>${this._movie.overview}</p>
        <section>
        `;
    }
}

customElements.define('movie-item', MovieItem);