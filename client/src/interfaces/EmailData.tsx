export interface EmailData{
    to: string,
    subject: string,
    text: string, //The body of the email in text email applications
    html: string, //The body of the email in html rich applications, most email applications.
}