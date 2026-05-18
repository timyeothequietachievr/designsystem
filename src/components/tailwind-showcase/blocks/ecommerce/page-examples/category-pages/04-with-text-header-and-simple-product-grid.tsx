// @ts-nocheck
"use client";

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const breadcrumbs = [
  { id: 1, name: 'Objects', href: '#' },
  { id: 2, name: 'Workspace', href: '#' },
  { id: 3, name: 'Sale', href: '#' },
]
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Focus Card Tray',
    href: '#',
    price: '$64',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    name: 'Focus Multi-Pack',
    href: '#',
    price: '$39',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Brass Scissors',
    href: '#',
    price: '$50',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 8,
    name: 'Focus Carry Pouch',
    href: '#',
    price: '$32',
    imageSrc: '/assets/logo-tqa.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TailwindBlock() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-paper-soft">
      <div>
        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-paper pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-warm-500"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Links */}
              <TabGroup className="mt-2">
                <div className="border-b border-paper-200">
                  <TabList className="-mb-px flex space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-charcoal data-selected:border-indigo-600 data-selected:text-ember"
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </TabList>
                </div>
                <TabPanels as={Fragment}>
                  {navigation.categories.map((category, categoryIdx) => (
                    <TabPanel key={category.name} className="space-y-12 px-4 pt-10 pb-6">
                      <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-charcoal">
                              Featured
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                              className="mt-6 space-y-6"
                            >
                              {category.featured.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-warm-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p id="mobile-categories-heading" className="font-medium text-charcoal">
                              Categories
                            </p>
                            <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                              {category.categories.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-warm-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                          <div>
                            <p id="mobile-collection-heading" className="font-medium text-charcoal">
                              Collection
                            </p>
                            <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                              {category.collection.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-warm-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p id="mobile-brand-heading" className="font-medium text-charcoal">
                              Brands
                            </p>
                            <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                              {category.brands.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-warm-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>

              <div className="space-y-6 border-t border-paper-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 block p-2 font-medium text-charcoal">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="space-y-6 border-t border-paper-200 px-4 py-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-charcoal">
                    Create an account
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 block p-2 font-medium text-charcoal">
                    Sign in
                  </a>
                </div>
              </div>

              <div className="space-y-6 border-t border-paper-200 px-4 py-6">
                {/* Currency selector */}
                <form>
                  <div className="-ml-2 inline-grid grid-cols-1">
                    <select
                      id="mobile-currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-paper py-0.5 pr-7 pl-2 text-base font-medium text-warm-700 group-hover:text-charcoal focus:outline-2 sm:text-sm/6"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                    />
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative">
          <nav aria-label="Top">
            {/* Top navigation */}
            <div className="bg-ink">
              <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Currency selector */}
                <form className="hidden lg:block lg:flex-1">
                  <div className="-ml-2 inline-grid grid-cols-1">
                    <select
                      id="desktop-currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-ink py-0.5 pr-7 pl-2 text-left text-base font-medium text-paper focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                    />
                  </div>
                </form>

                <p className="flex-1 text-center text-sm font-medium text-paper lg:flex-none">
                  Get free delivery on orders over $100
                </p>

                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-paper hover:text-gray-100">
                    Create an account
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                  <a href="#" className="text-sm font-medium text-paper hover:text-gray-100">
                    Sign in
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary navigation */}
            <div className="bg-paper">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-paper-200">
                  <div className="flex h-16 items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex lg:items-center">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          alt=""
                          src="/assets/logo-tqa.jpg"
                          className="h-8 w-auto"
                        />
                      </a>
                    </div>

                    {/* Mega menus */}
                    <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-warm-700 transition-colors duration-200 ease-out hover:text-charcoal data-open:text-ember">
                                {category.name}
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-ember"
                                />
                              </PopoverButton>
                            </div>
                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full z-20 w-full bg-paper text-sm text-warm-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-paper shadow-sm" />
                              <div className="relative bg-paper">
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                  <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pt-10 pb-12">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id={`desktop-featured-heading-${categoryIdx}`}
                                          className="font-medium text-charcoal"
                                        >
                                          Featured
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.featured.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-charcoal">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p id="desktop-categories-heading" className="font-medium text-charcoal">
                                          Categories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-categories-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.categories.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-charcoal">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p id="desktop-collection-heading" className="font-medium text-charcoal">
                                          Collection
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-collection-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.collection.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-charcoal">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p id="desktop-brand-heading" className="font-medium text-charcoal">
                                          Brands
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-brand-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.brands.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-charcoal">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-warm-700 hover:text-charcoal"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex flex-1 items-center lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-ml-2 rounded-md bg-paper p-2 text-warm-500"
                      >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                      </button>

                      {/* Search */}
                      <a href="#" className="ml-2 p-2 text-warm-500 hover:text-warm-500">
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="/assets/logo-tqa.jpg"
                        className="h-8 w-auto"
                      />
                    </a>

                    <div className="flex flex-1 items-center justify-end">
                      <div className="flex items-center lg:ml-8">
                        <div className="flex space-x-8">
                          <div className="hidden lg:flex">
                            <a href="#" className="-m-2 p-2 text-warm-500 hover:text-warm-500">
                              <span className="sr-only">Search</span>
                              <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                            </a>
                          </div>

                          <div className="flex">
                            <a href="#" className="-m-2 p-2 text-warm-500 hover:text-warm-500">
                              <span className="sr-only">Account</span>
                              <UserIcon aria-hidden="true" className="size-6" />
                            </a>
                          </div>
                        </div>

                        <span aria-hidden="true" className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" />

                        <div className="flow-root">
                          <a href="#" className="group -m-2 flex items-center p-2">
                            <ShoppingCartIcon
                              aria-hidden="true"
                              className="size-6 shrink-0 text-warm-500 group-hover:text-warm-500"
                            />
                            <span className="ml-2 text-sm font-medium text-warm-700 group-hover:text-charcoal">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 sm:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-paper pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-charcoal">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-paper p-2 text-warm-500 hover:bg-paper-soft focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                {filters.map((section) => (
                  <Disclosure key={section.name} as="div" className="border-t border-paper-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-paper px-2 py-3 text-sm text-warm-500">
                        <span className="font-medium text-charcoal">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5 rotate-0 transform group-data-open:-rotate-180"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  defaultChecked={option.checked}
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-indeterminate:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="text-sm text-warm-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main>
          <div className="bg-paper">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-charcoal">Workspace sale</h1>
              <p className="mt-4 max-w-xl text-sm text-warm-700">
                Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and
                organization with these sale items before we run out.
              </p>
            </div>
          </div>

          {/* Filters */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="border-b border-paper-200 bg-paper pb-4">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-warm-700 hover:text-charcoal">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-warm-500 group-hover:text-warm-500"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-paper shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <a
                            href={option.href}
                            className={classNames(
                              option.current ? 'font-medium text-charcoal' : 'text-warm-500',
                              'block px-4 py-2 text-sm data-focus:bg-paper-soft data-focus:outline-hidden',
                            )}
                          >
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="inline-block text-sm font-medium text-warm-700 hover:text-charcoal sm:hidden"
                >
                  Filters
                </button>

                <div className="hidden sm:block">
                  <div className="flow-root">
                    <PopoverGroup className="-mx-4 flex items-center divide-x divide-gray-200">
                      {filters.map((section, sectionIdx) => (
                        <Popover key={section.name} className="relative inline-block px-4 text-left">
                          <PopoverButton className="group inline-flex justify-center text-sm font-medium text-warm-700 hover:text-charcoal">
                            <span>{section.name}</span>
                            {sectionIdx === 0 ? (
                              <span className="ml-1.5 rounded-sm bg-gray-200 px-1.5 py-0.5 text-xs font-semibold text-warm-700 tabular-nums">
                                1
                              </span>
                            ) : null}
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="-mr-1 ml-1 size-5 shrink-0 text-warm-500 group-hover:text-warm-500"
                            />
                          </PopoverButton>

                          <PopoverPanel
                            transition
                            className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-paper p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                          >
                            <form className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex gap-3">
                                  <div className="flex h-5 shrink-0 items-center">
                                    <div className="group grid size-4 grid-cols-1">
                                      <input
                                        defaultValue={option.value}
                                        defaultChecked={option.checked}
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        type="checkbox"
                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-paper checked:border-indigo-600 checked:bg-ember indeterminate:border-indigo-600 indeterminate:bg-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember disabled:border-gray-300 disabled:bg-paper-soft disabled:checked:bg-paper-soft forced-colors:appearance-auto"
                                      />
                                      <svg
                                        fill="none"
                                        viewBox="0 0 14 14"
                                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                      >
                                        <path
                                          d="M3 8L6 11L11 3.5"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="opacity-0 group-has-checked:opacity-100"
                                        />
                                        <path
                                          d="M3 7H11"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="opacity-0 group-has-indeterminate:opacity-100"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="pr-6 text-sm font-medium whitespace-nowrap text-charcoal"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </form>
                          </PopoverPanel>
                        </Popover>
                      ))}
                    </PopoverGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* Active filters */}
            <div className="bg-paper-soft">
              <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
                <h3 className="text-sm font-medium text-warm-500">
                  Filters
                  <span className="sr-only">, active</span>
                </h3>

                <div aria-hidden="true" className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

                <div className="mt-2 sm:mt-0 sm:ml-4">
                  <div className="-m-1 flex flex-wrap items-center">
                    {activeFilters.map((activeFilter) => (
                      <span
                        key={activeFilter.value}
                        className="m-1 inline-flex items-center rounded-full border border-paper-200 bg-paper py-1.5 pr-2 pl-3 text-sm font-medium text-charcoal"
                      >
                        <span>{activeFilter.label}</span>
                        <button
                          type="button"
                          className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-warm-500 hover:bg-gray-200 hover:text-warm-500"
                        >
                          <span className="sr-only">Remove filter for {activeFilter.label}</span>
                          <svg fill="none" stroke="currentColor" viewBox="0 0 8 8" className="size-2">
                            <path d="M1 1l6 6m0-6L1 7" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product grid */}
          <section
            aria-labelledby="products-heading"
            className="mx-auto max-w-2xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:max-w-7xl lg:px-8"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-sm text-warm-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-charcoal">{product.price}</p>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer aria-labelledby="footer-heading" className="border-t border-paper-200 bg-paper">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20">
              <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
                {/* Image section */}
                <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                  <img
                    alt=""
                    src="/assets/logo-tqa.jpg"
                    className="h-8 w-auto"
                  />
                </div>

                {/* Sitemap sections */}
                <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                  <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <h3 className="text-sm font-medium text-charcoal">Products</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.products.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-warm-500 hover:text-warm-500">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-charcoal">Company</h3>
                      <ul role="list" className="mt-6 space-y-6">
                        {footerNavigation.company.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-warm-500 hover:text-warm-500">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-charcoal">Customer Service</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.customerService.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a href={item.href} className="text-warm-500 hover:text-warm-500">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Newsletter section */}
                <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                  <h3 className="text-sm font-medium text-charcoal">Sign up for our newsletter</h3>
                  <p className="mt-6 text-sm text-warm-500">The latest deals and savings, sent to your inbox weekly.</p>
                  <form className="mt-2 flex sm:max-w-md">
                    <input
                      id="email-address"
                      type="text"
                      required
                      autoComplete="email"
                      aria-label="Email address"
                      className="block w-full rounded-md bg-paper px-4 py-2 text-base text-charcoal outline-1 -outline-offset-1 outline-gray-300 placeholder:text-warm-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                    />

                    <div className="ml-4 shrink-0">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-ember px-4 py-2 text-base font-medium text-paper shadow-xs hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 py-10 text-center">
              <p className="text-sm text-warm-500">&copy; 2021 Your Company, Inc. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
