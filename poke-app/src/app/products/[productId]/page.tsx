/**
 * 
 * @param params is an object with key productId and value as string
 * @returns 
 */
export default function ProductDetails({ params } : {
   params: { productId: string}
}){
   return (
      <h1>Details about product {params.productId}</h1>
   );
}