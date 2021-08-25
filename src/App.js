import Component from './Component';
import './App.css';
// import './Style.css'
// import style from './custom.module.css'
// import React, { useState } from 'react';
// import User from './User'

function App() {

  // const names = [
  //   {
  //     key: 0, name: "BAQIR", email: "baqir@test.com", adderess: [{ HNo: "234", city: "KHI", country: "PK" },
  //     { HNo: "236", city: "KHI", country: "PK" },
  //     { HNo: "233", city: "HYD", country: "IR" },
  //     { HNo: "232", city: "LHR", country: "US" }
  //     ]
  //   },
  //   {
  //     key: 1, name: "NAJAF", email: "najaf@test.com", adderess: [{ HNo: "234", city: "KHI", country: "PK" },
  //     { HNo: "236", city: "KHI", country: "PK" },
  //     { HNo: "233", city: "HYD", country: "IR" },
  //     { HNo: "232", city: "LHR", country: "US" }

  //     ]
  //   },
  //   {
  //     key: 2, name: "shakir", email: "shakir@test.com", adderess: [{ HNo: "234", city: "KHI", country: "PK" },
  //     { HNo: "236", city: "KHI", country: "PK" },
  //     { HNo: "233", city: "HYD", country: "IR" },
  //     { HNo: "232", city: "LHR", country: "US" }

  //     ]
  //   },
  //   {
  //     key: 3, name: "ali", email: "ali@test.com", adderess: [{ HNo: "234", city: "KHI", country: "PK" },
  //     { HNo: "236", city: "KHI", country: "PK" },

  //     ]
  //   }

  // ]
  // names.map((name) => {
  //   console.log(name);
  // })
  // const [count, setCount] = useState(100)
  // const [data, setData] = useState(10)


  return (
    <div className="App">
      <Component />
      {/* <h1>Printing Nested Array with map function</h1> */}
      {/* <table border="1">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>

        {
          names.map((item) =>
            <tr key={item.key}>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <table border="1">
                  <tbody>
                    <tr>
                      <td>House</td>
                      <td>City</td>
                      <td>Country</td>
                    </tr>

                    {item.adderess.map((add, idx) =>
                      <tr key={idx}>
                        <td>{add.HNo}</td>
                        <td>{add.city}</td>
                        <td>{add.country}</td>

                      </tr>

                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          )
        }

      </table> */}

      {/* <h1 className="primary" >Style type 1 React JS</h1>
      <h1 style={{ color: "white", backgroundColor: "black" }} >Style type 2 React JS</h1>
      <h1 className={style.success} >Style type 3 React JS</h1> */}

      {/* <h1>USE EFFECT IN REACT</h1>
      <User count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>COUNT INCREASSE</button>
      <button onClick={() => setData(data + 1)}>DATA INCREASSE</button> */}

    </div >
  );
}

export default App;
