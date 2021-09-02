import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import React, { useCallback, useEffect } from 'react'
import { characterFilter, treemapResize } from '../../actions'

const mapStateToProps = (state) => {
  return {
    treemapLeaves: state.treemapLeaves,
    filteredCharacter: state.filteredCharacter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilteredCharacter: payload => { dispatch(characterFilter(payload)) },
    setTreemapContainerSize: payload => { dispatch(treemapResize(payload)) }
  }
}

function ConnectedTreemap ({ treemapLeaves, filteredCharacter, setFilteredCharacter, setTreemapContainerSize }) {
  // const containerReference = React.createRef()  

  const containerReference = useCallback(node => {
    if (node !== null) {
      setTreemapContainerSize({ current: node })
      window.TREEMAP_resizeAction = window.addEventListener('resize', () => {
        setTreemapContainerSize({ current: node })
      })
      return function cleanup () {
        window.removeEventListener(window.TREEMAP_resizeAction)
      }
    }
  }, []);

  useEffect(() => {
    console.log("I have been mounted")
    // setTreemapContainerSize(containerReference)
    // if (window.TREEMAP_resizeAction === undefined) {
    //   window.TREEMAP_resizeAction = window.addEventListener('resize', () => {
    //     console.log('resize action', containerReference)
    //     setTreemapContainerSize(containerReference)
    //   })
    // }
  }, [])  
  return (
    <Grid item xs={12} style={{ marginBottom: 0 }} ref={containerReference}>
      <div style={{ position: 'relative', height: 172, width: '100%', margin: 'auto'}}>
        {
          treemapLeaves.map((leaf,leafIdx) => {
            return (
              <div 
                key={`treemap_leaf_${leafIdx}`}
                style={{ 
                  position: 'absolute', 
                  top: leaf.y0, left: leaf.x0, 
                  width: leaf.x1-leaf.x0, height: leaf.y1-leaf.y0, 
                  textAlign: 'left',
                  boxSizing: 'border-box',
                  backgroundColor: '#a6cee3',
                  overflow: 'hidden',
                  color: '#333',
                  borderRadius: '4px',
                  userSelect: 'none',
                  cursor: 'pointer',
                  border: filteredCharacter === leaf.data.name ? '1px solid #333' : '1px solid transparent'            
                }}
                onClick={()=>{
                  if(filteredCharacter === null || filteredCharacter !== leaf.data.name) {
                    setFilteredCharacter(leaf.data.name)
                  } else {
                    setFilteredCharacter(null)
                  }
                }}
              >
                <div style={{
                  display: 'inline-block',
                  position: 'absolute',
                  top: '3px',
                  left: '5px',
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  {leaf.data.name} <span style={{fontWeight: 300, fontSize: 12}}>({leaf.data.value})</span> 
                </div>                
              </div>
            )
          })
        }
      </div>
    </Grid>
  )
}

const Treemap = connect(mapStateToProps, mapDispatchToProps)(ConnectedTreemap)

export default Treemap