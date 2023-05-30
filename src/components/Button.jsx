import React from "react";

import PropTypes from "prop-types";
import clsx from "classnames/bind";

const classes = clsx.bind({
  root: "font-semibold",
  animated: "transition-shadow hover:shadow-xl active:opacity-90",
  primary: "text-slate-200 bg-orangeStrong-kids",
  secondary: "text-slate-900",
  disabled: "bg-gray-700 opacity-30",
  sm: "px-1 py-1 text-xs font-light",
  md: "py-2 px-2 text-sm md:text-md",
  lg: "py-3 px-3 text-2xl",
  xl: "py-4 px-4",
});

const Button = ({ variant, size, disabled, className, submit, isLoading, children, ...props }) => {
  return (
    <div>
      <button
        className={classes("root", variant, !disabled && "animated", size, disabled && "disabled", className)}
        {...props}
      >
        <div
          className={classes(
            "w-auto flex items-center gap-2 p-1 border-2 px-6 md:px-8 border-dashed",
            variant === "secondary" && "border-orangeStrong-kids text-orangeStrong-kids"
          )}
        >
          {isLoading && "spinner"}
          {children}
        </div>
      </button>
    </div>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  isLoading: false,
  disabled: false,
  className: null,
};

export default Button;
