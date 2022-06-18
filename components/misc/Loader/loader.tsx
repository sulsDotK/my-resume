import clsx from 'clsx'
import React, { FC } from 'react'

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
    <img src="/icon_loader.gif" className="w-20" />
  </div>
)

export default Loader
