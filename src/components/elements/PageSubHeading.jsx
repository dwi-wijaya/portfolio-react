import React from "react";
import { PAGESPEED_URL } from "../../constants/pagespeed";

const PageSubHeading = ({ title, description, icon, link }) => {
  return (
    <>
      <h3 className="section__title-secondary">
        {icon && <i className={icon}></i>}{title}
      </h3>
     <div className="section__subtitle">
     <p className="section__subtitle">
        {description}
      </p>
      <a href={link}></a>
     </div>
    </>
  );
};

export default PageSubHeading;
