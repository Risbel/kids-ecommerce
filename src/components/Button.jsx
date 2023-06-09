import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "font-semibold",
  animated: "transition-shadow hover:shadow-xl active:opacity-90",
  primary: "text-white bg-orangeStrong-kids",
  secondary: "text-orangeStrong-kids bg-white",
  tertiary: "text-cyan-800 bg-white",
  disabled: "bg-gray-700 opacity-30",
  sm: "px-1 py-1 text-xs font-light",
  md: "py-2 px-2 text-sm md:text-md",
  lg: "py-3 px-3 text-2xl",
  xl: "py-4 px-4",
});

const Button = ({ variant, size, disabled, paddingNone, className, submit, isLoading, children, ...props }) => {
  return (
    <button
      className={classes("root", variant, !disabled && "animated", size, disabled && "disabled", className)}
      {...props}
    >
      <div
        className={classes(
          "w-auto flex items-center justify-center gap-2 p-1 border-2  border-dashed",
          paddingNone ? "px-1 md:px-1" : "px-2 md:px-8",
          variant === "primary" && "border-white",
          variant === "secondary" && "border-orangeStrong-kids",
          variant === "tertiary" && "border-cyan-800"
        )}
      >
        {isLoading && "spinner"}
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  paddingNone: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  isLoading: false,
  disabled: false,
  paddingNone: false,
  className: null,
};

export default Button;
