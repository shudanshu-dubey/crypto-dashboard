import React from "react";

function NavBar() {
  return (
    // Container for the navigation bar with styles
    <div className=" py-1 bg-white box-border h-14 block border-2 rounded-sm shadow-sm md:w-auto">
      {/* Logo and brand name */}
      <div className="pt-2  ml-8 font-serif text-2xl">
        {/* Logo element with brand name */}
        <p><span className=" text-black text-4xl mb-2"><u>CryptoDash</u></span></p>
        
      </div>
    </div>
  );
}

export default NavBar;
