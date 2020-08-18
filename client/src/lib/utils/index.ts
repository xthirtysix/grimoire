import { message, notification } from "antd";

export const displaySuccessMessage = (
  message: string,
  description?: string
) => {
  return notification["success"]({
    message,
    description,
    placement: "bottomRight",
    style: { marginTop: 50 },
  });
};

export const displayErrorMessage = (error: string) => {
  return message.error(error);
};
