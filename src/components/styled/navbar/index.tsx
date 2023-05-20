import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import ShareModal from "@/components/ShareModal";

const StyledNavbar = () => {
  const {
    query: { todoListId },
    pathname,
  } = useRouter();
  const { theme, changeTheme } = useChangeTheme();
  const [openModal, setOpenModal] = useState(false);

  if (pathname !== "/" && !todoListId)
    return (
      <nav className="z-50 flex h-14 w-full min-w-max items-center justify-center gap-5 bg-slate-400 px-5 dark:bg-slate-800"></nav>
    );
  return (
    <nav className="z-50 flex h-14 w-full min-w-max items-center justify-center gap-5 bg-slate-400 px-5 dark:bg-slate-800">
      {todoListId ? (
        <div className="flex flex-row gap-5">
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-700 hover:text-white dark:text-slate-400 dark:hover:text-slate-100"
            href="/"
          >
            New Todo List
          </Link>
          <button
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-700 hover:text-white dark:text-slate-400 dark:hover:text-slate-100"
            onClick={() => setOpenModal((prev) => !prev)}
          >
            Share Todo List
          </button>
        </div>
      ) : (
        <div className="flex flex-row gap-5">
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-700 hover:text-white dark:text-slate-400 dark:hover:text-slate-100"
            href="/"
          >
            Welcome Be Todo
          </Link>
        </div>
      )}
      <a
        className="ml-auto cursor-pointer rounded-full p-2 text-sm font-medium text-slate-900 hover:bg-slate-700 hover:text-white dark:text-slate-400 dark:hover:text-slate-100"
        onClick={changeTheme}
      >
        {theme === "dark" ? (
          <BiSun className="h-5 w-5" />
        ) : (
          <BiMoon className="h-5 w-5" />
        )}
      </a>
      <ShareModal openModal={openModal} setOpenModal={setOpenModal} />
    </nav>
  );
};

export default StyledNavbar;
