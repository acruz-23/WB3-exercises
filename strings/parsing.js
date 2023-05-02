function parseAndDisplayName(userName) {
  const spacePosition = userName.indexOf(" ");
  const firstName = userName.slice(0, spacePosition);
  const lastName = userName.slice(spacePosition + 1, userName.length);
  console.log("Name:", userName);
  console.log("First name:", firstName);
  console.log("Last name:", lastName, "\n");
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
