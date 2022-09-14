import './App.css';
import {useEffect, useState} from "react";
import UserComponents from "./components/UserComponents";


function App() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
                console.log(value);
            });

    },[]);


    return (
        <div>
            {
                users.map(value => <UserComponents item={value}/>)
            }
        </div>

    );
}

export default App;




// function App() {
//     let users = [
//         {name: 'Kieren', age: 31, status: false},
//         {name: 'Priscilla', age: 30, status: true},
//         {name: 'Todd',age: 29, status: true,},
//         {name: 'Ebrahim',age: 28, status: false},
//         {name: 'Margie',age: 30, status: true},
//         {name: 'Darien',age: 31, status: false},
//         {name: 'Mali',age: 28, status: false},
//         {name: 'Naira',age: 29, status: true},
//         {name: 'Payton',age: 30, status: true},
//         {name: 'Angelika',age: 31, status: false},
//         {name: 'Dylan',age: 31, status: true}
//     ];
//
//     return (
//         <div>
//             {
//                 users.map((user) =>{
//                     return <div> name - {user.name}; status {user.status.toString()} </div>
//
//                 })
//             }
//         </div>
//     );
// }
// export default App;

// function App() {
//
//     let [counter,setCounter] = useState(0);
//
//     const increment = () => {
//         setCounter(++counter);
//     }
//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick = {increment}>increment me</button>
//
//         </div>
//     );
// }
// export default App;


