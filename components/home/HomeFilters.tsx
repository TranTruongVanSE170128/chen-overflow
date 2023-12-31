'use client'

import { HomePageFilters } from '@/constants/filters'
import React from 'react'
import { Button } from '../ui/button'
import { cn, formUrlQuery } from '@/lib/utils'
import { useSearchParams, useRouter } from 'next/navigation'

function HomeFilters() {
  const searchParams = useSearchParams()
  const active = searchParams.get('filter')
  const router = useRouter()

  return (
    <div className='mt-10 hidden flex-wrap gap-3 md:flex'>
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {
              const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'filter',
                value: item.value !== active ? item.value : null
              })
              router.push(newUrl, { scroll: false })
            }}
            className={cn(
              'body-medium rounded-lg px-6 py-3 capitalize shadow-none',
              active === item.value
                ? 'bg-primary-100 text-primary-500 dark:bg-dark-400 '
                : 'bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300'
            )}
          >
            {item.name}
          </Button>
        )
      })}
    </div>
  )
}

export default HomeFilters
