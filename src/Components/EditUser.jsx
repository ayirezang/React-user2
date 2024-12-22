import React, { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { FaJoget } from "react-icons/fa";
import { v4 as uuid } from "uuid";

const EditUser = ({ user, updateUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenChange = (e) => {
    setGen(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedUser = { name, email, gen, id: user.id };
    console.log(user);
    updateUser(user.id, updatedUser);
    closeModal();
    // setUsers((prev) => [...prev, user]);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="btn btn-primary" onClick={openModal}>
        edit
      </button>

      {/* Modal */}
      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box justify-start">
            <h3 className="font-bold text-lg">Edit user!</h3>

            <div className="modal-action">
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="input input-bordered flex items-center gap-2">
                  <BsFillPersonFill />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    value={name}
                    onChange={handleNameChange}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <HiOutlineEnvelope />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <FaJoget />
                  <input
                    type="text"
                    className="grow"
                    placeholder="Gen"
                    value={gen}
                    onChange={handleGenChange}
                  />
                </label>
                <button className="btn btn-primary w-full" type="submit">
                  submit
                </button>
                <button
                  className="btn btn-primary w-full"
                  type="submit"
                  onClick={closeModal}
                >
                  close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EditUser;
