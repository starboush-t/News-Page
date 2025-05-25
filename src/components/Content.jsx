import ImageWeb3Desktop from '/assets/images/image-web-3-desktop.jpg'
import ImageGamingGrowth from '/assets/images/image-gaming-growth.jpg'
import ImageRetroPCs from '/assets/images/image-retro-pcs.jpg'
import ImageTopLaptops from '/assets/images/image-top-laptops.jpg'
const Content = () => {
    return (
        <section className="grid-layout h-screen w-full  pt-7 px-4 ">
            <div className="h-fit  w-full  md:col-span-2">
                <img src={ImageWeb3Desktop} alt='ImageWeb3Desktop' className='w-fit h-fit' />
            </div>
            <div className="h-full  w-full bg-very-dark-blue md:row-span-2 p-7 order-2 lg:order-none">
                <div className='flex flex-col gap-7'>
                    <h2 className='text-soft-orange text-4xl font-semibold'>New</h2>
                    <div className='border-b'>
                        <h2 className="text-1xl">Hydrogen VS Electric Cars</h2>
                        <p className="text-grayish-blue paragraph">Will hydrogen-fueled cars ever catch up to EVs?</p>
                    </div>
                    <div className='border-b'>
                        <h2 className="text-1xl ">The Downsides of AI Artistry</h2>
                        <p className="text-grayish-blue  paragraph">What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div>
                        <h2 className="text-1xl">Is VC Funding Drying Up?</h2>
                        <p className="text-grayish-blue paragraph">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
            <div className="h-fit  w-full">
                <h1 className='text-6xl font-bold '>The Bright Future of Web 3.0?</h1>
            </div>
            <div className="w-full text-dark-grayish-blue md:order-2 lg:order-none">
                <div className='h-fit w-full  flex flex-col gap-4 pt-3  justify-between items-start'>
                    <p className='paragraph text-[17px]'>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?
                    </p>
                    <button className=''>Read more</button>
                </div>
            </div>
            <div className="h-fit  w-full card order-3 lg:order-none">
                <img src={ImageRetroPCs} alt=""/>
                <div  className="content">
                    <h3>01</h3>
                    <h4>
                        Reviving Retro PCs
                    </h4>
                    <p className='paragraph'>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="h-fit  w-full card order-3 lg:order-none">
                <img src={ImageTopLaptops} alt="" className=''/>
                <div className="content">
                    <h3>02</h3>
                    <h4>
                        Top 10 Laptops of 2022
                    </h4>
                    <p className='paragraph'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="h-fit  w-full card order-3 lg:order-none">
                <img src={ImageGamingGrowth} alt=""/>
                <div className="content">
                    <h3>03</h3>
                    <h4>
                        The Growth of Gaming
                    </h4>
                    <p className='paragraph'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </section>
    )
}

export default Content