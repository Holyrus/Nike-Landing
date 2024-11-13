import NikeVideo from '../assets/Nike Air Force One.mp4';

const Hero = () => {


  return (
    <section className="w-full relative bg-white overflow-hidden h-[82vh] sm:h-[65vh] md:h-[65vh] lg:h-[80vh]">
        
        <video
          src={NikeVideo}
          autoPlay
          muted
          loop
          className='w-full object-cover h-[82vh] sm:h-[65vh] md:h-[65vh] lg:h-auto'
          controls={false}>
          Video is not supported
        </video>

        <div className="absolute w-full pl-[1.5rem] sm:pl-[3rem] pb-[30px] sm:pt-[60px] md:h-[65vh] lg:pt-[120px] gap-2 sm:gap-2 lg:gap-3 top-0 right-0 h-[82vh] sm:h-[65vh] lg:h-[80vh] bg-transparent flex text-white flex-col justify-end sm:justify-center items-start">
          <p className="text-[16px] font-medium">Just In: Shox TL</p>
          <h1 className="uppercase font-bold text-[40px] leading-[35px] sm:text-[40px] sm:leading-[35px] lg:text-[76px] lg:leading-[65px] tracking-[-0.005em] font-hyeon break-words">Disruptive<br></br> By Design</h1>
          <p className="hidden sm:block text-[16px] align-baseline break-words">Ahead of its time, the iconic Shox TL pushes<br></br> the boundaries of style with its future-forward silhouette.</p>
          <button className="rounded-full bg-white px-[16px] py-[6px] mt-[14px] font-semibold hover:bg-[#b7b7b7ff] text-black">Shop</button>
        </div>

    </section>
  )
}

export default Hero