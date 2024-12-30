import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsFillPersonFill } from "react-icons/bs";
import { FaJoget } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const UsersForm = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

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
    let user = { name, email, gen, id: uuid() };
    console.log(user);

    setUsers((prev) => [...prev, user]);
    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <div>
      <p className="mb-5 ml-20 uppercase">usersform</p>
      <form onSubmit={handleSubmit} className="space-y-3 ">
        <label className="input input-bordered flex items-center gap-2">
          <BsFillPersonFill />
          <input
            type="text"
            className="grow "
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <HiOutlineEnvelope />
          <input
            type="text"
            className="grow "
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <FaJoget />
          <input
            type="text"
            className="grow "
            placeholder="Gen"
            value={gen}
            onChange={handleGenChange}
          />
        </label>
        <button className="btn btn-primary w-full" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
