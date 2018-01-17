const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  if (emails && emails[emails.length - 1] === ",") {
    return "There cannot be a trailing comma";
  }

  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These are emails are invalid: ${invalidEmails}`;
  }

  return;
};
