import React, { useState } from "react";
//import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { CONTRACTOR_PROFILE } from '../utils/queries';

import Auth from '../utils/auth';


const SearchProfile = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const {loading, data } = useQuery(CONTRACTOR_PROFILE);
    console.log(data);
    return <div>
            <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search a Contractor</span>
        </label>
        <input
        value={searchFilter}
        type="text"
        id="header-search"
        placeholder="Search a Contractor"
        name="search"
        onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button type="submit" onClick = {() => loading({
            variables: { filter: searchFilter }
        })} >Search</button>
    </form>
        {/* {CONTRACTOR_PROFILE &&
        CONTRACTOR_PROFILE.map((CONTRACTOR_PROFILE, index) => (
            <data key={CONTRACTOR_PROFILE.id}>{CONTRACTOR_PROFILE} </data>
            ))}; */}
            
</div>
}
export default SearchProfile;