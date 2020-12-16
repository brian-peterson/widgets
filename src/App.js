import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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

const App = () => {
    return (
        <div>
            <Search />
        </div>
    );
}

export default App;