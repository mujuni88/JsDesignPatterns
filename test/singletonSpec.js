/**
 * Created by joebm08 on 2/6/14.
 */

define(['singleton'], function(st){
    describe("Testing singleton pattern", function(){
        var values = {
            msg:"hello",
            title:"singleton"

        };

        it("should be defined", function(){
            expect(st).toBeDefined();
        });

        describe("Testing getInstance method");
        it("should not return null values",function(){
            expect(st.getInstance().message()).not.toBeNull();
            expect(st.getInstance().title()).not.toBeNull();
        });
        it("should not return an empty values",function(){
            expect(st.getInstance().message()).toBeTruthy();
            expect(st.getInstance().title()).toBeTruthy();
        });

        it("should return the correct values",function(){
            expect(st.getInstance().message()).toEqual(values.msg);
            expect(st.getInstance().title()).toEqual(values.title);
        });
    });

});

