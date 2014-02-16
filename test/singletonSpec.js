/**
 * Created by joebm08 on 2/6/14.
 */

describe("Testing singleton patten", function(){
   it("should test for properties",function(){
       expect(st.getInstance().message).toBe("singleton");
   });
});