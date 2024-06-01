import { Fade } from "react-awesome-reveal";

export const footerNavigation = {

    company: [
      { name: 'Github', href: 'https://github.com/manpreet2000/tabrizz' },
      { name: 'Product Hunt', href: '/' },
      { name: 'Twitter', href: '/' },
    ],
  };
export default function Footer() {
    return (
        // <footer className="bg-primary text-white text-center py-4">
        //     {/* <p>&copy; 2021 All rights reserved</p> */}
        // </footer>
        <Fade direction="up" triggerOnce>
            <div className='mx-auto max-w-7xl px-6 lg:px-8 pt-20 lg:pt-0'>
        <footer
          aria-labelledby='footer-heading'
          className='relative border-t border-gray-900/10 dark:border-gray-200/10 py-10 sm:mt-32'
        >
          <h2 id='footer-heading' className=' text-3xl hover:text-yellow-500 text-white'>
            TabRizz.
          </h2>

          <div className='flex items-start justify-end mt-10 gap-20 max-md:justify-normal'>
            <div>
              <h3 className='text-2xl font-semibold leading-6 hover:text-yellow-500 text-white'>App</h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className='text-sm leading-6 text-gray-600 hover:text-yellow-500 '>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
            </Fade>
    ); 
}