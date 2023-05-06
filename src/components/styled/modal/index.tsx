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
        className="fixed inset-0 z-[1000] grid h-screen w-screen  bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
      ></div>
      <div className="text-blue-gray-500 fixed left-1/2 top-1/2 z-[1001] m-4  w-11/12 min-w-[300px] -translate-x-1/2 -translate-y-1/2 transform place-items-center  rounded-lg bg-white font-sans text-base font-light leading-relaxed antialiased shadow-2xl sm:w-3/5 lg:w-2/5 lg:max-w-md">
        <div className="flex flex-row items-center justify-between">
          <div className="text-blue-gray-900 flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug antialiased">
            {title}
          </div>
          <StyledButton
            variant="flat"
            size="small"
            className=" mx-4 bg-transparent font-extrabold hover:border-2 hover:bg-transparent"
            onClick={() => setOpenModal(false)}
          >
            X
          </StyledButton>
        </div>
        <div className="">
          <div className="border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500 max-w-96 max-h-96 overflow-auto border-b border-t p-4 font-sans text-base font-light leading-relaxed antialiased">
            {content}
          </div>
        </div>
        <div className="text-blue-gray-500 flex shrink-0 flex-wrap items-center justify-end gap-2 p-4">
          <StyledButton
            variant="flat"
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
