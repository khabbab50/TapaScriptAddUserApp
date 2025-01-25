import PropTypes from "prop-types";
import AddUser from "./AddUser";
import TotalCount from "./TotalCount";

const Header = ({ users, onSetUsers }) => {
  return (
    <div>
      <h1 className=" text-center font-bold text-3xl text-purple-600 py-10">
        User List App in React JS
      </h1>
      <div className=" container mx-auto my-10 flex justify-between items-center">
        <TotalCount users={users} />
        <AddUser onSetUsers={onSetUsers} />
      </div>
    </div>
  );
};

Header.propTypes = {
  users: PropTypes.array.isRequired,
  onSetUsers: PropTypes.func.isRequired,
};

export default Header;
