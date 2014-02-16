/**
 * Created by joebm08 on 2/16/14.
 */
describe("Testing utils module",function(){
    'use strict';

    var ut = jb.ut,
        test1 = {},
        test2 = {"a":""},
        test3 = null,
        test4;

    it("should be defined", function(){
        expect(ut).toBeDefined();
    });

    describe("Testing isObjEmpty method",function(){
        var func = ut.isObjEmpty;

        it("Should be defined", function () {
            expect(func).toBeDefined();
        });

        it("Should return a true value", function () {
            expect(func(test1)).toBeTruthy();
        });
        it("Should return a true value", function () {
            expect(func(test2)).toBeFalsy();
        });

        it("Should return a false value", function () {
            expect(func(test3)).toBeFalsy();
        });

        it("Should return a false value", function () {
            expect(func(test4)).toBeFalsy();
        });
    });

});