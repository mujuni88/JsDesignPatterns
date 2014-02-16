/**
 * Created by joebm08 on 2/16/14.
 */
require(['utils','singleton'], function(UT, ST, $){
    'use strict';

    var obj = {},
        msg = ST.getInstance().message();

    console.log(UT.isObjEmpty(obj));
    console.log(msg);


});