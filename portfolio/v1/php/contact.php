<?php

$action = $_REQUEST['action'];
if($action=="") /*display the contact form */
{
?>
        <form action="" method="POST" enctype="multipart/form-data">

            <input type="hidden" name="action" value="submit">
            Your name: <br>
            <input type="name" type="text" value="" size="30"><br>
            Your email: <br>
            <input type="email" type="text" value="" size="30"><br>
            Your message: <br>
            <input type="submit" value="Send email"/>
        </form>

<?php
    }
    else
    {
        $name=$_REQUEST['name'];
        $email=$_REQUEST['email'];
        $message=$_REQUEST['message'];
        if(($name=="")||($email=="")||($message==""))
        {
            echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
        else
        {
            $from="From: $name<$email>\r\nReturn-path: $email";
            $subject="Message sent using your contact form";
            mail("ajones061392@gmail.com", $subject, $message, $from);
            echo "Email sent!";
        }
    }
?>

