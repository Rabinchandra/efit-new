const Footer = () => {
    return (
        <div className="footer">
            <div className='logo'>
                <img src={require('../images/white-efit-logo.png')} alt="" />
            </div>
            <div className="links" id="contact-links">
                <a href="#">
                    <i class="fa fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fa fa-brands fa-facebook"></i>
                </a>
            <div className="rights">
                Copyright &copy; {new Date().getFullYear()} e-fit.org.in <br /> All Rights Reserved.
            </div>
            </div>
        </div>
    )
}

export default Footer;