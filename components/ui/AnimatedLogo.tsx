import Image from 'next/image'
import React from 'react'

const AnimatedLogo = () => {
  return (
    <div className="py-2">
      <Image src="/logo.svg" alt="AIMS Logo" width={600} height={600} />
    </div>
  )
}

export default AnimatedLogo