import React from 'react'

export default function Header() {
  return (
    <>
    <header class="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-3 sm:px-8">
        <div class="flex h-16 justify-between gap-4 md:gap-8">
          <div class="flex items-center font-bold">
            <a aria-label="homepage" href="/default-channel">ACME</a>
            </div>
            <nav class="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
              <ul class="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
                
                
                <li class="inline-flex">
                      <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700">All <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg></button>
                      </li>
                  
                  <li class="inline-flex">
                    <a class="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700" href="/default-channel/categories/apparel">Apparel</a></li>
                    <li class="inline-flex">
                      <a class="border-transparent text-neutral-500 inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700" href="/default-channel/categories/accessories">Accessories</a>
                      </li>
                     
                      </ul>
                      <div class="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
                        <div class="hidden lg:flex">
                          <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')" class="group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-80">
                            <label class="w-full">
                              <span class="sr-only">search for products</span> 
                              <input placeholder="Search for products..." autocomplete="on" required="" class="h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black" type="text" name="search" />
                              </label>
                              <div class="absolute inset-y-0 right-0">
                                <button type="submit" class="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80">
                                  <span class="sr-only">search</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-5 w-5" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                </button>
                                </div>
                                </form>
                                </div>
                                <a class="h-6 w-6 flex-shrink-0" href="/default-channel/login"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-6 w-6 shrink-0" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span class="sr-only">Log in</span>
                                </a>
                                </div>
                                <div class="flex items-center">
                                  <a class="relative flex items-center" data-testid="CartNavItem" href="/default-channel/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-bag h-6 w-6 shrink-0" aria-hidden="true">
                                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg><div class="absolute bottom-0 right-0 -mb-2 -mr-2 flex h-4 flex-col items-center justify-center rounded bg-neutral-900 text-xs font-medium text-white w-[2ch]">1 <span class="sr-only">item in cart, view bag</span></div></a></div>
                                <button class="flex h-8 w-8 flex-col items-center justify-center gap-1.5 self-end self-center md:hidden" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-menu h-6 w-6 shrink-0" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                                </button>
                                </nav>
                                </div>
                                </div>
                                </header>
                                <div id="mega-menu-full-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Clothes</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Shoes</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Electronics</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Appiliances</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Hardware</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Books & Stationary</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="hidden md:block">
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Pets</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Games</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Bathroom</div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </>
  )
}
