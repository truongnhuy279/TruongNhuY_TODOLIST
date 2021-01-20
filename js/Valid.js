function Valid() {
    this.checkEmty = function (input, divId, mess) {
        if (input === "") {
            getEle(divId).style.display = "block";
            getEle(divId).innerHTML = mess;
            return false;
        } else {
            getEle(divId).style.display = "none";
            getEle(divId).innerHTML = "";
            return true;
        }
    };
}