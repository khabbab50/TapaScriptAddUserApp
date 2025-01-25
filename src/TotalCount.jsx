import PropTypes from "prop-types";

const TotalCount = ({ users }) => {
  return (
    <div>
      <h2 className="text-xl font-bold px-10 py-2 rounded-md bg-purple-100 text-purple-700 cursor-pointer">
        Totle Users: {users.length}
      </h2>
    </div>
  );
};

TotalCount.propTypes = {
  users: PropTypes.array.isRequired,
};

export default TotalCount;
