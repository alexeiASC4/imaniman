var rownum = 1;
var database=firebase.database().ref();
//button executes this function
function updateDB(){
    var vote =0;
    var name = $("#name").val();
    var gamename=$("#gamename").val();
    var gamel = $("#gamelink").val();
  
    console.log(name + "'s game: " + gamename);
  

    //Update database here
var value ={
    Score:vote,
    Name: name,
    Gamename: gamename,
    Gamelink: gamel
};
database.push(value);}


database.on("child_added", function(rowData){
  var row= rowData.val();
  var vote=row.Score;
    var name=row.Name;  
    var gamename=row.Gamename;
    var gamel=row.Gamelink;
var gamelist="<a href='"+gamel+"'<p>"+ gamename +"  by "+name+ " has "+ vote +" votes </p></a>";
console.log(gamelist);
$("#gamelist").append("<div class='col-md-4'>" + "<a href='http://localhost:8000/" + gamel + "'<p>" + gamename + " by " + name + "</p></a>" + "<button id='like' class='btn btn-default' onclick='elect();'>Vote</button></div>");


})

// $('#like').click(function(){
//     // database.on("child_",function(rowData){
//         console.log("a");
//         // row.Score++;
        
//     // updateDB();
//     // })
// });
function elect(){

database.on("child_added",function(rowData){
    var row = rowData.val();
        
        var votes =row.Score;
        votes++;
        
        console.log(votes);
        

    updateDB();
    noLoop();
    })
}