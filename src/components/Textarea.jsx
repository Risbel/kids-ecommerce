import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "pl-2 pr-2 border border-dashed font-light w-full",
  primary: "text-gray-600 border-gray-600",
  secondary: "text-white bg-orangeStrong-kids border-2 placeholder-white",
});

const Textarea = ({ variant, className, ...props }) => {
  return <textarea className={classes("root", variant, className)} {...props} />;
};

Textarea.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  className: PropTypes.string,
};

Textarea.defaultProps = {
  variant: "primary",
  className: null,
};

export default Textarea;
