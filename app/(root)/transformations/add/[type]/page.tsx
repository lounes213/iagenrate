import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'

const AddTransformType = ({params:{type} }: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
   <Header 
   title={transformation.title} 
   subtitle={transformation.subTitle} />
    )
}

export default AddTransformType