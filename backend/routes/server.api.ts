import express from 'express';
const router = express.Router();
const multer = require("multer");
const { roleCheck } = require("../middlewares/auth");
const accountCtrl = require("../controller/accountController");
const userCtrl = require("../controller/userController");
const studentCtrl = require("../controller/studentController");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/login", accountCtrl.loginUser);

router.post("/addUser", roleCheck(["Global Admin"]), userCtrl.addUser);
router.post(
  "/addStudent",
  roleCheck(["Global Admin"]),
  upload.any(),
  studentCtrl.addStudent
);

router.get(
  "/getUsers",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.getUsers
);

router.get(
  "/getStudents",
  roleCheck(["Global Admin", "Super Admin"]),
  studentCtrl.getStudents
);

router.get(
  "/getUser/:id",
  roleCheck(["Global Admin", "Super Admin", "Admin"]),
  userCtrl.getUserById
);

router.post(
  "/updateUser/:id",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.updateUser
);

router.post(
  "/deleteUser/:id",
  roleCheck(["Global Admin", "Super Admin"]),
  userCtrl.deleteUser
);

module.exports = router;
