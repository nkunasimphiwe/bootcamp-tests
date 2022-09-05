describe('The Greet me Function' , function(){
    it('should show return "Hello, Simphiwe" when tested with Simphiwe' , function(){
        assert.equal("Hello, Simphiwe",greet('Simphiwe'));

       
    });
    it('should show return "Hello, Ntate-Nkuna" when tested with Ntate-Nkuna' , function(){
        assert.equal("Hello, Ntate-Nkuna",greet('Ntate-Nkuna'));

       
    });

});