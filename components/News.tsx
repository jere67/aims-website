"use client"
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react"

export default function News() {
  return (
    <div className="w-full -mt-16 mb-48">
      {/* Background layers matching Hero.tsx */}
      <div className="h-full w-full dark:bg-black-100 bg-white absolute left-0 right-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="py-20 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-blue-michigan sm:text-5xl md:text-6xl mb-0">
            Recently in <span className="text-yellow-maize">AIMS</span>
          </h2>
        </div>

        <div className="container  px-0 mx-auto">
          <div className="max-w w-full gap-6 grid grid-cols-12 grid-rows-2 px-0 sm:px-0 relative bg-white my-10">
            <Card className="col-span-12 sm:col-span-4 h-[468px] border border-gray-300 rounded-xl overflow-hidden">
              <CardHeader className="absolute z-10 top-3 flex-col !items-start">
                <p className="text-sm text-white/60 uppercase font-bold">What to watch</p>
                <h4 className="text-white font-medium text-xl">Stream the Acme event</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-4.jpeg"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[468px] border border-gray-300 rounded-xl overflow-hidden">
              <CardHeader className="absolute z-10 top-3 flex-col !items-start">
                <p className="text-sm text-white/60 uppercase font-bold">Plant a tree</p>
                <h4 className="text-white font-medium text-xl">Contribute to the planet</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-3.jpeg"
              />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[468px] border border-gray-300 rounded-xl overflow-hidden">
              <CardHeader className="absolute z-10 top-3 flex-col !items-start">
                <p className="text-sm text-white/60 uppercase font-bold">Supercharged</p>
                <h4 className="text-white font-medium text-xl">Creates beauty like a beast</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-2.jpeg"
              />
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[468px] col-span-12 sm:col-span-5 border border-gray-300 rounded-xl overflow-hidden"
            >
              <CardHeader className="absolute z-10 top-3 flex-col items-start">
                <p className="text-sm text-white/60 uppercase font-bold">New</p>
                <h4 className="text-black font-medium text-3xl">Acme camera</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src="https://heroui.com/images/card-example-6.jpeg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-sm">Available soon.</p>
                  <p className="text-black text-sm">Get notified.</p>
                </div>
                <Button className="text-sm" color="primary" radius="full" size="md">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="w-full h-[468px] col-span-12 sm:col-span-7 border border-gray-300 rounded-xl overflow-hidden"
            >
              <CardHeader className="absolute z-10 top-3 flex-col items-start">
                <p className="text-sm text-white/60 uppercase font-bold">Your day your way</p>
                <h4 className="text-white/90 font-medium text-2xl">Your checklist for better sleep</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://heroui.com/images/card-example-5.jpeg"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-3 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-12 h-14 bg-black"
                    src="https://heroui.com/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm text-white/60">Breathing App</p>
                    <p className="text-sm text-white/60">Get a good night's sleep.</p>
                  </div>
                </div>
                <Button radius="full" size="md">
                  Get App
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center mt-0">
            <Button
              className="px-12 py-0 text-xl font-semibold text-white bg-blue-michigan rounded-full hover:bg-blue-michigan/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              size="lg"
            >
              View All News
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}