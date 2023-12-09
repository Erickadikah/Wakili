import React from 'react'
import IndividulProductDisplay, {IndividualProductDisplayProps} from './../landingPage/products/individulProductDisplay';



const IndividualProductPage: React.FC<IndividualProductDisplayProps> = (props: IndividualProductDisplayProps) => {
  return (
    <div style={{backgroundColor: "#F8F7FA"}}>
        <IndividulProductDisplay {...props}/>
    </div>
  )
}

export default IndividualProductPage;
