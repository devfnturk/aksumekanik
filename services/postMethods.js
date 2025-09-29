import { request } from "./request";

export const postMail = (data) =>
    request("/contact-us", "POST", data);