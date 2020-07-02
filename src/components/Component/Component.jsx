import React from "react";
import {observer} from "mobx-react";

@observer
class Component extends React.Component {
    render() {
        const {store} = this.props;
        return <div>
            <button type={`button`} onClick={() => store.loadGenres()}>Load more</button>
            <h2>{store.currentGenre}</h2>
            <ul>
                {
                    store.genres.map((g) => {
                        return <li key={g}>
                            <a href={`#${g}`} onClick={() => store.currentGenre = g}>{g}</a>
                        </li>
                    })
                }
            </ul>
        </div>;
    }
}

export default Component;