import Link from "next/link";

export default function Home(){
  return (
  <>
    <h1>Welcome to Poke Api</h1>  
    
    <h2><Link href="/pokemon">Gotta Catch &apos;Em All</Link></h2>

  </>
    );
}