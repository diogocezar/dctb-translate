Translate = {
    init: function(options){
        $('.translate').on('click', function(){
            var obj = $(this);
            Translate.go(obj.data('lang'));
        });
    },
    go: function(lang){
        $('*').each(function(){
            var obj     = $(this);
            var text    = obj.data(lang);
            if(!Translate.isEmpty(text))
                obj.empty().html(text);
        });
    },
    isEmpty: function(val){
        return (val == null || val == "" || val == undefined);
    }
}

$(document).ready(function () {
    Translate.init();
});