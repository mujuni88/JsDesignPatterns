/**
 * Created by joebm08 on 2/6/14.
 */

describe("Testing singleton pattern", function () {
    "use strict";

    var values = {
        msg: "hello",
        title: "singleton"

    },
    st = jb.st;

    it("should be defined", function () {
        expect(st).toBeDefined();
    });

    describe("Testing getInstance method", function () {

        var func = st.getInstance,
            out = st.getInstance();

        it("Should be defined", function () {
            expect(func).toBeDefined();
        });

        it("Should be a function", function () {
            expect(typeof func === "function").toBeTruthy();
        });

        it("Should return an object", function () {
            expect(typeof out === "object").toBeTruthy();
        });

    });

    describe("Testing message function of getInstance method", function () {

        var func = st.getInstance().msg,
            out = st.getInstance().msg(),
            corrVal = values.msg;


        it("Should be defined", function () {
            expect(func).toBeDefined();
        });

        it("Should return a correct value", function () {
            expect(out).toBe(corrVal);
        });

    });

    describe("Testing title function of getInstance method", function () {

        var func = st.getInstance().title,
            out = st.getInstance().title(),
            corrVal = values.title;

        it("Should be defined", function () {
            expect(func).toBeDefined();
        });

        it("Should return a correct value", function () {
            expect(out).toBe(corrVal);
        });

    });

});


