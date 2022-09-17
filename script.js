const button = document.querySelector("button")

button.addEventListener("click", () => {
  Notification.requestPermission().then(perm => {
    if (perm === "granted") {
      new Notification("Hello")
      console.log("granted")
    }
  })

  //alert("hi")

})
