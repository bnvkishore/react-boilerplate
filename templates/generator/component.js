module.exports= `
  import React from 'react'
  import {makeStyles} from "@material-ui/core/styles"
  
  const useStyles= makeStyles(theme => ({
      root: {}
  }))
  
  function {{pascalCase name}} (props ) {
      return (
        <>
          <div>
              {{pascalCase name}} display area
          </div>
         </>
      )
  }
  
  {{ pascalCase name }}.propTypes = {};
  
  export default {{ pascalCase name}}
`