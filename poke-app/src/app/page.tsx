import Link from "next/link";

export default function Home(){
  return (
  <>
    <h1>Welcome to Poke Api</h1>  
    
    <h2 style={{textAlign: "center"}}><Link href="/pokemon">Click to play - Gotta Catch &apos;Em All</Link></h2>

  </>
    );
}