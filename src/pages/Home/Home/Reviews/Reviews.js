import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import image from '../../../../assets/images/people1.png';

const Reviews = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center gap-3.">
              <div>
                <img
                  className="border-4 rounded-full border-primary p-0.5"
                  src={image}
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-bold">Winson Herry</h4>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center gap-3.">
              <div>
                <img
                  className="border-4 rounded-full border-primary p-0.5"
                  src={image}
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-bold">Winson Herry</h4>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              It is a long established fact that by the readable content of a
              lot layout. The point of using Lorem a more-or-less normal
              distribu to using Content here, content
            </p>
            <div className="flex items-center gap-3.">
              <div>
                <img
                  className="border-4 rounded-full border-primary p-0.5"
                  src={image}
                  alt=""
                />
              </div>
              <div>
                <h4 className="font-bold">Winson Herry</h4>
                <p>California</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
