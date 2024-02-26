import { useState } from 'react';
import iconSuccess from "../assets/icon-success.svg";

const Success = () => {
     const [showModal, setShowModal] = useState(true);
     const closeModal = () => {
          setShowModal(false);
     };
     if (!showModal) {
          return null;
     }
     return (
          <>
               <div className="fixed top-0 left-0 w-full h-full bg-Dark-Slate-Grey flex justify-center items-center">
                    <div className="flex flex-col w-[420px] p-10 rounded-[20px] bg-White">
                         <img src={iconSuccess} alt="success" className="w-[50px] h-[50px]" />
                         <h1 className="font-Roboto text-5xl font-bold text-Dark-Slate-Grey my-6">Thanks for <br />
                              subscribing!</h1>
                         <p className="font-light text-sm">A confirmation email has been sent to <br /> <span className="font-medium">ash@loremcompany.com</span>. Please open it and click <br /> the button inside to confirm your subscription.</p>
                         <button type="submit" className="bg-Dark-Slate-Grey text-White text-sm font-normal w-full rounded-md py-4 hover:bg-gradient-to-tr hover:from-TomatoGra 
              hover:to-[#fb923c] mt-10" onClick={closeModal}>Dismiss message</button>
                    </div>
               </div>
          </>
     );
}

export default Success