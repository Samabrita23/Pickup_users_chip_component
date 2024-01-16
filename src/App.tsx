// App.tsx
import React from 'react';
import AutoComplete from '../src/Chip_component/AutoComplete';
import '../src/App.css';

const items = [
  { id: 1, name: 'Apple', photo: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 2, name: 'Banana', photo: 'https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 3, name: 'Pineapple', photo: 'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 4, name: 'Strawberry', photo: 'https://images.pexels.com/photos/934055/pexels-photo-934055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 5, name: 'Orange', photo: 'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 6, name: 'Grapes', photo: 'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 7, name: 'Watermelon', photo: 'https://images.pexels.com/photos/2403850/pexels-photo-2403850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 8, name: 'Papaya', photo: 'https://images.pexels.com/photos/5945739/pexels-photo-5945739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 9, name: 'Almond', photo: 'https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { id: 10, name: 'Dates', photo: 'https://images.pexels.com/photos/3993529/pexels-photo-3993529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    ];


const App: React.FC = () => {
  return (
    <div className="App">

      <h1>Pick Users</h1>
      <AutoComplete items={items} />
    </div>
  );
};

export default App;
