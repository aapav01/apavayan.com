import classNames from 'clsx'
import Link from '@/components/link'

const MDXLink = ({ className, children, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
  <Link className={classNames('border-b border-alpha hover:border-b-2', className)} {...props}>
    {children}
  </Link>
)

export default MDXLink
