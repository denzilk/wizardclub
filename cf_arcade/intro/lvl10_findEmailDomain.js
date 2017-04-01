/*
DESCRIPTION
SOLUTIONS
892
COMMENTS
0
README
CODEWRITING
Score: 300/300
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

Example

For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";
For address = "<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org", the output should be
findEmailDomain(address) = "example.org".
Input/Output

[time limit] 4000ms (js)
[input] string address

Guaranteed constraints:
10 ≤ address.length ≤ 50.

[output] string


https://codefights.com/arcade/intro/level-10/TXFLopNcCNbJLQivP
*/

function findEmailDomain(address) {
    var split = address.lastIndexOf('@');
    return address.slice(split+1);
}
