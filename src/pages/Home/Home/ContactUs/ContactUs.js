import React from 'react';
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from '../../../../Components/PrimaryButton/PrimaryButton';


const ContactUs = () => {
    return (
      <div
        className=" py-20 mb-20"
        style={{ backgroundImage: `url(${appointment})` }}
      >
        <div>
          <div className="text-center">
            <h4 className="text-lg text-primary font-bold">Contact Us</h4>
            <h2 className="text-4xl  text-white">Stay connected with us</h2>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Type here"
              className="input w-[85%] lg:w-1/2"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-[85%] lg:w-1/2 my-5"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-[85%] lg:w-1/2 h-24"
            />
          </div>
          <div className="flex justify-center mt-5">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;