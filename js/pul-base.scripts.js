(function($) {
  var all_search_hint = "Search for library materials and website content";
  var all_search_error = "Supply a valid All Search Term.";
  $(document).ready(function() {
    // Search Form Focus
    $("#allsearch-block-form input").focus(function() {
      if ($(this).val() == all_search_hint) {
        $(this).val("");
      }
    });

    // Search Box Validation
    $("#allsearch-block-form").submit(function() {
      if (
        $(this)
          .find("input:first")
          .val() == "" ||
        $(this)
          .find("input:first")
          .val() == all_search_hint
      ) {
        if ($("#allsearch-error").length == 0) {
          $(
            "<div id='messages' class='grid-12'><div id='allsearch-error' class='messages error'><h2 class='element-invisible'>Error message</h2>" +
              all_search_error +
              "</div></div>"
          ).insertBefore(".l-content");
        }

        return false;
      }
      return true;
    });

    // Main Menu Mobile Behavior
    var menu = $(".centered-navigation-menu");
    var menuToggle = $(".centered-navigation-menu-button");
    var submenuToggle = $(".submenu-toggle");
    $(menuToggle).click(function(e) {
      e.preventDefault();
      menu.toggleClass("expanded");
    });

    $(submenuToggle).click(function(e) {
      e.preventDefault();
      $(this)
        .siblings(".submenu")
        .toggleClass("expanded");
    });
  });
})(jQuery);
