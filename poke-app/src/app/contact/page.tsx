import type { Metadata } from "next";

export const metadata: Metadata = {
   title: 'Contact Page',
   description: 'Contact details for RHDF'
}

export default function ContactPage() {
   return (
      <>
      <div style={{textAlign: "center"}}>
         <h1>Contact Details</h1>
         <h2>Raúl Humberto Díaz Fernández</h2>
         <h3>rulhdiaz@gmail.com</h3>
         <h4>Linkedin: https://www.linkedin.com/in/rauldf/</h4>
         <h4>Github: https://github.com/ruldiaz</h4>
      </div>
         
      </>
   );
}