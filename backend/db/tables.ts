const userTable = require("./models/users");
const studentTable = require("./models/student");


userTable.sync({ force: false });
studentTable.sync({ force: false });
