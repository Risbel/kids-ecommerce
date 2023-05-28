import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "pl-2 border border-dashed font-light",
  primary: "text-gray-600 border-gray-600",
  secondary: "text-white bg-orangeStrong-kids border-2 placeholder-white",
  sm: "h-6",
  md: "h-8 text-xl",
  lg: "h-10 text-2xl",
  xl: "h-14 text-3xl",
});

const Input = ({ variant, size, className, ...props }) => {
  return <input className={classes("root", variant, size, className)} {...props} />;
};

Input.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
};

Input.defaultProps = {
  variant: "primary",
  size: "md",
  className: null,
};

export default Input;
