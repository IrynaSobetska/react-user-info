import "./User.css";
import PropTypes from "prop-types";

const User = ({ user }) => {
  return (
    <div className="userCard">
      <div className="user">
        <img src="../../public/userIcon.png" alt="" />
        <h2>Name: {user.name}</h2>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
      </div>
      <div className="user">
        <h3>Website: {user.website}</h3>
        <h3>Company name: {user.company.name}</h3>
      </div>
      <div className="user">
        <h3>Address:</h3>
        <p>City: {user.address.city}</p>
        <p>Street: {user.address.street}</p>
        <p>Zipcode: {user.address.zipcode}</p>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
