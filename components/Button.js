const Button = (props) => {
  const { size, color, radius, disabled, children } = props;

  return (
    <button className={`button ${size} ${color} ${radius}`} disabled={disabled}>
      {children}
    </button>
  );
};

// Default props
Button.defaultProps = {
  size: "base", // Default size
  color: "primary", // Default color
  radius: "rounded-none", // Default rounded
  disabled: false, // Default disable false
};

export default Button;
