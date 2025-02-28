$(document).ready(function() {
    $("table tbody td").each(function() {
        if (!$(this).text().includes("Not Available") && $(this).index() !== 0) {
            $(this).css("cursor", "pointer");
            $(this).on("click", function() {
                $(this).toggleClass("selected");
            });
        }
    });

    $("table td").click(function() {
        let activity = $(this).text(); // Get activity name
        let columnIndex = $(this).index(); // Get column index
        let cliffName = $("thead th").eq(columnIndex).text(); // Get cliff site name
        
        if ($(this).hasClass("selected")) {
          $(this).removeClass("selected");
          $("#activity-box li:contains('" + activity + "')").remove(); // Remove activity from list
        } else {
          $(this).addClass("selected");
          $("#activity-box ul").append("<li>" + activity + " - " + cliffName + "</li>");
        }
    
        // Show or Hide the box
        if ($("#activity-box li").length > 0) {
          $("#activity-box").fadeIn();
        } else {
          $("#activity-box").fadeOut();
        }
      });
});

$(document).ready(function() {
    $("table td").click(function() {
      let activity = $(this).text(); 
      let columnIndex = $(this).index();
      let cliffName = $("thead th").eq(columnIndex).text();
  
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        $("#activity-box li:contains('" + activity + "')").remove();
      } else {
        $(this).addClass("selected");
        $("#activity-box ul").append("<li>" + activity + " <span>at " + cliffName + "</span></li>");
      }
  
      if ($("#activity-box li").length > 0) {
        $("#activity-box").fadeIn();
      } else {
        $("#activity-box").fadeOut();
      }
    });
    
    $("button").click(function() {
      alert("Thank you! We have received your enquiry.");
    });
  });