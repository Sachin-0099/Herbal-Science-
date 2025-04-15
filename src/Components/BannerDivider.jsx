import React from 'react';

const BannerDivider = ({ src, alt, height = "h-120", width = "w-full", className = "", ...rest }) => {
  return (
    <section aria-label="Promotional Banner" className={`my-10 ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`${width} object-cover ${height}`}
        loading="lazy"
        {...rest}
      />
    </section>
  );
};

export default BannerDivider;
