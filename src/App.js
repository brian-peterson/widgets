import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end js framework'
    }, 
    {
        title: 'Why use React?',
        content: 'React is a favorite js framework'       
    },
    {
        title: 'how do you use it',
        content: 'use react by creating components'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ? 
            <Dropdown onSelectedChange={setSelected} selected={selected} options={options}/>
            : null }   
        </div>
    );
}

export default App;