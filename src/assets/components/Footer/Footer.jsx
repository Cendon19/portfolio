import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  bg-white text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'>AC</span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Adrian Cendón</h2>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright &copy; {year} </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;