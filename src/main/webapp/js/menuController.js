//Main menu control
function loadHomePage() {
  $("#mainContainer").load("dashboard.html");
  $("#sideBar").load("./sideBar/homePages.html");
  $("#selectedMenu").html("Home");
}

//Side Bar Control
function loadAdminPages() {
  $("#mainContainer").html("");
  $("#sideBar").load("./sideBar/adminPages.html");
  $("#selectedMenu").html("Admin Work");
}

function loadUserPages() {
  $("#mainContainer").html("");
  $("#sideBar").load("./sideBar/userPages.html");
  $("#selectedMenu").html("User Management");
}

function loadStudentPages() {
  $("#mainContainer").html("");
  $("#sideBar").load("./sideBar/studentPages.html");
  $("#selectedMenu").html("Student Management");
}

function loadTimeTablePages() {
  $("#mainContainer").html("");
  $("#sideBar").load("./sideBar/timeTable.html");
  $("#selectedMenu").html("Time Table");
}

function loadSyllabus() {
  $("#mainContainer").load("./syllabus/syllabus.html");
  //$("#mainContainer").load("./syllabus/tableOfContent.html");
  $("#selectedMenu").html("Syllabus");
}

function loadMyProfilePage() {
  $("#mainContainer").load("./profile/profile.html");
  $("#sideBar").load("./sideBar/profilePages.html");
}

//Side menu control
function loadAddUserPage() {
  $("#mainContainer").load("./user/addUser.html");
}

function loadSearchUserPage() {
  $("#mainContainer").load("./user/searchUser.html");
}

function loadUsersPage() {
  $("#mainContainer").load("./user/users.html");
}
function loadAllColleges() {
  $("#mainContainer").load("./admin/CollegeDetails.html");
}
function addCollege() {
  $("#mainContainer").load("./admin/addColleges.html");
}

function onLogOutClick() {
  window.location = "../";
}

function loadAcademicYear() {
  $("#mainContainer").load("./admin/academicYear.html");
}

function loadCourses() {
  $("#mainContainer").load("./admin/courses.html");
}

function loadDepartments() {
  $("#mainContainer").load("./admin/departments.html");
}

function loadSections() {
  $("#mainContainer").load("./admin/sections.html");
}

function loadSemesterFees() {
  $("#mainContainer").load("./admin/semesterFees.html");
}

function loadStreams() {
  $("#mainContainer").load("./admin/streams.html");
}

function loadSubjects() {
  $("#mainContainer").load("./admin/subjects.html");
}

function loadTeachers() {
  $("#mainContainer").load("./admin/teachers.html");
}

function loadUserGroups() {
  $("#mainContainer").load("./admin/userGroups.html");
}

function loadStudents() {
  $("#mainContainer").load("./student/students.html");
}

function loadAddStudent() {
  $("#mainContainer").load("./student/addStudent.html");
}

function loadTimeTablePage() {
  $("#mainContainer").load("./timetable/timeTable.html");
}
function loadManagePassword() {
  $("#mainContainer").load("./profile/managePassword.html");
}

function loadPeriodTimings() {
  $("#mainContainer").load("./admin/periodTimingLkUps.html");
}

//Not specific to the menu
let addCount = 0;
function loadAddresDetails() {
  if (addCount % 2 === 0) {
    document.getElementById("addresDetails").style.display = "";
    $("#addresDetailsP").load("./student/studentAddress.html");
  } else document.getElementById("addresDetails").style.display = "none";
  addCount++;
}
let acadCount = 0;
function loadAcademicDetails() {
  if (acadCount % 2 === 0) {
    document.getElementById("academicDetails").style.display = "block";
    $("#academicDetailsP").load("./student/studentData.html");
  } else {
    document.getElementById("academicDetails").style.display = "none";
  }
  acadCount++;
}
let basicCount = 0;
function loadBasicDetails() {
  if (basicCount % 2 === 0) {
    document.getElementById("basicDetails").style.display = "";
    $("#basicDetailsP").load("./user/userData.html");
  } else {
    document.getElementById("basicDetails").style.display = "none";
  }
  basicCount++;
}

function loadUserDetails() {
  $("#userDetails").load("./user/userData.html");
}
