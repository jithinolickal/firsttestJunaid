import React from 'react';

function Footer() {
  return (
    <div>
        <footer id="footer">
				<div className="container">
					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
					</ul>
				</div>
				<div className="copyright">
					&copy; Untitled. All rights reserved.
				</div>
			</footer>
    </div>
  );
}

export default Footer;
