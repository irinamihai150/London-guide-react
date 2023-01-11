const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p> Copyright {footerYear} Irina M</p>
    </div>
  );
}

export default Footer;
