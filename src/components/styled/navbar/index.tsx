import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BiMoon, BiSun } from "react-icons/bi";
import { useChangeTheme } from "@/hooks/useChangeTheme";
import StyledModal from "../modal";
import StyledInput from "../input";
import StyledButton from "../button";
import { BsClipboard2Check, BsClipboard2Plus } from "react-icons/bs";

const StyledNavbar = () => {
  const {
    query: { todoListId },
    pathname,
    asPath,
  } = useRouter();
  const { theme, changeTheme } = useChangeTheme();
  const [openModal, setOpenModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (openModal) setIsCopied(false);
  }, [openModal]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
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
          <Link
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-700 hover:text-white dark:text-slate-400 dark:hover:text-slate-100"
            href="#"
            onClick={() => setOpenModal((prev) => !prev)}
          >
            Share Todo List
          </Link>
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
      {openModal && (
        <StyledModal
          setOpenModal={setOpenModal}
          title={"Copy or Share Your Todo Link"}
          content={
            <div className="p-2">
              <div className="flex w-full flex-row items-center justify-between gap-2">
                <StyledInput
                  label="Your Link"
                  disabled
                  value={baseUrl + asPath}
                  variant="flat"
                  className="w-full min-w-fit"
                />
                <StyledButton
                  variant="link"
                  onClick={() => {
                    navigator.clipboard.writeText(baseUrl + asPath);
                    setIsCopied(true);
                  }}
                >
                  {isCopied ? (
                    <>
                      <BsClipboard2Check /> {" Copied"}
                    </>
                  ) : (
                    <>
                      <BsClipboard2Plus />
                      {" Copy"}
                    </>
                  )}
                </StyledButton>
              </div>
            </div>
          }
          okButtonText="Share"
          okButtonFunc={() => {
            setOpenModal(false);
            console.log("dasdf");
          }}
        />
      )}
    </nav>
  );
};

export default StyledNavbar;
