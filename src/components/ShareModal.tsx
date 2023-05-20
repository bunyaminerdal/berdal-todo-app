import React, { useEffect, useState } from "react";
import StyledModal from "./styled/modal";
import StyledInput from "./styled/input";
import StyledButton from "./styled/button";
import { BsClipboard2Check, BsClipboard2Plus } from "react-icons/bs";
import { useRouter } from "next/router";
import { sendEmail } from "@/services/email";

const ShareModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}) => {
  const { asPath } = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareData, setShareData] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const todoLink = baseUrl + asPath;
  useEffect(() => {
    if (openModal) setIsCopied(false);
  }, [openModal]);

  const handleShare = async () => {
    setIsSharing(true);
    const title = localStorage.getItem("title") ?? "Todo List";
    const data = await sendEmail("leonidas131@hotmail.com", title, todoLink);
    setShareData(data);
    setIsSharing(false);
  };
  return (
    <div>
      {openModal && (
        <StyledModal
          setOpenModal={setOpenModal}
          title={"Copy or Share Your Todo Link"}
          content={
            <div>
              <div className="flex items-center justify-between gap-2">
                <StyledInput
                  label="Your Link"
                  disabled
                  value={todoLink}
                  variant="flat"
                  className="w-full min-w-fit"
                />
                <StyledButton
                  variant="link"
                  onClick={() => {
                    navigator.clipboard.writeText(todoLink);
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
              {shareData ? (
                <div>
                  <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
                  <span>{shareData}</span>
                </div>
              ) : null}
            </div>
          }
          okButtonLoading={isSharing}
          okButtonText={isSharing ? "Sharing" : "Share"}
          okButtonFunc={async () => {
            await handleShare();
          }}
        />
      )}
    </div>
  );
};

export default ShareModal;
