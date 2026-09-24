
import Banner from "../component/banner/banner";
import BannerCard from "../component/bannerCard/bannerCard";
import { Type } from "../type/type";

const getData = async() => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog',
        {next :{revalidate:10}});
    if(!res.ok){
        throw new Error('Data can not fetch');
    }
    return res.json();    
}

const HomePage = async() => {

  const datas = await getData()
  console.log("data :", datas);

  return (
    <> 
    <Banner></Banner>
    <div className="ml-4 mb-8">
        <h2 className="font-bold text-4xl">THE LIBRARY</h2>
        <p>Twelve lifts covering every major muscle group.</p>
    </div>

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-15">
      {
        datas.map((data:Type,ind:number) => <BannerCard key ={ind} data = {data}></BannerCard>)
      }
    </div>
    </>
  );
};

export default HomePage;
