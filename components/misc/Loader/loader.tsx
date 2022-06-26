import clsx from 'clsx'
import React, { FC } from 'react'
import Image from 'next/image'

interface Props {
  width?: string
  height?: string
}
const Loader: FC<Props> = ({ width, height }) => (
  <div
    className={clsx(
      'flex items-center justify-center',
      width ? width : 'w-full',
      height ? height : 'h-screen'
    )}>
    <div className="w-20 h-20 relative">
      <Image
        src="/icon_loader.gif"
        alt="Picture"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  </div>
)

export default Loader
