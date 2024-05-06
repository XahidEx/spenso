'use client'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button, buttonVariants } from '../ui/button'
import { Skeleton } from '../ui/skeleton'

export const Signout = () => {
  const router = useRouter()
  const mounted = useMounted()

  return (
    <div className="flex w-full flex-col-reverse items-center gap-2 sm:flex-row">
      <Button variant="secondary" size="sm" className="w-full" onClick={() => router.back()}>
        Go back
        <span className="sr-only">Previous page</span>
      </Button>
      {mounted ? (
        <Button size="sm" className="w-full" onClick={() => signOut({ callbackUrl: '/' })}>
          Log out
          <span className="sr-only">Log out</span>
        </Button>
      ) : (
        <Skeleton className={cn(buttonVariants({ size: 'sm' }), 'bg-muted text-muted-foreground w-full')}>
          Log out
        </Skeleton>
      )}
    </div>
  )
}
// export const Signout = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
//   const [isLoading, setIsLoading] = useState(false)

//   return (
//     <Button
//       disabled={isLoading}
//       className={cn(className)}
//       variant="default"
//       size="sm"
//       onClick={() => {
//         setIsLoading(true)
//         signOut({ callbackUrl: '/' })
//       }}
//       {...props}
//     >
//       {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
//       {children}
//     </Button>
//   )
// }
