function parseAndDisplayName(userName) {
  const trimmedUserName = userName.trim();
  let firstName, middleName, lastName, firstSpacePosition, lastSpacePosition;
  if (trimmedUserName.indexOf(" ") == -1) {
    firstName = trimmedUserName;
    middleName = "N/A";
    lastName = "N/A";
  } else if (trimmedUserName.indexOf(" ") == trimmedUserName.lastIndexOf(" ")) {
    firstSpacePosition = userName.indexOf(" ");
    firstName = trimmedUserName.slice(0, firstSpacePosition);
    middleName = "N/A";
    lastName = trimmedUserName.slice(
      firstSpacePosition + 1,
      trimmedUserName.length
    );
  } else {
    firstSpacePosition = trimmedUserName.indexOf(" ");
    lastSpacePosition = trimmedUserName.lastIndexOf(" ");
    firstName = trimmedUserName.slice(0, firstSpacePosition);
    middleName = trimmedUserName.slice(
      firstSpacePosition + 1,
      lastSpacePosition
    );
    lastName = trimmedUserName.slice(
      lastSpacePosition + 1,
      trimmedUserName.length
    );
  }
  console.log("Name:", userName);
  console.log("First name:", firstName);
  console.log("Middle name:", middleName);
  console.log("Last name:", lastName);
  console.log("-".repeat(20));
}

parseAndDisplayName("Cher".trim());
parseAndDisplayName("Brenda Kaye".trim());
parseAndDisplayName("Dana Lynn Wyatt");
