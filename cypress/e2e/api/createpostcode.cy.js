describe('API Automation Suite', () => {

  /**
   * Run an API test against the postcodes app, see README.md
   */

  it('Create Post Code', () => {
      cy.fixture('postcode').then((data)=>{
          const request_body=data;

          cy.request({
              method: 'POST',
              url: 'http://127.0.0.1:9191/createPostCode',
              body:request_body
          })
          .then((response) => {
              expect(response.status).to.eq(200)
              expect(response.body.code).to.eq(request_body.code)
              expect(response.body.inuse).to.eq(request_body.inuse)
              expect(response.body.district).to.eq(request_body.district)
          })
      })
  })

})
