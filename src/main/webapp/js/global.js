var serviceHost =//"http://erpebtest-env.bbpjkaegkj.ap-south-1.elasticbeanstalk.com/application/";
"http://localhost:5000/application";

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */


const formToJSON = elements =>
  [].reduce.call(
    elements,
    (data, element) => {
      if (
        element.type != "submit" &&
        element.type != "button" &&
        element.tagName != "BUTTON" &&
        element.tagName != "DIV"
      ) {
        var elemNameSplit = element.name.split(".");
        if (elemNameSplit.length > 1) {
          var innerObj = data[elemNameSplit[0]];

          if (innerObj == undefined) innerObj = {};
          innerObj[elemNameSplit[1]] = element.value;

          if (data[elemNameSplit[0]] == undefined) {
            data[elemNameSplit[0]] = innerObj;
          }
        } else {
          data[element.name] = element.value;
        }
      }
      return data;
    },
    {}
  );

function prepareObjectMap(obj, objParentKey, map) {
  for (var prop in obj) {
    if (typeof obj[prop] == "object") {
      // object
      prepareObjectMap(obj[prop], prop, map);
    } else {
      var key;
      if (objParentKey != "") {
        key = objParentKey + "." + prop;
      } else {
        key = prop;
      }
      // something else
      map[key] = obj[prop];
    }
  }
}

function populateFrmDataFromMapper(frm, data) {
  $.each(data, function(key, value) {
    var ctrl = $("[name='" + key + "']", frm);
    switch (ctrl.prop("type")) {
      case "radio":
      case "checkbox":
        ctrl.each(function() {
          if ($(this).attr("value") == value) $(this).attr("checked", value);
        });
        break;
      default:
        ctrl.val(value);
    }
  });
}
