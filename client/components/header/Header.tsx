// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/master/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import SearchBar from './SearchBar.tsx'

const Header: React.FC<Props> = () => {
    return (
        <div className='headerContainer'>
            <SearchBar/>
            <h1 className='headerTextRight'>Hello Right!</h1>
        </div>
    )
}

export default Header