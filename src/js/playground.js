require([
    '$',
    'pinny',
    'sheet-right',
    'fixed-sticky',
    'jquery-sticky',
    'bellows'
],
function(
    $,
    Pinny,
    sheetRight,
    FixedSticky,
    jQuerySticky,
    Bellows
) {
    var $header = $('.playground-header');
    var $footer = $('.playground-footer');
    var $clearStickyHeader = $('.js-clear-sticky-header');
    var $clearStickyFooter = $('.js-clear-sticky-footer');

    var $headerTriggers = $('.js-header-sticky');
    var $footerTriggers = $('.js-footer-sticky');

    var $fixedStickyHeaderTrigger = $('.js-header-sticky__fixed-sticky');
    var $fixedStickyFooterTrigger = $('.js-footer-sticky__fixed-sticky');
    var $jqueryStickyHeaderTrigger = $('.js-header-sticky__stickyjs');
    var $jqueryStickyFooterTrigger = $('.js-footer-sticky__stickyjs');

    var _hideHeaderTriggers = function() {
        $headerTriggers.attr('hidden', true);
    };

    var _hideFooterTriggers = function() {
        $footerTriggers.attr('hidden', true);
    };

    var _showHeaderTriggers = function() {
        $headerTriggers.removeAttr('hidden');
    };

    var _showFooterTriggers = function() {
        $footerTriggers.removeAttr('hidden');
    };

    var _bindFixedSticky = function() {
        $fixedStickyHeaderTrigger.on('click', function(e) {
            e.preventDefault();
            $header.addClass('fixedsticky fixedsticky__header');
            $header.fixedsticky();
            $clearStickyHeader.removeAttr('hidden');

            _hideHeaderTriggers();
        });

        $fixedStickyFooterTrigger.on('click', function(e) {
            e.preventDefault();
            $footer.addClass('fixedsticky fixedsticky__footer');
            $footer.fixedsticky();
            $clearStickyFooter.removeAttr('hidden');

            _hideFooterTriggers();
        });
    };

    var _bindJquerySticky = function() {
        $jqueryStickyHeaderTrigger.on('click', function(e) {
            e.preventDefault();
            $header.sticky({
                topSpacing: 0
            });
            $clearStickyHeader.removeAttr('hidden');

            _hideHeaderTriggers();
        });

        $jqueryStickyFooterTrigger.on('click', function(e) {
            e.preventDefault();
            $footer.sticky({
                bottomSpacing: 0
            });
            $clearStickyFooter.removeAttr('hidden');

            _hideFooterTriggers();
        });
    };

    var _bindStickyClearing = function() {
        $clearStickyHeader.on('click', function(e) {
            e.preventDefault();
            $header.removeClass('fixedsticky fixedsticky__header');
            $header.fixedsticky('destroy');
            $header.unstick();
            $clearStickyHeader.attr('hidden', true);

            _showHeaderTriggers();
        });

        $clearStickyFooter.on('click', function(e) {
            e.preventDefault();
            $footer.removeClass('fixedsticky fixedsticky__footer');
            $footer.fixedsticky('destroy');
            $header.unstick();
            $clearStickyFooter.attr('hidden', true);

            _showFooterTriggers();
        });
    };

    var _initBellows = function() {
        $('.bellows').bellows();
    };

    var _playgroundUI = function() {
        console.log('Playground UI');

        _bindFixedSticky();
        _bindJquerySticky();
        _bindStickyClearing();

        _initBellows();
    };

    $(function() { // doc ready
        _playgroundUI();
    });
}, undefined, true);
// relPath, forceSync
