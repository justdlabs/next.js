import React from 'react'

import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from 'justd-icons'
import Link from 'next/link'
import { Button, TextField } from 'ui'

import { ToggleTheme } from './theme-toggle'

const navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' }
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' }
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-service' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <IconBrandFacebook />
    },
    {
      name: 'Instagram',
      href: '#',
      icon: <IconBrandInstagram />
    },
    {
      name: 'Twitter',
      href: '#',
      icon: <IconBrandTwitter />
    },
    {
      name: 'GitHub',
      href: '#',
      icon: <IconBrandGithub />
    },
    {
      name: 'YouTube',
      href: '#',
      icon: <IconBrandYoutube />
    }
  ]
}

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Solutions</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-fg hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Support</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-fg hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-fg">Company</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-fg hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-fg">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-fg hover:text-fg">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col xl:mt-0">
            <div className="flex-1 mb-6">
              <h3 className="text-sm font-semibold leading-6 text-fg">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-muted-fg">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <TextField
                  aria-label="Email address"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  isRequired
                  placeholder="Enter your email"
                />
                <div className="mt-6 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <Button type="submit">Subscribe</Button>
                </div>
              </form>
            </div>
            <ToggleTheme />
          </div>
        </div>
        <div className="mt-16 border-t border-slate-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                aria-label={item.name}
                key={item.name}
                href={item.href}
                className="text-muted-fg hover:text-fg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.5]"
              >
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-fg md:order-1 md:mt-0">
            &copy; 2024 Next Starter Kit by{' '}
            <Link target="_blank" href="https://getjustd.com" className="font-semibold text-fg">
              justd
            </Link>
            , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
