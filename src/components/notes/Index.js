import React from 'react'
import AspectSwitch from '../common/AspectSwitch'
import WideLayout from './WideLayout'

const Index = () => <AspectSwitch tall={() => <div />} wide={<WideLayout />} />

export default Index