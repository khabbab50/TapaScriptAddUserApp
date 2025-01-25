import PropTypes from "prop-types";

const UserCart = ({ user }) => {
  return (
    <div className="bg-purple-100 rounded-md p-3">
      <h3 className="text-lg text-purple-700">
        <span className="font-bold">Full Name:</span> {user.fullName}
      </h3>
      <p className="text-md text-purple-500">
        <span className="font-bold">Age:</span> {user.age}
      </p>
      <p className="text-md text-purple-500">
        <span className="font-bold">Occupation:</span> {user.occupation}
      </p>
    </div>
  );
};

UserCart.propTypes = {
  user: PropTypes.shape({
    age: PropTypes.number.isRequired,
    fullName: PropTypes.string,
    occupation: PropTypes.string,
  }),
};
export default UserCart;
