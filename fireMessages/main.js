//Set database object

var database = firebase.database().ref();
//button executes this function
function updateDB() {
    var name = $("#name").val();
    var message = $("#message").val();
    
    console.log(name + " : " + message);

    //Update database here
    var value = {
        Name: name,
        Message: message
    }
    database.push(value);
    
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var name = row.Name;
    var message = row.Message;
    if (name != "" && message != "") {
    var fullText = "<p>" + name + " : " + message + "</p>";
    $(".allMessages").append(fullText);
    }
})
