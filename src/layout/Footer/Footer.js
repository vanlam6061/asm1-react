import styles from "./Footer.module.scss";
import FooterRegister from "./FooterRegister";
import FooterLinkTable from "./FooterLinkTable";

function Footer() {
  return (
    <div>
      <FooterRegister />
      <FooterLinkTable />
    </div>
  );
}
export default Footer;
