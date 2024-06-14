const express = require("express");
const {
  getAllUsers,
  getUserById,
  changeUserStatus,
  deleteUserById,
  changeUserRole,
} = require("../controllers/admin.controller");
const { generateResetPasswordEmail } = require("../controllers/user.controller");

const router = express.Router();

router.route("/users").get(getAllUsers);
router.route("/user/:_id").get(getUserById).delete(deleteUserById);


router.route("/user/:_id/change-status").patch(changeUserStatus);
router.route("/user/:_id/change-role").patch(changeUserRole);
router.route("/user/:_id/reset-password").post(generateResetPasswordEmail);

module.exports = router;
