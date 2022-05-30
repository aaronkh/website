import Link from "./Link";

export default (props) => (
  <Link to={props.src}>
    <img {...props} />
  </Link>
);
