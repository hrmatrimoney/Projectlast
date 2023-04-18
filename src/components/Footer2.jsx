import React from "react"
import { Footer } from "flowbite-react"
export default function Footer2() {
    return (
      <div className="sname">
<Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Moonlight Restaurant"
  />
  <Footer.LinkGroup >
    <Footer.Link href="#">
      About
    </Footer.Link>
    <Footer.Link href="#" className="">
      Privacy Policy
    </Footer.Link>
    <Footer.Link href="#">
      Licensing
    </Footer.Link>
    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>

</div>
    )}