require([
    '$',
    'pinny',
    'sheet-right',
    'fixed-sticky',
    'jquery-sticky'
],
function(
    $,
    Pinny,
    sheetRight,
    FixedSticky,
    jQuerySticky
) {
    var $header = $('.playground-header');
    var $footer = $('.playground-footer');
    var $clearStickyHeader = $('.js-clear-sticky-header');
    var $clearStickyFooter = $('.js-clear-sticky-footer');

    var $fixedStickyHeaderTrigger = $('.js-header-sticky__fixed-sticky');
    var $fixedStickyFooterTrigger = $('.js-footer-sticky__fixed-sticky');
    var $jqueryStickyHeaderTrigger = $('.js-header-sticky__stickyjs');
    var $jqueryStickyFooterTrigger = $('.js-footer-sticky__stickyjs');

    var _bindFixedSticky = function() {
        $fixedStickyHeaderTrigger.on('click', function(e) {
            e.preventDefault();
            $header.addClass('fixedsticky fixedsticky__header');
            $header.fixedsticky();
            $clearStickyHeader.removeAttr('hidden');

            $jqueryStickyHeaderTrigger.attr('hidden', true);
            $jqueryStickyFooterTrigger.attr('hidden', true);
        });

        $fixedStickyFooterTrigger.on('click', function(e) {
            e.preventDefault();
            $footer.addClass('fixedsticky fixedsticky__footer');
            $footer.fixedsticky();
            $clearStickyFooter.removeAttr('hidden');

            $jqueryStickyHeaderTrigger.attr('hidden', true);
            $jqueryStickyFooterTrigger.attr('hidden', true);
        });


        // Clearing bindings
        $clearStickyHeader.on('click', function(e) {
            e.preventDefault();
            $header.removeClass();
            $header.fixedsticky('destroy');
            $clearStickyHeader.attr('hidden', true);

            $jqueryStickyHeaderTrigger.removeAttr('hidden');
            $jqueryStickyFooterTrigger.removeAttr('hidden');
        });

        $clearStickyFooter.on('click', function(e) {
            e.preventDefault();
            $footer.removeClass();
            $footer.fixedsticky('destroy');
            $clearStickyFooter.attr('hidden', true);

            $jqueryStickyHeaderTrigger.removeAttr('hidden');
            $jqueryStickyFooterTrigger.removeAttr('hidden');
        });
    };

    var _bindJquerySticky = function() {

    };

    var _playgroundUI = function() {
        console.log('Playground UI');

        _bindFixedSticky();
        _bindJquerySticky();
    };

    $(function() { // doc ready
        _playgroundUI();
    });
}, undefined, true);
// relPath, forceSync
