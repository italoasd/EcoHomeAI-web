import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen bg-blue-900 flex justify-center items-center flex-col font-alt">
      <h1 className="text-white hover:text-zinc-400 text-4xl mb-10"><Link href={'./user/login'} className="underline decoration-2">Login</Link></h1>
      <h1 className="text-white hover:text-zinc-400 text-4xl mb-10"><Link href={'./user/register'} className="underline decoration-2">Register</Link></h1>
    </div>
  )
}
