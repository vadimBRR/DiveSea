import { useState } from 'react'
import logo from '../../assets/logo.png'
import { IoIosSearch, IoMdClose } from 'react-icons/io'
import { IoWalletOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
	const links = ['Discover', 'Creators', 'Sell', 'Stats']
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen)
	}
	return (
		<div className='container mx-auto  relative'>
			<div className='hidden sm:flex w-full  items-center justify-between '>
				<div className='flex items-center gap-12'>
					<img src={logo} alt='logo' className='w-14 h-14 object-cover' />
					<div className='flex flex-row gap-6 xl:gap-12 '>
						{links.map((item, idx) => (
							<h3
								key={idx}
								className='text-lg uppercase font-inter font-medium text-[#606060]'
							>
								{item}
							</h3>
						))}
					</div>
				</div>

				<div className='flex items-center gap-3 lg:gap-8'>
					<div className='relative hidden lg:block'>
						<input
							type='text'
							className='bg-[#EDEDED] pl-14 py-3 rounded-lg w-[300px] xl:w-[350px] focus:outline focus:outline-stone-300 '
							placeholder='Search Art Work / Creator'
						/>
						<div className='absolute top-1/2 -translate-y-1/2 left-3'>
							<IoIosSearch className='text-2xl text-[#9D9D9D]' />
						</div>
					</div>

					<div className='bg-[#141416] py-3 rounded-lg px-4 lg:py-4 block lg:hidden'>
						<IoIosSearch className=' text-white text-2xl' />
					</div>

					<div className='bg-[#141416] py-3 rounded-lg px-4 lg:py-4'>
						<h2 className='uppercase font-inter text-sm text-white font-semibold  tracking-tighter hidden lg:block'>
							Connect Wallet
						</h2>
						<IoWalletOutline className='block lg:hidden text-white text-2xl' />
					</div>
				</div>
			</div>

			<div className='flex sm:hidden items-center justify-between px-4'>
				<div className='flex items-center gap-2'>
					<img src={logo} alt='logo' className='w-14 h-14 object-cover' />
					<h1 className='font-semibold text-3xl'>DiveSea</h1>
				</div>

				<button className='' onClick={toggleMobileNav}>
					<RxHamburgerMenu className='text-4xl' />
				</button>
			</div>

			<div
				className={`sm:hidden fixed top-0 right-0 h-full w-3/4 bg-white z-50 transform transition-transform duration-300 shadow-lg ${
					isMobileNavOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='flex justify-between pb-2 pt-4 px-4 border-b border-gray-300 items-center'>
					<h2 className='text-xl font-semibold'>Menu</h2>

					<button onClick={toggleMobileNav} className='cursor-pointer'>
						<IoMdClose className='h-6 w-6 text-gray-600' />
					</button>
				</div>

				<div className='flex flex-col p-4'>
					<div className='pb-4 border-b border-gray-300'>
						{links.map((item, idx) => (
							<h3
								key={idx}
								className='text-lg uppercase font-inter font-medium text-[#606060]'
							>
								{item}
							</h3>
						))}
					</div>
          <div className="w-full flex flex-col">
            <div className='relative py-4'>
              <input
                type='text'
                className='bg-[#EDEDED] pl-11 py-3 rounded-lg  w-full focus:outline focus:outline-stone-300 '
                placeholder='Search Art Work / Creator'
              />
              <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                <IoIosSearch className='text-2xl text-[#9D9D9D]' />
              </div>
            </div>

            <div className='bg-[#141416] py-3 rounded-lg px-4 '>
						<h2 className='uppercase font-inter text-sm text-white font-semibold  tracking-tighter text-center'>
							Connect Wallet
						</h2>
            </div>
          </div>
          
				</div>
			</div>
		</div>
	)
}

export default Navbar
