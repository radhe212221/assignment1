import React from 'react';
import './style.css';

export default function App() {
  const [sem, setsem] = React.useState('');
  const [stream, setstream] = React.useState('');
  const [passingyear, setpassingyear] = React.useState('');

  let a = [
    { id: 1, name: 'demo1', sem: '1st', stream: 'it', passingyear: 2020 },
    { id: 2, name: 'demo2', sem: '2nd', stream: 'cse', passingyear: 2020 },
    { id: 3, name: 'demo3', sem: '2nd', stream: 'it', passingyear: 2020 },
    { id: 4, name: 'demo4', sem: '2nd', stream: 'it', passingyear: 2021 },
    { id: 5, name: 'demo5', sem: '2nd', stream: 'it', passingyear: 2021 },
    { id: 6, name: 'demo6', sem: '2nd', stream: 'cse', passingyear: 2022 },
    { id: 7, name: 'demo7', sem: '3rd', stream: 'cse', passingyear: 1990 },
    { id: 8, name: 'demo8', sem: '3rd', stream: 'me', passingyear: 2022 },
  ];

  const unique = (key) => {
    let b = a.map((x) => x[key]);
    return Array.from(new Set(b));
  };

  const handleClick = (x) => {
    setsem(x.sem);
    setstream(x.stream);
    setpassingyear(x.passingyear);
  };

  return (
    <>
      <h1>dragoverme</h1>
      <div className="flex">
        <div>
          {a.map((x) => (
            <li draggable={true} onDragStart={() => handleClick(x)}>
              {x.name}
            </li>
          ))}
        </div>
        <div>
          {unique('sem').map((x) => (
            <li className={x === sem ? 'active' : ''}>{x}</li>
          ))}
        </div>
        <div>
          {unique('stream').map((x) => (
            <li className={x === stream ? 'active' : ''}>{x}</li>
          ))}
        </div>
        <div>
          {unique('passingyear').map((x) => (
            <li className={x === passingyear ? 'active' : ''}>{x}</li>
          ))}
        </div>
      </div>
    </>
  );
}
