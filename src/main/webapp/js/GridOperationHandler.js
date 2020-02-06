var GridOperationHandler = function()
{
    
};

GridOperationHandler.prototype.doGridOperation=function(url, grid, mode, jsonData,modal) {
    $(".overlay").show();
  $.ajax({
    type: mode,
    mode: "cors",
    credentials: "same-origin",
    url: url,//serviceHost + "/college/add",
    data: JSON.stringify(jsonData),
    contentType: "application/json",
    crossdomain: true,
    beforeSend: function() {},
    complete: function() {},
    success: function(resp, status) {
      
      $(".overlay").hide();
      if(resp.success)
      {
          if(modal!==null && modal!==undefined)
          {
              modal.modal("toggle");
          }
          if(grid!==null && grid!==undefined)
          {
              grid.DataTable().ajax.reload();
          }
          else
          {
            alert(resp.responseMsg);
          }
      }
      else
      {
          alert(resp.responseMsg);
      }
    },
    error: function(resp, status) {
      alert(resp);
      $(".overlay").hide();
    }
  });
};




