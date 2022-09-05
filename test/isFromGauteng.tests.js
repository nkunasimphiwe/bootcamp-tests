describe('The Vehicle registration numbers from Gauteng' , function(){
    it('should show return True when tested with "GP" ' , function(){
        assert.equal(isFromGauteng('DR 45 LR GP'), true); 

       
    });
    it('should show return False when tested with "GP" ' , function(){
        assert.equal(isFromGauteng('CJ 123 908'), false);

       
    });

});