import React from "react";

const Box = React.forwardRef(
  (
    { as: Component = "div", className, style, onClick, children, ...props },
    ref
  ) => {
    return (
      <Component
        className={className}
        style={style}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
export default Box;
