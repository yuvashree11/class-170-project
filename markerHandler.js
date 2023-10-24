AFRAME.registerComponent("markerHandler", {
    init: async function () {
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker is found")
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker is lost")
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderSummaryButton = document.getElementById("order-summary-button");
      var orderButtton = document.getElementById("order-button");
  
      // Handling Click Events
      orderSummaryButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks For Order!",
          text: " ",
          timer: 2000,
          buttons:false
        });
      });
    },
  
    handleMarkerLost: function () {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    }
  });
  