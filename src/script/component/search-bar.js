class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:'open'})
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }

            .search-container input {
                width: 75%;
                padding: 16px;
                border: 1px solid #279EFF;
                font-weight: bold;
            }

            .search-container input:focus {
                outline: 0;
            }

            .search-container input::placeholder {
                color: #279EFF;
                font-weight: normal;
            }

            .search-container button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #279EFF;
                color: white;
                border: 0;
                border-radius: 5px;
                text-transform: uppercase;
            }
            
            @media screen and (max-width: 550px) {
                .search-container {
                    flex-direction: column;
                    position: static;
                    padding: 12px;
                }

                .search-container input {
                    width: 100%;
                    margin-bottom: 12px;
                }

                .search-container button {
                    width: 100%
                }
            }
        </style>
        <section id="search-container" class="search-container">
            <input placeholder="Cari Film. . ." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Cari</button>
        </section>
        `;

        this.shadowDOM.querySelector('#searchButtonElement')
            .addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);