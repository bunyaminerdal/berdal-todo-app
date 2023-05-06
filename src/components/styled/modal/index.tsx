import React, { ReactNode } from "react";
import StyledButton from "../button";

const StyledModal = ({
  okButtonText = "OK",
  cancelButtonText = "Cancel",
  title,
  content,
  setOpenModal,
  okButtonFunc = () => setOpenModal(false),
}: {
  setOpenModal: (open: boolean) => void;
  okButtonText?: string;
  cancelButtonText?: string;
  content: ReactNode | string;
  title: string;
  okButtonFunc?: () => void;
}) => {
  // onClick={() => setOpenModal(false)}
  return (
    <>
      <div
        onClick={() => setOpenModal(false)}
        className="fixed inset-0 z-[1000] grid h-screen w-screen   bg-opacity-10 backdrop-blur-sm transition-opacity duration-300 dark:bg-opacity-10"
      ></div>
      <div className=" fixed left-1/2 top-1/2 z-[1001] m-4 w-11/12 min-w-[300px] -translate-x-1/2 -translate-y-1/2  transform place-items-center rounded-lg font-sans text-base  font-light  leading-relaxed antialiased shadow-sm shadow-gray-500 dark:shadow-gray-300 sm:w-3/5 lg:w-2/5 lg:max-w-md">
        <div className="flex flex-row items-center justify-between">
          <div className=" flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug antialiased">
            {title}
          </div>
          <StyledButton
            variant="link"
            size="small"
            className=" mx-4"
            onClick={() => setOpenModal(false)}
          >
            X
          </StyledButton>
        </div>
        <div className="">
          <div className="border-t-blue-gray-100 border-b-blue-gray-100  max-w-96 max-h-96 overflow-auto border-b border-t p-4 font-sans text-base font-light leading-relaxed antialiased">
            {content}
          </div>
        </div>
        <div className=" flex shrink-0 flex-wrap items-center justify-end gap-2 p-4">
          <StyledButton
            variant="link"
            className="min-w-[100px]"
            onClick={() => setOpenModal(false)}
          >
            {cancelButtonText}
          </StyledButton>
          <StyledButton onClick={okButtonFunc} className="min-w-[100px]">
            {okButtonText}
          </StyledButton>
        </div>
      </div>
    </>
  );
};
export default StyledModal;
