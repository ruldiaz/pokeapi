import Link from "next/link";

export default function Home(){
  return (
  <>
    <h1>Welcome to Poke Api</h1>  
    
    <h2 style={{textAlign: "center"}}><Link href="/pokemon">Gotta Catch 'Em All</Link></h2>
  </>
    );
}