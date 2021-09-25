import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from './header.js'
import Footer from './footer.js'

function blog1() {

  return (
    <div>
      <Header />
			<Container className="col-6" style={{ paddingTop: '200px', paddingBottom: '200px' }}>
				<Row>
					<div>
					<h1 style={{ fontFamily: 'Montserrat-Bold' }}>Long name for the blog</h1>
					<h3 style={{ fontFamily: 'Montserrat' }}>Just a subtext or sth</h3> 
					<p><b>Manu Jain</b> | 2 min read</p>
				</div>
				</Row>
				<Row style={{ fontFamily: 'Montserrat' }}>
					<img style={{ width: '100%', paddingTop: '50px', paddingBottom: '80px' }} src="assets/images/blogsample.jpg" alt="Blog Sample" />					
					<p>
						<code style={{ color: 'black', backgroundColor: '#eee', border: '1px solid #999', display: 'block', padding: '20px'}}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
						magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Magnis dis parturient montes nascetur 
						ridiculus mus mauris vitae ultricies. Vivamus arcu felis bibendum ut tristique et. Nibh nisl condimentum id 
						venenatis a condimentum. Ut tortor pretium viverra suspendisse potenti nullam ac. Fermentum posuere urna nec 
						tincidunt praesent. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Sapien nec sagittis 
						aliquam malesuada bibendum arcu. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Fringilla 
						ut morbi tincidunt augue interdum velit euismod in.</code>
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
						magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Magnis dis parturient montes nascetur 
						ridiculus mus mauris vitae ultricies. Vivamus arcu felis bibendum ut tristique et. Nibh nisl condimentum id 
						venenatis a condimentum. Ut tortor pretium viverra suspendisse potenti nullam ac. Fermentum posuere urna nec 
						tincidunt praesent. <samp>Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Sapien nec sagittis 
						aliquam malesuada bibendum arcu. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Fringilla 
						ut morbi tincidunt augue interdum velit euismod in.</samp>
					</p>
					<p>
						Lorem ipsum dolor sit amet, 
						<code style={{ color: 'black', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '10%', maxWidth: '100%', fontSize: '80%', padding: '0.1em 0.25em' }}>
						consectetur adipiscing elit, sed do eiusmod tempor incididunt</code> ut labore et dolore 
						magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Magnis dis parturient montes nascetur 
						ridiculus mus mauris vitae ultricies. Vivamus arcu felis bibendum ut tristique et. Nibh nisl condimentum id 
						venenatis a condimentum. Ut tortor pretium viverra suspendisse potenti nullam ac. Fermentum posuere urna nec 
						tincidunt praesent. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Sapien nec sagittis 
						aliquam malesuada bibendum arcu. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Fringilla 
						ut morbi tincidunt augue interdum velit euismod in.
					</p>
				</Row>
			</Container>
			<Footer />
    </div>
  )
}

export default blog1
