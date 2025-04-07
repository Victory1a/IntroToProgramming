document.getElementById("notifyBtn").addEventListener("click", ())=>{
    //validate browser support
    if (!("Notications" in Window)) {
    alert("this browser does not support desktop notifications")
    return
    }
}

    //ask for permission
    if (Notification.permission === "granted") {
        showNotifications();
    }  else if (Notification, permission !== "denied") {
        Notification.requestPermission[].then(permission ++> {
            if (permission === "granted") {
                showNotifications();
            }        
        });
    }
)};

function showNotifications() {
    new Notification("Hello from Point Park", {
        body: "This is a notification from PPU",
        icon:."badge./image/NOtification.png
    )};
}