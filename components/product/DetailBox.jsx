import React from 'react'

export default function DetailBox({t1, t2}) {
  return (
    <div className="flex flex-col w-30 md:w-50 items-start p-2 rounded-lg bg-neutral3">
        <span className="text-sm text-neutral11">{t1}</span>
        <span className="font-bold">{t2}</span>
    </div>
  )
}
