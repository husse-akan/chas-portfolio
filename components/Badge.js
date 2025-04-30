const Badge = ({ size = "base", color = "primary", icon, children }) => {
  return (
    <div className="inline-block">
      <span className={`badge ${size} ${color}`}>
        {icon && <span className="badge-icon">{icon}</span>}
        <span className="badge-text">{children}</span>
      </span>
    </div>
  );
};

export default Badge;
