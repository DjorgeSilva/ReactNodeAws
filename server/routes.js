const express = require("express");
const {
  createOrUpdate,
  deleteUserById,
  getUserById,
  readAllUsers,
} = require("./db.js");

const router = express.Router();

// READ ALL Users
router.get("/users", async (req, res) => {
  const { success, data } = await readAllUsers();
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

// Get User by ID
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { success, data } = await getUserById(id);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

// Create User
router.post("/user", async (req, res) => {
  const user = req.body;
  // validate body
  if (!user.id) {
    return res
      .status(400)
      .json({ success: false, message: "id é obrigatório" });
  }
  if (!user.name) {
    return res
      .status(400)
      .json({ success: false, message: "nome é obrigatório" });
  }
  if (!user.age) {
    return res
      .status(400)
      .json({ success: false, message: "idade é obrigatório" });
  }
  if (!user.job) {
    return res
      .status(400)
      .json({ success: false, message: "cargo é obrigatório" });
  }
  if (!user.email) {
    return res
      .status(400)
      .json({ success: false, message: "email é obrigatório" });
  }

  const { success, data } = await createOrUpdate(req.body);

  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

// Update User by ID
router.put("/user/:id", async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  // validate body
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "id é obrigatório" });
  }
  if (!user.name) {
    return res
      .status(400)
      .json({ success: false, message: "nome é obrigatório" });
  }
  if (!user.age) {
    return res
      .status(400)
      .json({ success: false, message: "idade é obrigatório" });
  }
  if (!user.job) {
    return res
      .status(400)
      .json({ success: false, message: "cargo é obrigatório" });
  }
  if (!user.email) {
    return res
      .status(400)
      .json({ success: false, message: "email é obrigatório" });
  }

  user.id = id;
  const { success, data } = await createOrUpdate(user);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

// Delete User by Id
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { success, data } = await deleteUserById(id);
  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

module.exports = router;
