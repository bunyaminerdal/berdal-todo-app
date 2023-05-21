import React, { useEffect, useState } from "react";
import StyledModal from "./styled/modal";
import StyledInput from "./styled/input";
import StyledButton from "./styled/button";
import {
  BsClipboard2Check,
  BsClipboard2Plus,
  BsSend,
  BsSendCheck,
} from "react-icons/bs";
import { useRouter } from "next/router";
import { sendEmail } from "@/services/email";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ShareModal = ({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}) => {
  const { asPath } = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [shareData, setShareData] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";
  const todoLink = baseUrl + asPath;

  let schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<{ email: string }> = async (data) => {
    const title = localStorage.getItem("title") ?? "Todo List";
    const shareData = await sendEmail(data.email, title, todoLink);
    setShareData(shareData);
  };
  useEffect(() => {
    if (openModal) {
      setIsCopied(false);
      reset();
      setShareData(null);
    }
  }, [openModal, reset]);
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
                  className="w-[120px]"
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
              <div>
                <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-row items-center gap-2"
                  onKeyDown={(e) => {
                    if (e.code === "enter") handleSubmit;
                  }}
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <div className="flex w-full flex-col">
                        <StyledInput
                          error={!!error}
                          label="Email"
                          value={value}
                          onChange={onChange}
                          className="w-full"
                          disabled={isSubmitting || isSubmitSuccessful}
                          variant="flat"
                        />
                        {error && (
                          <div className="w-full text-rose-600">
                            {error?.message}
                          </div>
                        )}
                      </div>
                    )}
                  />
                  <div className="flex h-full flex-col pt-1">
                    <StyledButton
                      variant="link"
                      disabled={!isValid || isSubmitSuccessful}
                      loading={isSubmitting}
                      type="submit"
                      className="w-[120px]"
                    >
                      {isSubmitSuccessful ? (
                        <>
                          <BsSendCheck /> {" Shared"}
                        </>
                      ) : isSubmitting ? (
                        <>{" Sharing"}</>
                      ) : (
                        <>
                          <BsSend />
                          {" Share"}
                        </>
                      )}
                    </StyledButton>
                  </div>
                </form>
              </div>
              {shareData ? (
                <div>
                  <hr className="my-2 h-0.5 border-t-0 bg-neutral-300 opacity-100 dark:opacity-50" />
                  <span className="text-green-600">{shareData}</span>
                </div>
              ) : null}
            </div>
          }
        />
      )}
    </div>
  );
};

export default ShareModal;
