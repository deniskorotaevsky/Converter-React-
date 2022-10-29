import React, { useEffect, useState } from 'react';
import { Button, FormControl, Paper, Select, TextField } from '@material-ui/core';
import '../App.css';
import Axios from 'axios';

const Converter = () => {
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [countru, setCountry] = useState([])
    const [countru2, setCountry2] = useState([]);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);

    useEffect(() => {
        getdata();
    }, [])

    async function getdata() {
        const result = await Axios.get('https://cdn.cur.su/api/tcmb.json');
        console.log(result.data);
        setCountry(result.data.rates);
        setCountry2(result.data.rates);
    }

    function convert(e) {
        e.preventDefault();
        let num = (value2 / value1) * text1;
        setText2(num);
    }

    return (
        <div>
            <Paper className='paper'>
                <h3>Currency Converter</h3>
                <form onSubmit={convert}>

                    <div>
                        <TextField variant='outlined' value={text1 || ''} onChange={(e) => setText1(e.target.value)} autoComplete='off' />
                        <FormControl className='dropdown' variant='outlined' onChange={(e) => setValue1(e.target.value)} >

                            <Select native>
                                {Object.keys(countru).map((value, index) => (<option key={index} value={countru[value]}>{value}</option>))}
                            </Select>
                        </FormControl >
                    </div>

                    <div>
                        <TextField variant='outlined' value={text2 || ''} />
                        <FormControl className='dropdown' variant='outlined' onChange={(e) => setValue2(e.target.value)} >

                            <Select native>
                                {Object.keys(countru2).map((value, index) => (<option key={index} value={countru[value]}>{value}</option>))}
                            </Select>
                        </FormControl >
                    </div>
                    <Button type='submit' variant="contained" className='button'>Рассчитать</Button>
                </form>
            </Paper>
        </div>
    )
}

export default Converter;

