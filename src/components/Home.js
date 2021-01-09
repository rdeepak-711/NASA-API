import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <div className="home">
            <ul>
                <li>
                    <Link className="home-link" to="/nasaphoto">Astronomy Picture of the day</Link>
                </li><br/>
            </ul>
        </div>
    )
}