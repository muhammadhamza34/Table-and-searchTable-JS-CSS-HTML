var student1={
    name:"Muhammad Hamza",
    fatherName:"Maqsood Nasir",
    
    contact:"03353456315",
    rollNo:123,
    result:"pass",
    hobbies:['a','b','c',],
    address:{
        country:"pakistan",
        city:"Karachi",
        area:"hussainabad",
    },
    isClearInAllSubjects:true,
    calculatedDiscount:function(){
        console.log("Function Play")
    },

};
var student2={
    name:"Muhammad Ahmed",
    fatherName:"Maqsood Nasir",
    
    contact:"03353456315",
    rollNo:123,
    result:"pass",
    hobbies:['a','b','c',],
    address:{
        country:"pakistan",
        city:"Karachi",
        area:"hussainabad",
    },
    isClearInAllSubjects:true,
    calculatedDiscount:function(){
        console.log("Function Play")
    },

};
var student3={
    name:"Hamza Muhammad",
    fatherName:"Maqsood Nasir",
    
    contact:"03353456315",
    rollNo:123,
    result:"pass",
    hobbies:['a','b','c',],
    address:{
        country:"pakistan",
        city:"Karachi",
        area:"hussainabad",
    },
    isClearInAllSubjects:true,
    calculatedDiscount:function(){
        console.log("Function Play")
    },

};
var student4={
    name:"Ahmed Muhammad",
    fatherName:"Maqsood Nasir",
    
    contact:"03353456315",
    rollNo:123,
    result:"pass",
    hobbies:['a','b','c',],
    address:{
        country:"pakistan",
        city:"Karachi",
        area:"hussainabad",
    },
    isClearInAllSubjects:true,
    calculatedDiscount:function(){
        console.log("Function Play")
    },


};
var student5={
    name:"hamza",
    fatherName:"Maqsood Nasir",
    
    contact:"03353456315",
    rollNo:123,
    result:"pass",
    hobbies:['a','b','c'],
    address:{
        country:"pakistan",
        city:"Karachi",
        area:"hussainabad",
    },
    isClearInAllSubjects:true,
    calculatedDiscount:function(){
        console.log("Function Play")
    },

};
var tablebody=document.getElementById("tablebody")
var studentlist=[student1,student2,student3,student4,student5]

for(var i=0;i<=studentlist.length;i++){
    studentlist[i].id=i+1
    obj=studentlist[i]

    tablebody.innerHTML +='<tr><td>'+obj.name+'</td><td>'+obj.fatherName+'</td><td>'+obj.contact+'</td><td>'+obj.result+'</td><td>'+obj.id+'</td></tr>'

}
function searchval(){
    var inpval=document.getElementById("inpval")
    var showname=document.getElementById("showname")
    var showFname=document.getElementById("showFname")
    var showcontact=document.getElementById("showcontact")
    var showresult=document.getElementById("showresult")
    var showrollnum=document.getElementById("showrollnum")


for(var i=0;i<=studentlist.length;i++){
    
    std=studentlist[i]
    if(inpval.value==std.id){
        showname.innerHTML=std.name
        showFname.innerHTML=std.fatherName
        showcontact.innerHTML=std.contact
        showresult.innerHTML=std.result
        showrollnum.innerHTML=std.id
    }

    
}
}













// student5.calculatedDiscount()
// student.age=22
// student.institute="SAIMS"
// delete student.age
// console.log(student5.address.city)
// console.log(student5)
// console.log(student1,student2,student3,student4,student5)
