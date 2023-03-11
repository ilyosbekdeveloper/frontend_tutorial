import './App.css';
import logo from './images/logo.png';
import img1 from './images/img-1.jpeg';
import img2 from './images/img-2.webp';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpeg';
import img6 from './images/img-6.webp';
import img7 from './images/img-7.jpg';
import img8 from './images/img-8.jpg';
import img9 from './images/img-9.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="headerContainer">

          <div className="logo">
            <a href="#"><img src={logo} alt="" /></a>
          </div>

          <div className="headerLinks">
            <ul>
              <li><a href="#"  className="active" >Home</a></li>
              <li><a href="#ourCras">Our Cars</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      <section>
        <div className="homeSection">
          <div className="homeDescription">
            <div className="homeDescriptionTitle">
              <h1>Our Cars</h1>
            </div>
            <div className="homeDescriptionPar">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, corporis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, corporis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, corporis?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ourCar">
        <div className="ourCarsTitle"><h1>They are Our Cars</h1></div>
        <div className="ourCars" id="ourCras">
          
          <div className="imgContainer">
            <img src={img1} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img2} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img3} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img4} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img5} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img6} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img7} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img8} alt="" />
          </div>

          <div className="imgContainer">
            <img src={img9} alt="" />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contactTitle"><h1>Contact width Me</h1></div>
        <div className="contact">
          <form>
            <label htmlFor="name">First Name</label>
            <input type="text" placeholder="Create your name" id="name"/>

            <label className="numberLabel" htmlFor="number">Phone number</label>
            <input type="text" placeholder="Create your number" id="number"/>

            <textarea id="text"></textarea>
          </form>
        </div>
      </section>

      <footer>
        <p>
        Made by <a href="https://t.me/IlyosBro_o">Ilyos Coder</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
