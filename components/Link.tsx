/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import type { CustomTypeLink } from '@/pkg/type/'

const CustomLink = ({
  href,
  disable,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & CustomTypeLink) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isDisableLink = disable

  if (isDisableLink) {
    return <a {...rest} />
  }

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
