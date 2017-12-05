jQuery(document).ready(function ($) { $('.counter').counterUp({  delay: 10, time: 1000 });});
$(document).ready(function () { if ($("#errlabel").text() != "") {  $(".signin-box").toggleClass("display");  };});
function validatelastname() {
    var firstname = document.getElementById("txtName").value;
    var lastname = document.getElementById("txtLastName").value;
    if (firstname != "" && lastname != "") {
        if (firstname == lastname) {
            document.getElementById("dverrormsg").style.display = 'block';
            return false;
        }
        else { document.getElementById("dverrormsg").style.display = 'none';
        }
    }
}
function validation() {
    //added by narvesh for validattion box
    debugger;
    if ($("#TextCityZip").val() == "City, State or ZIP") {
        $("#TextCityZip").css("border", "1px solid #ff0000");
        $("#TextCityZip").css("border-radius", "5px");
        $("#TextCityZip").css("width", "68% !important");
//        $("#TextCityZip").width('68%');
        return false;
    }

    if ($("#ddlPriceMax").val() != "0") {  

        var minprice = $("#ddlPriceMin").val();
        if (minprice < 1000) {
            minprice = "0" + minprice;
        }
        var maxprice = $("#ddlPriceMax").val();
        if (maxprice < 1000) {
            $("#ddlBedrooms").css("border", "");
            maxprice = "0" + maxprice;
        }
        if (minprice != "" && maxprice != "") {
            if (minprice >= maxprice) {
                $("#ddlPriceMin").css("border", "1px solid #ff0000");
                $("#ddlMetroArea").css("border", "");
                $("#ddlBathrooms").css("border", "");
                $("#ddlPriceMax").css("border", "");
                return false;
            }

        }
    }
}
function valUser() {
    if (document.getElementById("dverrormsg").style.display == 'block') {
        return false;
    }
    if (document.getElementById("dverrormsg").style.display == 'none') {
    }
    if ($("#txtName").val() == "") {
        $("#txtName").css("border", "1px solid #ff0000");
        return false;
    }
    if ($("#txtLastName").val() == "") {
        $("#txtName").css("border", "");
        $("#txtLastName").css("border", "1px solid #ff0000");
        return false;
    }

    if ($("#txtEmail").val() == "") {
        $("#txtEmail").css("border", "1px solid #ff0000");
        $("#txtName").css("border", "");
        $("#txtLastName").css("border", "");
        return false;
    }
    if ($("#txtEmail").val() != "Email address" && $("#txtEmail").val() != "") {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($("#txtEmail").val())) {
            $("#txtEmail").css("border", "1px solid #ff0000");
            $("#txtName").css("border", "");
            $("#txtLastName").css("border", "");
            return false;
        }
    }

    if ($("#txtPhone").val() == "") {
        $("#txtPhone").css("border", "1px solid #ff0000");
        $("#txtEmail").css("border", "");
        $("#txtName").css("border", "");
        $("#txtLastName").css("border", "");
        return false;
    }
    if ($("#txtPhone").val() != "") {
        var mobReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
             //added by shalinder
        var mobReg2 = /^(\([0-9]{3}\)) [0-9]{3}-[0-9]{4}$/;
        if (!mobReg.test($("#txtPhone").val()) && !mobReg2.test($("#txtPhone").val())) {
            $("#txtPhone").css("border", "1px solid #ff0000");
            $("#txtEmail").css("border", "");
            $("#txtName").css("border", "");
            $("#txtLastName").css("border", "");
            return false;
        }
    }
    if ($("#MetroArea").val() == "") {
        $("#txtEmail").css("border", "");
        $("#MetroArea").css("border", "1px solid #ff0000");
        $("#txtName").css("border", "");
        $("#txtLastName").css("border", "");
        $("#txtPhone").css("border", "");
        return false;
    }
    if ($("#txtCaptcha").val() == "") {
        $("#ErrorCaptcha").css("visibility", "visible");
        $("#MetroArea").css("border", "");
        $("#txtPhone").css("border", "");
        $("#txtEmail").css("border", "");
        $("#txtName").css("border", "");
        $("#txtLastName").css("border", "");
        return false;
    }
}

function valLoginUser() {
    if ($("#inputLogin").val() == "") {
        $("#inputLogin").css({ "border-color": "red" });
        return false;
    }
    if ($("#inputLogin").val() != "") {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test($("#inputLogin").val())) {
            $("#inputLogin").css({ "border-color": "red" });
            return false;
        }
    }
    if ($("#inputPassword").val() == "") {
        $("#inputPassword").css({ "border-color": "red" });
        $("#inputLogin").css({ "border-color": "#ccc" });
        return false;
    }
    else {
        $("#inputPassword").css({ "border-color": "#ccc" });
        $("#inputLogin").css({ "border-color": "#ccc" });
    }
}
