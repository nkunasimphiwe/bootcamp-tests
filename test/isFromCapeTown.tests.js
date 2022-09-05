describe('The Vehicle regist numbers from Gauteng' , function(){
    it('should show return True when tested with "CA" ' , function(){
        assert.equal(isFromCapeTown('CA 123 908'), true);

       
    });
    it('should show return False when tested with "CA" ' , function(){
        assert.equal(isFromCapeTown('CJ 123 908'), false);
       
    });

});