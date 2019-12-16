;(function(global, $) {
    var Greetr = function(f,l,la) {
        return new Greetr.init(f, l ,la);
    };
    var langs = ['en', 'es'];
    var greeting = {
        en: 'yo',
        es: 'kiubo'
    };
    var formalGreet = {
        en: 'Hi',
        es: 'Hola'
    };
    var logMessage = {
        en: 'iniit',
        es: 'inicio'
    };

    Greetr.prototype = {
        fullName: function() {
            return this.f + ' ' + this.l;
        },

        validate: function() {
            if (langs.indexOf(this.la) === -1) {
                throw "invalid language";
            }
        },

        greeting: function() {
            return greeting[this.la] + ' ' + this.f;
        },

        formalGreet: function() {
            return formalGreet[this.la] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if(formal) {
                msg = this.formalGreet();
            } else {
                msg = this.greeting()
            }
            if(console) {
                console.log(msg)
            }
            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessage[this.la] + ' ' + this.f)
            }
            return this;
        },

        setLang: function(lang) {
            this.la = lang;
            this.validate();
            return this
        },

        setTitle: function(selector, formal) {
            if(!$ || !selector) {
                throw 'Error'
            }

            var msg;
            if (formal) {
                msg = this.formalGreet();
            } else {
                msg = this.greeting()
            }

            $(selector).text(msg);

            return this;
        }

    };

    Greetr.init = function(f,l,la) {
        var self = this;

        self.f = f  || '';
        self.l = l  || '';
        self.la = la  || 'en';

        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.$G = Greetr;
})(window, jQuery);

(function(){
    $('#login').click(function() {
        var g = $G('ed', 'sa');
        g.setLang($('#lang')[0].value).setTitle('#greeting').log();
    })
})()