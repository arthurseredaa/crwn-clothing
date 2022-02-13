import './menu-item.scss';

export const MenuItem = ({ title, imageUrl, size, linkUrl, id }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="menu-background"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
