import React from "react";
import { useState } from "react";
import './searchButton.css'

const SearchButton = ({onChange, onSubmit}) => {
   // const [message,setMessage]=useState('')

    return (
     <div className="search">
	<label for="main-search" className="is-hidden"> Search</label>
	<div className="facetwp-facet facetwp-type-autocomplete" 
    data-name="main-search" 
    data-type="autocomplete">
        <input type="text" 
        className="facetwp-autocomplete fcomplete-enabled" 
         placeholder="Search..."
        onChange={onChange}
        //  Remember to use onChange={e=>{setCount(e.target.value)}} to update the values
        autocomplete="off"/>
            <div className="fcomplete-wrap fcomplete-hidden">
                <div className="fcomplete-status"></div>
                <div className="fcomplete-results"></div>
            </div>
            <input type="button" 
            className="facetwp-autocomplete-update" 
            value="Search"
            onSubmit={onSubmit}/>

            </div>
	</div>
    
    )
}

export default SearchButton;