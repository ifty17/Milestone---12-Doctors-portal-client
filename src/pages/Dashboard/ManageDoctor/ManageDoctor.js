import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Sheard/ConfirmationModal/ConfirmationModal';
import Loading from '../../Sheard/Loading/Loading';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () =>{
        setDeletingDoctor(null);
    }

    const handleDeleteDoctor = doctor =>{
        console.log(doctor);
    } 

    const {data: doctors, isLoading} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () =>{
            try{
                const res = await fetch("http://localhost:5000/doctors", {
                    headers: {
                        authorization : `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){
                
            }
        }
    });

    if(isLoading){
        return <Loading/>
    }

    return (
      <div>
        <h2 className="text-3xl">Manage Doctors: {doctors?.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="h-16 rounded-full"
                      src={doctor.image}
                      alt=""
                    />
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs">
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {
            deletingDoctor && <ConfirmationModal
            title={`Are you sure you want to delete?`}
            successAction = {handleDeleteDoctor}
            modalData = {deletingDoctor}
            message={`If you delete ${deletingDoctor.name}. It can not be undone`}
            closeModal={closeModal}
            ></ConfirmationModal>
        }
      </div>
    );
};

export default ManageDoctor;