/**
 * @file
 * Defines the ting search overlay and makes it available for other scripts.
 */
(function($) {
  "use strict";

  /**
   * Add search overlay function, so all search related JavaScripts can call it.
   */
  Drupal.TingSearchOverlay = function(toggle) {
    // Default toggle to false.
    toggle = typeof toggle !== 'undefined' ? toggle : false;

    // Try to get overlay
    var overlay = $('.search-overlay--wrapper');
    if (!overlay.length) {
      // Overlay not found so create is and display.
      overlay = $('<div class="search-overlay--wrapper"><div class="search-overlay--inner"><i class="icon-spinner icon-spin search-overlay--icon"></i><p class="search-overlay--text">' + Drupal.t('Searching please wait...') + '</p><p class="close"><a href="#">' + Drupal.t('Close') + '</a></p></div></div>');
      $('body').prepend(overlay);
    }
    else {
      // Overlay found.
      if (toggle) {
        // If toggle remove it.
        overlay.remove();
      }
    }
  };

  // Hook into the overlays "Close" link and stop page loading if clicked.
  $(document).ready(function() {
    $('.search-overlay--wrapper .close').live('click', function() {
      window.stop();
      Drupal.TingSearchOverlay(true);
    });
  });

}(jQuery));
