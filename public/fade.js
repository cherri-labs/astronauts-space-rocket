/* usage:
          <div id="sidebar">
            <button class="toggle">Show</button>
            <button class="popup">Button 1</button>
            <button class="popup">Button 2</button>
            <button class="popup toggle">Hide</button>
          </div>
*/

$(document).ready(function(){
    const $bar = $(".popup");
    $bar.fadeOut();

    $(".toggle").hover(function(){
        if (!$bar.is(":visible")) {
            $(".toggle").fadeOut();
            $bar.fadeIn();
        }
    });
    $(".toggle").click(function(){
        if ($bar.is(":visible")) {
            $(".toggle").fadeIn();
            $bar.fadeOut();
        }
    });
});
