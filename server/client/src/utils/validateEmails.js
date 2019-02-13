/*
 * @params a string that is an email address
 * @return the email address string with all whitespaces removed
 */
const removeAllSpaces = string => {
  return string.replace(/\s+/g, "");
};

/*
 * @params a string of comma separated emails
 * @return an array where each elem is an email string with whitespaces removed
 */
const cleanEmailString = stringOfEmails => {
  let emailArray = stringOfEmails.split(",");
  emailArray = emailArray.map(email => {
    return removeAllSpaces(email);
  });
  return emailArray;
};
const getInvalidEmails = stringOfEmails => {
  //source : emailregex.com
  //NOTE:  regex is NOT a string!
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let emailArray = cleanEmailString(stringOfEmails);

  let invalidEmails = emailArray.filter(email => {
    // console.log('EMAIL BEING TESTED:  ', email);

    console.log('EMAIL BEING EXAMINED: ', email, email.length);

    //to remove unecessary error for trailing commas, check that the email being filtered is not an emptry string
    // if this condition is satisfied, the filter returns invalid emails- i.e those that FAIL the regex test
    if (email.length >= 0 ) return emailRegex.test(email) === false;
  });

    // console.log(`invalid emails: ${invalidEmails}`);
  return invalidEmails;
};

export default getInvalidEmails;
