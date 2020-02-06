function saveUser(jsonData) {
  $(".overlay").show();
  $.ajax({
    type: "POST",
    mode: "cors",
    credentials: "same-origin",
    url: serviceHost+"/users/addNewUser",
    data: JSON.stringify(jsonData),
    contentType: "application/json",
    crossdomain: true,
    beforeSend: function() {},
    complete: function() {},
    success: function(resp, status) {
      alert(resp.responseMsg);
      // $("#successDiv").load("./pages/successPage.html");
      // setTimeout(function() {
      //   $("#successMessage").text(
      //     "Customer Id : " + resp.customerId + " Created"
      //   );
      //   $("#successDiv").css("display", "block");
      //   $("#customerFormDiv").css("display", "none");
      //   $("#customerSearchResultDiv").css("display", "none");
      //   $(".overlay").hide();
      // }, 500);
      $(".overlay").hide();
    },
    error: function(resp, status) {
      alert(resp);
      $(".overlay").hide();
    }
  });
}

function validateUserForm() {
  // if ($("#customerName").val() == "") {
  //   alert("Please Provide Customer Name");
  //   $("#customerName").focus();
  //   return false;
  // } else if ($("#mobileNumber").val() == "") {
  //   alert("Please Provide Mobile Number");
  //   $("#mobileNumber").focus();
  //   return false;
  // } else if ($("#address").val() == "") {
  //   alert("Please Provide Address");
  //   $("#address").focus();
  //   return false;
  // } else if ($("#customerType").val() == "") {
  //   alert("Please Provide Customer Type");
  //   $("#customerType").focus();
  //   return false;
  // } else if ($("#securityDeposit").val() == "") {
  //   alert("Please Provide Security Deposit");
  //   $("#securityDeposit").focus();
  //   return false;
  // } else if ($("#normalJarRate").val() == "") {
  //   alert("Please Provide Jar Rate");
  //   $("#normalJarRate").focus();
  //   return false;
  // } else if ($("#coldJarRate").val() == "") {
  //   alert("Please Provide Jar Rate");
  //   $("#coldJarRate").focus();
  //   return false;
  // } else if ($("#startDate").val() == "") {
  //   alert("Please Provide Start Date");
  //   $("#startDate").focus();
  //   return false;
  // } else if ($("#startDate").val() == "") {
  //   alert("Please Provide Start Date");
  //   $("#startDate").focus();
  //   return false;
  // }
  // customerId = $("#customerIdHidden").val();
  // var data =
  //   '{"customerId":' +
  //   customerId +
  //   ',"customerName":"' +
  //   $("#customerName").val() +
  //   '",' +
  //   '"customerMobileNumber":"' +
  //   $("#mobileNumber").val() +
  //   '","address":"' +
  //   $("#address").val() +
  //   '",' +
  //   '"customerType":"Regular","securityDeposit":"' +
  //   $("#securityDeposit").val() +
  //   '",' +
  //   '"normalJarRate":"' +
  //   $("#normalJarRate").val() +
  //   '","coldJarRate":"' +
  //   $("#coldJarRate").val() +
  //   '",' +
  //   '"startDate":"' +
  //   $("#startDate").val() +
  //   '","active":"yes","noOfContainer":"0"}';

  // console.log(data);
  saveUser(data);
}

var customers;
function getAllUserNames() {
  $.ajax({
    type: "GET",
    mode: "cors",
    credentials: "same-origin",
    url: "http://localhost:8080/api/customer/getAllCustomer",
    crossdomain: true,
    beforeSend: function() {},
    complete: function() {},
    success: function(resp, status) {
      customers = resp;
      autocomplete(document.getElementById("customerNameSearch"), customers);
    },
    error: function(resp, status) {
      console.log("Error");
    }
  });
}

function getCustomerById() {
  var customerId = $("#customerIdHidden").val();

  $.ajax({
    type: "GET",
    mode: "cors",
    credentials: "same-origin",
    url: "http://localhost:8080/api/customer/customerById/" + customerId,
    crossdomain: true,
    beforeSend: function() {},
    complete: function() {},
    success: function(resp, status) {
      console.log(resp);
      $("#customerName").val(resp.customerName);
      $("#customerName").attr("disabled", "disabled");
      $("#mobileNumber").val(resp.customerMobileNumber);
      $("#mobileNumber").attr("disabled", "disabled");
      $("#address").val(resp.address);
      $("#address").attr("disabled", "disabled");
      $("#customerType").val(resp.customerType);
      $("#customerType").attr("disabled", "disabled");
      $("#securityDeposit").val(resp.securityDeposit);
      $("#securityDeposit").attr("disabled", "disabled");
      $("#normalJarRate").val(resp.normalJarRate);
      $("#normalJarRate").attr("disabled", "disabled");
      $("#coldJarRate").val(resp.coldJarRate);
      $("#coldJarRate").attr("disabled", "disabled");
      $("#startDate").val(resp.startDate);
      $("#startDate").attr("disabled", "disabled");
      $("#createCustomerBtn").css("display", "none");

      $("#customerSearchResultDiv").css("display", "block");
    },
    error: function(resp, status) {
      console.log("Error");
    }
  });
}

function enableCustomerEdit() {
  $("#customerName").removeAttr("disabled", "disabled");
  $("#mobileNumber").removeAttr("disabled", "disabled");
  $("#address").removeAttr("disabled", "disabled");
  $("#customerType").removeAttr("disabled", "disabled");
  $("#securityDeposit").removeAttr("disabled", "disabled");
  $("#normalJarRate").removeAttr("disabled", "disabled");
  $("#coldJarRate").removeAttr("disabled", "disabled");
  $("#startDate").removeAttr("disabled", "disabled");
  $("#createCustomerBtn").css("display", "inline-block");
  $("#editCustomerBtn").css("display", "none");
  console.log($("#customerIdHidden").val());
}

function getAllCustomer() {
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/customer/getAllCustomer",
    crossdomain: true,
    beforeSend: function() {},
    complete: function() {},
    success: function(resp, status) {
      var trHtml = "";
      $.each(resp, function(i, item) {
        trHtml +=
          "<tr><td>" +
          item.customerId +
          "</td><td>" +
          item.customerName +
          "</td>" +
          "<td>" +
          item.customerMobileNumber +
          "</td>" +
          "<td><button class='btn btn-primary btn-sm'>Delete</button>&nbsp;" +
          "<button class='btn btn-primary btn-sm'>Details</button></td></tr>";
      });
      $("#allCustomerTable").append(trHtml);
      $("#allCustomerTable").DataTable();
    },
    error: function(resp, status) {
      console.log("Error");
    }
  });
}

function updateCustomer() {}
