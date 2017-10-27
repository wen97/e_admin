/**
 * jQuery EnPlaceholder plug
 * version 1.0							2014.07.01鎴堝織鍒�
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
(function ($) {
    $.fn.extend({
        "iePlaceholder":function (options) {
            options = $.extend({
                placeholderColor:'#999',
                isUseSpan:true,
                onInput:true
            }, options);
			
            $(this).each(function () {
                var _this = this;
                var supportPlaceholder = 'placeholder' in document.createElement('input');
                if (!supportPlaceholder) {
                    var defaultValue = $(_this).attr('placeholder');
                    var defaultColor = $(_this).css('color');
                    if (options.isUseSpan == false) {
                        $(_this).focus(function () {
                            var pattern = new RegExp("^" + defaultValue + "$|^$");
                            pattern.test($(_this).val()) && $(_this).val('').css('color', defaultColor);
                        }).blur(function () {
                                if ($(_this).val() == defaultValue) {
                                    $(_this).css('color', defaultColor);
                                } else if ($(_this).val().length == 0) {
                                    $(_this).val(defaultValue).css('color', options.placeholderColor)
                                }
                            }).trigger('blur');
                    } else {
                        var $imitate = $('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden; color:'+options.placeholderColor+'; width:'+$(_this).width()+'px; ">' + (defaultValue==undefined?"":defaultValue) + '</span>');
                        var leftPx = 0;
                        
                        if($(_this).parent().find('label').length>0){
                            leftPx = $(_this).offset().left - $(_this).css('width');
                            //alert(leftPx);
                        }
                        $imitate.css({
                            'margin-left':$(_this).css('margin-left'),
                            'margin-top':$(_this).css('margin-top'),
							'text-align':'left',
                            //'left':0,
                            'left':leftPx,
                            'font-size':$(_this).css('font-size'),
                            'font-family':$(_this).css('font-family'),
                            'font-weight':$(_this).css('font-weight'),
                            'padding-left':parseInt($(_this).css('padding-left')) + 2 + 'px',
                            'line-height':_this.nodeName.toLowerCase() == 'textarea' ? $(_this).css('line-weight') : $(_this).outerHeight() + 'px',
                            'padding-top':_this.nodeName.toLowerCase() == 'textarea' ? parseInt($(_this).css('padding-top')) + 2 : 0
                        });
                        $(_this).before($imitate.click(function () {
                            $(_this).trigger('focus');
                        }));

                        $(_this).val().length != 0 && $imitate.hide();

                        if (options.onInput) {
                            var inputChangeEvent = typeof(_this.oninput) == 'object' ? 'input' : 'propertychange';
                            $(_this).bind(inputChangeEvent, function () {
                                $imitate[0].style.display = $(_this).val().length != 0 ? 'none' : 'inline-block';
                            });
                        } else {
                            $(_this).focus(function () {
                                $imitate.hide();
                            }).blur(function () {
                                    /^$/.test($(_this).val()) && $imitate.show();
                                });
                        }
                    }
                }
            });
            return this;
        }
    });
})(jQuery);

/*璋冪敤鏂瑰紡锛� textarea闇€瑕佺敯闂磑nInput=false灞炴€�*/
$('input[placeholder], textarea[placeholder]').each(function(){$(this).is('input')?$(this).iePlaceholder():$(this).iePlaceholder({onInput: false});});