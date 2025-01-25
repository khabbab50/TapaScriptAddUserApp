import PropTypes from "prop-types";

const generateRandomFullName = () => {
  const FullNames = [
    "Md Khabbab",
    "Md Hossen",
    "Mst. Sahti Akter",
    "Mst. Falguni (Asa)",
    "Md Shahin Khan",
    "Md Ainur Rahoman",
    "Md Rezaul Karim",
    "Md Alohom Hosain",
    "Md Masud Parvez",
    "Md Ali Hosen",
  ];

  const randomFullName =
    FullNames[Math.floor(Math.random() * FullNames.length)];

  return `${randomFullName}`;
};

const generateRandomOccupation = () => {
  const occupations = [
    "Engineer",
    "Artist",
    "Manager",
    "Nurse",
    "Doctor",
    "Writer",
    "Chef",
    "Teacher",
    "Developer",
    "Designer",
  ];
  return occupations[Math.floor(Math.random() * occupations.length)];
};

const AddUser = ({ onSetUsers }) => {
  const addRandomUser = () => {
    const randomUser = {
      id: crypto.randomUUID(),
      fullName: generateRandomFullName(),
      age: Math.floor(Math.random() * 25) + 18,
      occupation: generateRandomOccupation(),
    };
    onSetUsers((prevUsers) => [...prevUsers, randomUser]);
  };

  return (
    <div>
      <button
        onClick={addRandomUser}
        className="text-xl font-bold px-10 py-2 rounded-md bg-purple-100 text-purple-700 cursor-pointer"
      >
        Add User +
      </button>
    </div>
  );
};

AddUser.propTypes = {
  onSetUsers: PropTypes.func.isRequired,
};

export default AddUser;
