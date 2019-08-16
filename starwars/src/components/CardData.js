import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateCard from './Card';

function CardData() {
    const [starData, setStarData] = useState([]);
    console.log(starData)
    useEffect(() => {
    axios
        .get('https://swapi.co/api/people/')
    .then(res => setStarData(res.data.results))
        .catch(err => console.log(err))
    },[])
    return starData.map(item => <CreateCard data={item}/>)
}

export default CardData;