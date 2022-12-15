function checkemail(){
    if(document.myForm.email.value.length !- 0){
        if(document.myForm.email.value.charAt(0)=="."      ||
            document.myForm.email.value.charAt(0)=="@"     ||
            document.myForm.email.value.indexOf('@', 0)==-1||
            document.myForm.email.value.indexOf('.',0)==-1 ||
            document.myForm.email.value.lastIndexOf('@')==document.myForm.email.value.length-1 ||
            document.myForm.email.value.lastIndexOf('.')==document.myForm.email.value.length-1){
        alert("E-mail format wrong!");
        document.myForm.email.focus();
        return false;
        }
    }
}
