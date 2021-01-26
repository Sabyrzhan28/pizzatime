import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        
            <ContentLoader
            className="pizza-block"
              speed={3}
              width={280}
              height={460}
              viewBox="0 0 280 460"
              backgroundColor={'#FFFFFF'}
              foregroundColor={'gainsboro'}
              
            >
              <circle cx="132" cy="132" r="132" /> 
              <rect x="0" y="273" rx="3" ry="3" width="280" height="26" /> 
              <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
              <rect x="0" y="418" rx="3" ry="3" width="91" height="32" /> 
              <rect x="137" y="408" rx="20" ry="20" width="140" height="46" />
            </ContentLoader>
          )
    
}

export default LoadingBlock
