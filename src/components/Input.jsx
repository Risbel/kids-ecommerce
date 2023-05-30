import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "pl-2 border border-dashed font-light",
  primary: "text-gray-600 border-gray-600",
  secondary: "text-white bg-orangeStrong-kids border-2 placeholder-white",
  sm: "h-8",
  md: "h-13 md:text-xl",
  lg: "h-14 w-full text-2xl",
  xl: "h-16 w-full text-3xl",
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
