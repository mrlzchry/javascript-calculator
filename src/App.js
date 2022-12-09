import './App.css';
import React, { useState } from 'react';

function App() {
  //state
  const [text, setText] = useState('0');

  //list of buttons
  const numpads = [
  {
    id: 'clear',
    content: 'AC'
  },
  {
    id: 'add',
    content: '+'
  },
  {
    id: 'nine',
    content: '9'
  },
  {
    id: 'eight',
    content: '8'
  },
  {
    id: 'seven',
    content: '7'
  },
  {
    id: 'subtract',
    content: '-'
  },
  {
    id: 'six',
    content: '6'
  },
  {
    id: 'five',
    content: '5'
  },
  {
    id: 'four',
    content: '4'
  },
  {
    id: 'multiply',
    content: '*'
  },
  {
    id: 'three',
    content: '3'
  },
  {
    id: 'two',
    content: '2'
  },
  {
    id: 'one',
    content: '1'
  },
  {
    id: 'divide',
    content: '/'
  },
  {
    id: 'zero',
    content: '0'
  },
  {
    id: 'decimal',
    content: '.'
  },
  {
    id: 'equals',
    content: '='
  }
  ]

  //function for setting up buttons 
  const setupButtons = (element) => {
    
    return <div id={element.id} className={`pads`} onClick={() => {
 
        switch(element.id){
          case 'clear':

            setText('0');
            break;
          case 'equals':

            try{
              const result = eval(text)
              setText(parseFloat(result));

            } catch{
              setText('ERROR!');
            }
            break;
          case 'decimal':

            const array = text.split(/[\+\\\*\-]/);
            const regex = /[.]/;
            const decimalMatch = regex.test(array[array.length - 1]);

            if (!decimalMatch) {
              setText(text+'.');
            }
            break;
            
          case 'add' :
            
            if (typeof text === 'number' || typeof text === 'string') {
              setText(text + '+');
            } 
            if (/[\+\/\*\-]/.test(text[text.length-1])) {
              setText(text.slice(0, -1) + '+');
            }
            if (/[\-]/.test(text[text.length-1]) && /[\+\/\*\-]/.test(text[text.length-2])) {
              setText(text.slice(0, -2) + '+');
            }

            break;
          case 'subtract' :

            if (typeof text === 'number' || typeof text === 'string') {
              setText(text + '-');
            }
            if (/[\+\*\/\-]/.test(text[text.length-2]) && /[\+\*\/\-]/.test(text[text.length-1])) {
              setText(text.slice(0, -1) + '-');
            }
            
            break;
          case 'multiply' :

            if (typeof text === 'number' || typeof text === 'string') {
              setText(text + '*');
            }
            if (/[\+\/\*\-]/.test(text[text.length-1])) {
              setText(text.slice(0, -1) + '*');
            }
            if (/[\-]/.test(text[text.length-1]) && /[\+\/\*\-]/.test(text[text.length-2])) {
              setText(text.slice(0, -2) + '*');
            }
    
            break;
          case 'divide' :

            if (typeof text === 'number' || typeof text === 'string') {
              setText(text + '/');
            }
            if (/[\+\/\*\-]/.test(text[text.length-1])) {
              setText(text.slice(0, -1) + '/');
            }
            if (/[\-]/.test(text[text.length-1]) && /[\+\/\*\-]/.test(text[text.length-2])) {
              setText(text.slice(0, -2) + '/');
            }

            break;

          default: 
            if (text === '0') {
              setText(element.content);
            }else if(text.length > 25) {
              setText('Limit digit met!');
            }else if(typeof text === 'number'){
              setText(element.content);
            }else{
              setText( text + element.content);
            }
            
        }
    }}>{element.content}</div>
  }
  

  return (
    <div className="App">
      <div id='calculator-case'>
        <div id='display'>
          {text}
        </div>
        <div className='row'>
        {numpads.map(setupButtons)}
        </div>
    
      </div>
    </div>
  );
}

export default App;
