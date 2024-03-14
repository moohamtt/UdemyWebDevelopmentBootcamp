// Constuctor Function
 function MyObj(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
    this.move = function() {
        // anonymous func
    }
 }

 function anotherAddEventListener(typeOfEvent, callback){
    let e = {
        type: "ham",
        key: "m",
    }

    if(e.type===typeOfEvent){
        callback(e);
    }
 }

 anotherAddEventListener("ham", function(e){
    alert(e.key);
 })