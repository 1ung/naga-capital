import React, { useState, useEffect } from "react";

function HomeFooter() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  });

  return (
    <footer className="page-footer font-small fixed-bottom">
      <div className="footer-copyright text-center py-3">
        <span>COPYRIGHT &copy; {year} </span>
        <span>NAGA CAPITAL PARTNERS PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}

export default HomeFooter;
