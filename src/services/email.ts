import basicApi from "./basicApi";

export const sendEmail = async (
  emails: string,
  title: string,
  todoLink: string
): Promise<string> => {
  const res = await basicApi.post(`/api/todo/share`, {
    emails,
    title,
    todoLink,
  });

  return res.data;
};
