import React from 'react'
import { Stack, Skeleton } from '@mui/material'

const SkeletonProductCard = () => {
  return (
    <Stack direction={'row'} spacing={1}>
        <Skeleton variant="rectangular" width={100} height={118} />
        <Stack spacing={5}>
            <Skeleton width={200}  height={10} />
            <Skeleton width={200}  height={10} />
            <Skeleton width={200}  height={10} />
        </Stack>
    </Stack>
  )
}

export default SkeletonProductCard