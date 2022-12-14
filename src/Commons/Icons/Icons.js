import React from "react";
import Link from "../Link/Link";

const Icons = () => {
  const iconList = [
    { url: "https://github.com/ranses0798", icon: "fa-github" },
    { url: "https://www.instagram.com/ramsesr07/", icon: "fa-instagram" },
    { url: "https://twitter.com/ARanses07", icon: "fa-twitter" },
  ];

  return (
    <div>
      {iconList.map((i) => (
        <Link url={i.url} icon={i.icon} />
      ))}
    </div>
  );
};

export default Icons;
