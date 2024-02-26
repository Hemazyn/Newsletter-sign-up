import { useState } from 'react';
import './App.css';
import illustration from "./assets/illustration-sign-up-desktop.svg";
import illustrationSm from "./assets/illustration-sign-up-mobile.svg";
import iconList from "./assets/icon-list.svg";
import Success from './modal/Success';

function App() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState(true);

  const validateEmail = () => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    setEmailValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !isEmailValid) {
      setEmailValid(false);
      return;
    }
    window.sub_modal.showModal();
  };

  return (
    <>
      <div className="h-full md:h-screen bg-Dark-Slate-Grey flex justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row w-full md:w-[900px] bg-White p-0 md:p-5 rounded-none md:rounded-[30px] gap-x-14 my-0">
          <div className="flex flex-col w-full md:w-1/2 p-4 md:pl-9 justify-center">
            <h1 className="font-Roboto text-5xl font-bold text-Dark-Slate-Grey my-8 md:my-0 md:mb-5">Stay updated!</h1>
            <p className="text-sm font-light mb-4 md:mb-5">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="flex flex-col gap-y-3 w-full ml7 relative h-fit mb-3">
              <div className="flex gap-x-3">
                <img src={iconList} alt="icon-list" />
                <li className="list-image text-sm font-light w-fit">Product discovery and building what matters</li>
              </div>
              <div className="flex gap-x-3">
                <img src={iconList} alt="icon-list" />
                <li className="list-image text-sm font-light w-fit">Measuring to ensure updates are a success</li>
              </div>
              <div className="flex gap-x-3">
                <img src={iconList} alt="icon-list" />
                <li className="list-image text-sm font-light w-fit">And much more!</li>
              </div>
            </ul>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-y-5 mt-5">
              <label htmlFor="email" className="text-[12px] font-medium">Email address
                <span className={`float-end group text-Tomato ${isEmailValid ? 'hidden' : 'block'}`}>valid email required</span>
                <input type="email" name="email" value={email} id="email" placeholder="email@company.com"
                  className={`block border ${isEmailValid ? 'border-[#ccc]' : 'border-Tomato'} pl-4 text-xs w-full py-3 mt-2 rounded-md font-light placeholder:text-sm cursor-pointer outline-Tomato
                  ${!isEmailValid ? 'bg-Tomato bg-opacity-25 placeholder:text-Tomato' : ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail} />
              </label>
              <button type="submit"
                className="bg-Dark-Slate-Grey text-White text-sm font-normal w-full rounded-md py-4 hover:bg-gradient-to-tr hover:from-TomatoGra 
          hover:to-[#fb923c] checked:group:visible">
                Subscribe to monthly newsletter
              </button>
              <dialog id="sub_modal">
                <Success />
              </dialog>
            </form>

          </div>
          <div className="w-full md:w-1/2">
            <img src={illustrationSm} alt="illustration" loading="lazy" className="visible md:hidden w-full" />
            <img src={illustration} alt="illustration" loading="lazy" className="hidden md:block" />

          </div>
        </div>
      </div>
      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC">Frontend Mentor</a>.
        Coded by <a href="https://devemma.netlify.app/" target="_blank" className="text-blueC">Emmanuel Tofunmi</a>.
      </div>
    </>
  )
}

export default App