import express from "express";
const router = express.Router();
const multer = require("multer");
const { roleCheck } = require("../middlewares/auth");
const accountCtrl = require("../controller/accountController");
const userCtrl = require("../controller/userController");
const studentCtrl = require("../controller/studentController");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/login", accountCtrl.loginUser);
router.post(
  "/logout",
  roleCheck(["Global Admin", "Super Admin", "Admin"]),
  accountCtrl.logout
);

router.post("/user", roleCheck(["Global Admin"]), userCtrl.createUser);
router.post(
  "/student",
  roleCheck(["Global Admin"]),
  upload.any(),
  studentCtrl.createStudent
);

router.get(
  "/users",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.getAllUsers
);

router.get(
  "/students",
  roleCheck(["Global Admin", "Super Admin"]),
  studentCtrl.getAllStudents
);

router.get(
  "/user/:id",
  roleCheck(["Global Admin", "Super Admin", "Admin"]),
  userCtrl.getUserById
);

router.put(
  "/user/:id",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.updateUser
);

router.delete(
  "/user/:id",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.deleteUser
);

module.exports = router;
