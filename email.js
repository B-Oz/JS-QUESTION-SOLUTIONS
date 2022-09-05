// Write a function that takes email variable and return true or false and write console invalid or
// valid.
// Valid characters in the email address will be 'abcdefghijklmnopqrstuvwxyz0123456789_+.@' P.S. :
// Capital letters are allowed.
// An email should not start with '@' symbol and should not contain more than one '@' sign.
// There should be at least two characters after the '.' sign. (like .co or .com)
// There should be at least one '. after the '@' sign.
// For examples:
// name.last_Name@company.com -> 🆗 Valid
// name.143@company.co -> 🆗 Valid
// name.last-Name@company.com -> ❌ Dashes are not allowed
// name.last_Name@company.c -> ❌ There should be at least two characters after the '.' sign.
// name.last_Name@company -> ❌ There should be at least one '. after the '@' sign.

let chars = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";

function ValidateEmailAddress(str) {
  let atSymbol = 0;
  let dotCheck = str.length - 1 - str.lastIndexOf(".");
  if (dotCheck == 0 || dotCheck == 1) return `invalid . position`;

  for (const i of str.toLowerCase()) {
    if (i === "@") atSymbol++;
    if (chars.includes(i)) {
    } else {
      return `invalid character detected in email address '${i}'`;
    }
  }

  console.log(str.indexOf("@"), str.lastIndexOf("."));

  if (
    atSymbol > 1 ||
    str.indexOf("@") == 0 ||
    !atSymbol ||
    str.indexOf("@") > str.lastIndexOf(".")
  )
    return `invalid '@' count or position`;
  return `${str} is a valid email address`;
}

console.log(ValidateEmailAddress("mark.m@clarusway.com"));
