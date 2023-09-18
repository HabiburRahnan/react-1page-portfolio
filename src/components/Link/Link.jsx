/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Link = ({ route }) => {
  return (
    <li className="mr-10 px-6 hover:bg-yellow-500">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.protoTypes = {
  route: PropTypes.object,
};
export default Link;
