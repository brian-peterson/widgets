import React, {useState, useEffect, useRef} from 'react';
console.log(React.version); 
const Dropdown = ({options, selected, onSelectedChange}) => {
const [open, setOpen] = useState(false);
const ref = useRef();

useEffect(() => {
    document.body.addEventListener('click', (e) => {
        if (ref.current && ref.current.contains(e.target)) {
        return;
    }
    setOpen(false);
}, {capture:true});
}, [])

const renderedOptions = options.map((option) => { 
    if(option.value === selected.value) return null;
    return (
        <div onClick={()=> onSelectedChange(option)} key={option.value} className="item"> 
            {option.label}
        </div>
    )
});
    console.log(ref.current)
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`} >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
                <div className="text" style={{color: selected.value}}>{`This text is ${selected.value}`}</div>
            </div>
        </div>
    )
}
export default Dropdown; 