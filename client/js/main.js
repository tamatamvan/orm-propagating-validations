$(document).ready(function() {
  getAll();
})

function getAll() {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/api/eo",
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
      console.log(data);
      var eos = '';
      for (var i = 0; i < data.length; i++) {
        var no = i + 1;
        eos += `<tr>
          <td>${data[i].eventName}</td>
          <td>${data[i].eventTitle}</td>
          <td>${data[i].email}</td>
          <td>${data[i].dateCreated}</td>
        </tr>`;
      }
      $('#list-eos').append(eos);
    }
  })
}

function postNewEO() {
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/eo",
    dataType: "json",
    data: {
      name: $('#eventName').val(),
      title: $('#eventTitle').val(),
      email: $('#eoEmail').val(),
      date: $('#dateCreated').val()
    },
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
      console.log(data.message);
      if (!data.message) {
        var eo = `<tr>
          <td>${data.eventName}</td>
          <td>${data.eventTitle}</td>
          <td>${data.email}</td>
          <td>${data.dateCreated}</td>
        </tr>`;
        $('#list-eos').append(eo);
      }
    }
  })
}
