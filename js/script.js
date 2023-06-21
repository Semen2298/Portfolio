function setCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  function delCookie(name) {
    setCookie(name,"",-1);
  }

  if (getCookie("counter")) {
    var count=getCookie("counter")+1;
    setCookie("counter",count,365);
  } else {
    setCookie("counter",1,365);
  }
  
  console.log("Вы зашли на эту страницу "+getCookie("counter"));