import { products } from "../utils/data"

const ImageSeciton = ()=>{
  return (
    <div  className=" max-w-8xl flex justify-center h-[500px]">
      <img src="/3/1.webp" alt="" width={100} className="w-[40rem]" />
      <img src="/3/2.webp" alt="" width={100} className="w-[40rem]" />
    </div>
  )
}

const Card = ({item}) => {
  return (
    <div className="max-h-[20rem] shadow-2xl rounded-xl">
      <img src={item.imgLink} width={300} alt="" />
      <div className="flex justify-between items-center  p-2">
        <div className="tracking-wider">
          <p className="text-lg font-bold uppercase">{item.name}</p>
          <p className="text-base font-medium">{item.des}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">{item.price}.99</p>
          <p className="text-base font-normal">size {item.size}</p>
        </div>
      </div>
    </div>
  )
}

const FeaturedProducts = ({children}) =>{
  return (
    <div>
      <h1 className="text-3xl font-bold p-7">Featured Products</h1>
      <div className="flex justify-center flex-wrap gap-5 pb-10 ">
      {children}
      </div>
    </div>
  )
}



const Product = () => {
  return (
    <div className="main-div">
     <FeaturedProducts>
      {products.map((item)=>(
        <Card key={item.id} item={item}/>
      ))}
     </FeaturedProducts>
     <ImageSeciton/>

    </div>
  )
}

export default Product
