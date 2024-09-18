import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Send } from "lucide-react"
import Link from "next/link"
import { CreateSurveyButton } from "@/components/create-survey-button"


export default async function LandingPage() {
  const isLoggedIn = true;
  const user = {
    "id": 1,
    "username": "test"
  }
  return (
    <div className="flex flex-col ">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center  space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unlock Your Team&apos;s Potential
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create, distribute, and manage personality surveys to assess your employees based on predefined types.
                </p>
              </div>
              <div className="space-x-4">
                <CreateSurveyButton user={user} isLoggedIn={isLoggedIn} />
              </div>
            </div>
          </div>
        </section >
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Platform Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <h3 className="text-xl font-bold">Easy Survey Creation</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Create custom surveys with our intuitive drag-and-drop interface.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Send className="h-12 w-12 text-blue-500" />
                  <h3 className="text-xl font-bold">Effortless Distribution</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Send surveys to your team with just a few clicks.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 text-purple-500" />
                  <h3 className="text-xl font-bold">Insightful Analysis</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Gain valuable insights into your team&apos;s personality types and dynamics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    &quot;This platform has revolutionized how we understand our team dynamics. The insights we&apos;ve gained are invaluable.&quot;
                  </p>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">HR Director, Tech Innovators Inc.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    &quot;The ease of creating and distributing surveys has made our employee assessment process so much more efficient.&quot;
                  </p>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Team Lead, Global Solutions Ltd.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Enhance Your Team?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start creating surveys today and unlock the potential of your workforce.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main >
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Employee Survey Platform. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div >
  )
}