import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization:
                    'Client-ID 0ad8e735c196826eceec13223b619dfc564316da76167c69168e04f8f4051e04'
            }
        })
    }

    render() {
        return <div>
            <div className="ui container" style={{ marginTOp: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        </div>
    }
}

export default App