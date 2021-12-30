import './App.css';
import React, {useEffect, useState, Component} from 'react'
import { init , getOwnBalance, getStakes} from './ERC20';



// you already know that literally all of the code possible is going to go in this doc
function App() {
  const [balance, setBalance] = useState(null);
  const [stakes, setStakes] = useState(null);



useEffect(() => {
  init()
  fetchHexBalance()
  fetchStakes()
}, [])

	const fetchHexBalance = () => {
		getOwnBalance()
			.then((balance) => {
				setBalance(balance/100000000);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const fetchStakes = () => {
		getStakes()
		.then((stakes) => {
			setStakes(stakes);
		})
		.catch((err) => {
			console.log(err);
		})
	};

  

	return (
    
		<div className="App">
              <h1>
          Hello from the Hexico Development Team!
        </h1>
			<h2>Your Stakes are {stakes} </h2>
			{/* <button onClick={() => fetchHexBalance()}>Refresh balance</button> */}
      <h3>Shares to stake (Your Hex balance is {balance} HEX) <br/>Shares: <input type="text" id="myText"/></h3>
    <p> Description: How long the recipient wants to stake HEX for <br/> Time: <input type="text" id="myText"/></p>
    <p> Description: What percentage of the T-Shares the recipient will keep as a premium<br/> Premium: <input type="text" id="myText"/> </p>
    <button type="button">Stake</button>
    <p id="demo"></p>
		</div>
	);
}

export default App;