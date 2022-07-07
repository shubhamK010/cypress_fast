describe('verify the functionality for file upload',function(){
    let filePath = 'nature.jpg'
    let filePath2 = 'example.json'
    it('verify the basic file upload example 1',function(){
        cy.visit('http://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(filePath)
        cy.get('#submit-button').click()
        cy.url().should('contain',filePath)


    })


    it('verify the basic file upload example 2',function(){
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile(filePath)
        cy.get('span[class="filename"]').invoke('text').should('contain',filePath)
        

    })

    it('verify the basic file upload example 3',function(){
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile(filePath)
        cy.get('.box__success').should('contain','Done')
       

    })

    it.only('verify the basic multiple file upload example 4',function(){
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        // cy.get('#filesToUpload').attachFile([filePath,filePath2])   
        // cy.get('#fileList').children().should('have.length.greaterThan',1)
        // line no 33 and 34 bhi chal rahi hai lekin uske or me line number 35 likh sakte hai
        cy.get('#filesToUpload').attachFile({ filePath: filePath, fileName: 'mountain.json' }); // yaha khali name change kar rahe hai upload karte waqt kyuki hum override kar rahe hai yaha..hamari original file jpg thi but override karne pe naam change hota hai isliye yaha pe naam change kiya hai
       
    })

    
})