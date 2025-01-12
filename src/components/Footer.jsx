import React from "react";

function Footer() {
  return (
    <div className="h-auto text-white">
  <footer className="bg-slate-900 border-t-white rounded-t-3xl shadow p-4 md:p-10 mt-4 dark:bg-gray-800 text-white font-semibold">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025{" "}
        <a href="/" className="hover:underline">
          FOLIX™
        </a>
        . All Rights Reserved by Atharva Ganesh Gourshete.
      </span>
      
    </div>
  </footer>
</div>

  );
}

export default Footer;
