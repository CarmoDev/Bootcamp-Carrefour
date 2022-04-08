function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "admin") {
      admins.push(key);
    }
  }
  return admins;
}

const users = new Map();

users.set("Stephani", "admin");
users.set("Jefferson", "admin");
users.set("Jorge", "user");
users.set("Pedro", "user");

console.log(getAdmins(users));
