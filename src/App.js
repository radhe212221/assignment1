import React from 'react';
import './style.css';

export default function App() {
  const [z, setz] = React.useState('');
  // student
  //semeter wala
  //html css wala
  let a = [
    { name: 'html', label: 'tag,h1,h2,p' },
    { name: 'css', label: 'id,class,media query' },
    { name: 'javascript', label: 'string,arrays' },
  ];

  return (
    <div>
      {a.map((x) => (
        <h1 onClick={() => setz(x.name)}>{x.name}</h1>
      ))}

      {a.map((x) => (
        <h1 className={x.name === z ? 'active' : ''}>{x.label}</h1>
      ))}
    </div>
  );
}
