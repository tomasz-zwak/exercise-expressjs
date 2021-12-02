const db = require("./db");

async function getAll() {
  return await db.execute("SELECT * FROM users");
}

async function findById(id) {
  return await db.execute("SELECT * FROM users WHERE id = ?", [id]);
}

async function create(user) {
  return await db.execute("INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)", [
    user.firstName,
    user.lastName,
    user.email,
  ]);
}

async function update(user, id) {
  return await db.execute(
    "UPDATE users SET user.first_name = ?, user.last_name = ?, user.email = ? WHERE user.id = ?",
    [user.firstName, user.lastName, user.email, id]
  );
}

async function destroy(id) {
  return await db.execute("DELETE from USERS where user.id = ?", [id]);
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  destroy,
};
