var regexEmail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
var regexPhoneNumber = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
$('#lien-he .form-control').on('blur',(evt)=>{
    var id = "#"+evt.target.id;
    var  err = "#err-"+evt.target.id;
    // Check input trống
    if(evt.target.value == "" || evt.target.value == null){
        
        
        $(err).show();               
   }else{
        $(err).hide();
        // Check email không đúng định dạng
        if(evt.target.id == "email"){
            let  err2 = "#err-"+evt.target.id + "-2";
            if(!regexEmail.test(evt.target.value)){
                $(err2).show();                     
            }else{
                $(err2).hide();    
            }
        }
        else if(evt.target.id == "phone"){
            let  err2 = "#err-"+evt.target.id + "-2";
            console.log(regexPhoneNumber.test(evt.target.value))
            if(!regexPhoneNumber.test(evt.target.value)){
                console.log(1)
                $(err2).show();                     
            }else{
                console.log(0)
                $(err2).hide();    
            }
        }
   }
})