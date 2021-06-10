    function loadXMLDoc(theURL)
        {
            if (window.XMLHttpRequest)
            {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
                xmlhttp=new XMLHttpRequest();
            }
            else
            {// code for IE6, IE5
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    // alert(xmlhttp.responseText);
                }
            }
            xmlhttp.open("GET", theURL, true);
            xmlhttp.setRequestHeader("session_id", "9gx7G1yrYy32WtweXf6Rhr9fb3pyfvDiWN8zUr2jXG4BTk9ZHpvWf7nlyK0jxqss9GwrRrFBfbs8JaoxjkptjjmquzRDMZXC");
            xmlhttp.setRequestHeader("PHPSESSID", "gn7ivpvfbrokb1ngm6kgg1nmh1");
            xmlhttp.send();
        }

var xmlhttp=false;
//loadXMLDoc('http://192.168.0.12:8080/list.txt');
loadXMLDoc('/ybs/portal');
if(xmlhttp==false)
    { /* set timeout or alert() */ }
else
    { var contents = xmlhttp.responseText;
    console.log(contents);
    document.write(contents); }
    