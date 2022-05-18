import React from 'react'

interface Props {
	text?: string;
}

export const Test: React.FC<Props> = ({text}) => {
 
	return <div className='text-3xl font-bold underline'>Hello {text}</div>
}