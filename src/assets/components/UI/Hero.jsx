import React from 'react';
import pp from '../../images/pp.jpg';

// import CountUp from 'react-countup';

const Hero = () => {
    const [title, setTitle]= React.useState("Adrian Cendón");
    React.useEffect(()=>{
           
            setTitle(document.title=title);
       
    }, [window.onload])
  
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* her left start */}
                    <div className='w-full md:basis-1/2'>
                        <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600] text-[25px]'>Hi,</h5>

                        <h1 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Adrián Cendón <br /> A FullStack Web Developer
                        </h1>

                        <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='150' className='flex items-center gap-6 mt-7'>
                            <a href='#contact'><button className='flex items-center gap-2 bg-smallTextColor text-white font-[600] border border-solid
                            py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColorHb ease-in duration-100'>Hire Me</button></a>

                            <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor hover:text-smallTextColorHb hover:border-smallTextColorHb'>See Portfolio</a>
                        </div>

                        <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-8 sm:pr-14 text-justify'>
                            <span className='ri-apps-2-line'></span>
                            <b>Web Developer in constant learning, able to develop for both back-end and for front-end. 
                                Accustomed to working with Agile methodologies (Scrum and Kamban).
                                Looking for new challenges to face, more oriented to the front-end, in which to be able to learn and grow personally and professionally.</b>
                        </p>
                        <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='150' className='flex items-center gap-9 mt-14'>
                            <span className='text-headingColor font-[600] text-[20px]'>Connect:</span>
                            <span><a  title='github' target='_blank' href='https://github.com/Cendon19' className='text-smallTextColor text-[25px] font-[600] hover:text-smallTextColorHb'><i className='ri-github-line'></i></a></span>
                            <span><a title='LinkedIn' target='_blank' href='https://www.linkedin.com/in/adri%C3%A1n-cend%C3%B3n-g%C3%B3mez-7a028519a/' className='text-smallTextColor text-[25px] font-[600] hover:text-smallTextColorHb'><i className='ri-linkedin-box-fill'></i></a></span>
                        </div>
                    </div>
                    {/* hero left end */}

                    {/* hero img */}
                    <div data-aos='fade-in' data-aos-duration='1500' data-aos-delay='150' className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'><img className="rounded-xl" src={pp} alt='' /></figure>
                    </div>
                    {/* hero img end */}

                    {/* hero image content right */}
                    <div data-aos='fade-down' data-aos-duration='1500' data-aos-delay='150' className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col'>
                        <div>
                            <span><a className='text-smallTextColor text-[60px] hover:text-smallTextColorHb'><i className="ri-html5-fill"></i></a></span>
                        </div>
                        <div>
                            <span><a className='text-smallTextColor text-[60px] hover:text-smallTextColorHb'><i className="ri-css3-fill"></i></a></span>
                        </div>
                        <div>
                            <span><a className='text-smallTextColor text-[60px] hover:text-smallTextColorHb'><i className="ri-javascript-fill"></i></a></span>
                            {/* <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={80} duration={3} suffix='%' /> */}
                        </div>
                        <div>
                            <span><a className='text-smallTextColor text-[60px] hover:text-smallTextColorHb'><i className="ri-reactjs-fill"></i></a></span>
                            {/* <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={60} duration={3} suffix='%' /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Hero;
