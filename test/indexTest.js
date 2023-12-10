require ( './helpers.js' );

describe( "index.js", () => {
  it( 'should change the text on the page when DOM content has loaded', function () {
    expect( document.querySelector( 'p' )
        .textContent )
      .to.equal( "JavaScript is so cool. It lets me add text to my page programmatically." );
  })})
