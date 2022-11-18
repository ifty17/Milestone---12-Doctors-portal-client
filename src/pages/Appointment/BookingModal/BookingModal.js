import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch();
        }
        else{
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking}>
            <div className="gird grid-cols-1 gap-3 mt-6">
              <input
                type="text"
                value={date}
                className="input w-full input-bordered"
                disabled
              />
              <select
                name="slot"
                className="select select-bordered w-full my-5"
              >
                {slots.map((slot, i) => (
                  <option value={slot} key={i}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="your name"
                className="input w-full input-bordered "
              />
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="your email"
                disabled
                className="input w-full my-5 input-bordered"
              />
              <input
                type="text"
                name="phone"
                placeholder="phone number"
                className="input w-full mb-3 input-bordered"
              />
              <br />
              <input className="btn  w-full" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;