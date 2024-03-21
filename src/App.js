import './App.css';

function App() {
  const clickEvent = () => {
    let x = document.getElementById("passW1").value;
    let y = document.getElementById("passW2").value;
    let z;
      if (x == y){
          z = 'You have been register!';
        }
        else{
          z = 'Password not coincide!';
      }
      alert(z)
  }
  return (
    <div className="App">
      <div class = "content">
        <ol class = "firstColumn">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        </ol>
        <ol class="secondColumn">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ol>
      <ol class="thirdColumn">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ol>
      <ol class="fourthColumn">
        <li>1</li>
        <li>2</li>
      </ol>
      </div>
      <div class = "headName">
        <p>
          Register
        </p>
      </div>
      <div class = "register">
        <div>
          <p>Nikname</p>
            <input type="text"></input>
          <p>Password</p>
            <input id="passW1" type="password"></input>
          <p>Repeat Password</p>
            <input id="passW2" type="password"></input>
          <div class="rButton">
            <button onClick={clickEvent}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;