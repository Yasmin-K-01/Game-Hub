import type { ReactNode } from 'react'

type IconButtonProps = {
  label: string
  children: ReactNode
}

function IconButton({ label, children }: IconButtonProps) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  )
}

export default IconButton
