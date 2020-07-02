import {autorun, computed, observable} from "mobx";
import {fetchGenres} from "./mock";

class Store {
    @observable _currentGenre = null;
    @observable genres = [];

    constructor() {
        autorun(() => console.log(this.report));
    }

    @computed get genresCount() {
        return this.genres.length;
    }

    @computed get currentGenre() {
        return this._currentGenre;
    }

    set currentGenre(genre) {
        if (this.genres.includes(genre)) {
            this._currentGenre = genre;
        }
    }

    loadGenres(genres) {
        fetchGenres({offset: this.genres.length}).then((genres) => {
            this.genres = [...this.genres, ...genres];
        });

    }
}

const store = new Store();

export default store;