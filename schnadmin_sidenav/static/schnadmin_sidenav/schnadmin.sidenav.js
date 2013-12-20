schnadmin.sidenav = {}

schnadmin.sidenav.SELECTOR = '#schnadmin-sidenav'


/**
*   Ensure that the sidenav has always the same height as the current
*   window. Adjusts height on window.resize.
*/
schnadmin.sidenav.ensure_sidenav_height = function() {
    
    var update_height = function() {
         $(schnadmin.sidenav.SELECTOR).css('height', $(window).height() + 'px')
    }
    
    $(window).resize(function() {
        update_height()
    })
    
    update_height()
}



/**
*   Updates the current sidenav link when a new page is loaded.
*   Param ``link_db`` is a dictionary of where each key represents
*   a certain link. The key is the data-link-id attribute of a link.
*   The value of each key is a list of regular expressions representing the
*   urls that need this link to be marked as active.
*/
schnadmin.sidenav.update_current_link = function(link_db) {
    $.each(link_db, function(key, patterns) {
        $.each(patterns, function(i, pattern) {
            url = document.location.pathname 
            if (window.location.search)
                url += + '?' + window.location.search.replace( "?", "" )
            var re = new RegExp(pattern)
            var result = re.exec(url)
            if (result != null) {
                $(schnadmin.sidenav.SELECTOR).find('a[data-link-id="' + key + '"]').addClass('schnadmin-sidenav-current')
            }
        })
    })
}
