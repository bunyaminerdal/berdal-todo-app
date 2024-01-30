// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  if (req.method === "POST") {
    const { emails, title, todoLink } = req.body;
    if (!emails) return res.status(403).json("Email required!");
    if (!title) return res.status(403).json("Title required!");
    if (!todoLink) return res.status(403).json("Todo Link required!");


    const emailHtml = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Berdal Todo List</title>
    <meta>
    <meta content="width=device-width, initial-scale=1.0">
</head>

<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <table cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
        <tr>
            <td style="padding: 20px;">
                <h1 style="color: #333;">Berdal Todo List</h1>
                <p style="color: #777;">Stay organized and manage your tasks effectively with Berdal Todo List!</p>
                <p style="color: #777;">You don't need to log in; you can send the link to yourself or someone else. You can access your todo list with the link from anywhere at any time.</p>
                <p style="color: #777;">You have received an invitation to access a Todo List</p>
                <p style="color: #777;">Todo List Title: <strong>${title}</strong></p>
                <p style="color: #777;">Click the link below to access the todo list:</p>
                <a href="${todoLink}" style="display: inline-block; padding: 10px 20px; background-color: #075985; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Access Todo List</a>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center;">
                <p style="color: #777;">&copy; 2023 <span style="font-size: 12px;"></span><a href="https://bunyaminerdal.com" target="_blank">Bünyamin Erdal</a></p>
            </td>
        </tr>
    </table>
</body>

</html>
`;
    const options = {
      from: "mail@bunyaminerdal.com",
      to: emails,
      subject: "Berdal Todo List Access Link",
      html: emailHtml,
    };
    try {
      await resend.emails.send(options);
      return res.status(200).json("Email sent successfully!");
    } catch (error) {
      return res.status(400).json("Sending Email failed!");
    }
  }
}
