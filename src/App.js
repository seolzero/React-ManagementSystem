import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id':'1',
    'image':'https://placeimg.com/64/64/1',
    'name': 'Park Seolyeong',
    'birthday':'941005',
    'gender':'female',
    'job':'developer'
  },
  {
    'id':'2',
    'image':'https://placeimg.com/64/64/2',
    'name': 'Lee Sangheon',
    'birthday':'940131',
    'gender':'male',
    'job':'developer'
  },
  {
  'id':'3',
  'image':'https://placeimg.com/64/64/3',
  'name': 'Siru',
  'birthday':'190406',
  'gender':'male',
  'job':'CUTE'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
