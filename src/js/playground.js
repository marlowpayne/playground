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
    };

    var _bindJquerySticky = function() {
        $jqueryStickyHeaderTrigger.on('click', function(e) {
            e.preventDefault();
            $header.sticky({
                topSpacing: 0
            });
            $clearStickyHeader.removeAttr('hidden');

            $fixedStickyHeaderTrigger.attr('hidden', true);
            $fixedStickyFooterTrigger.attr('hidden', true);
        });

        $jqueryStickyFooterTrigger.on('click', function(e) {
            e.preventDefault();
            $footer.sticky({
                bottomSpacing: 0
            });
            $clearStickyFooter.removeAttr('hidden');

            $fixedStickyHeaderTrigger.attr('hidden', true);
            $fixedStickyFooterTrigger.attr('hidden', true);
        });
    };

    var _bindStickyClearing = function() {
        $clearStickyHeader.on('click', function(e) {
            e.preventDefault();
            $header.removeClass('fixedsticky fixedsticky__header');
            $header.fixedsticky('destroy');
            $header.unstick();
            $clearStickyHeader.attr('hidden', true);

            $jqueryStickyHeaderTrigger.removeAttr('hidden');
            $jqueryStickyFooterTrigger.removeAttr('hidden');
            $fixedStickyHeaderTrigger.removeAttr('hidden');
            $fixedStickyFooterTrigger.removeAttr('hidden');
        });

        $clearStickyFooter.on('click', function(e) {
            e.preventDefault();
            $footer.removeClass('fixedsticky fixedsticky__footer');
            $footer.fixedsticky('destroy');
            $header.unstick();
            $clearStickyFooter.attr('hidden', true);

            $jqueryStickyHeaderTrigger.removeAttr('hidden');
            $jqueryStickyFooterTrigger.removeAttr('hidden');
            $fixedStickyHeaderTrigger.removeAttr('hidden');
            $fixedStickyFooterTrigger.removeAttr('hidden');
        });
    };

    var _playgroundUI = function() {
        console.log('Playground UI');

        _bindFixedSticky();
        _bindJquerySticky();
        _bindStickyClearing();
    };

    $(function() { // doc ready
        _playgroundUI();
    });
}, undefined, true);
// relPath, forceSync
