import { useState } from 'react';
import './index.css';
import { Employee } from './component/Employee';

// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import { Navbar } from './component/Navbar';
// import { Post } from './component/Post';
function App() {
  const [employee, setemployee] = useState(
    [
      { id: 1, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 2, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 3, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 4, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 5, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 6, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 7, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 8, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 9, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 10, name: "EZZ", role: "Software", img: "https://images.pexels.com/photos/6085345/pexels-photo-6085345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ]
  )
  return (
    <div className='flex flex-wrap justify-center'>
      {employee.map((employee) => {
        return (<Employee key={employee.id} name={employee.name} role={employee.role} img={employee.img} />)
      })};
    </div>
  );
};

export default App;
