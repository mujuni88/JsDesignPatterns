/**
 * Created by joebm08 on 2/6/14.
 */
define(function () {
    'use strict';

    var instance;

    function init() {
        return {
            message: function () {
                return "hello";
            },
            title: function () {
                return "singleton";
            }
        };
    }

    function getInstance() {
        if (!instance) {
            instance = init();
        }

        return instance;
    }

    return {
        getInstance: getInstance
    };

});