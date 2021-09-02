import React from 'react'
import * as d3 from 'd3'

export default class SpiralScreen extends React.Component {

    constructor (props) {
      super(props)
      this.state = {}
      this.svgRef = React.createRef()
      this.componentWillUnmountFlag = false
    }

    componentDidMount() {
      const w = 512
      const h = 512
      const gridSize = 24
      const strokeWidthMulti = 0.5
      const wavePeriod = 1500
      const waveDelay = wavePeriod / gridSize
      const easeFn = d3.easeElasticInOut

      const svg = d3.select(this.svgRef.current)
        .attr('viewBox', [0,0,w,h].join(' '))
        .attr('width', '100%').attr('margin', 'auto')
        .style('background-color', '#FFF')

      const defs = svg.append('defs')
      
      const lg = defs.append('linearGradient').attr('id', 'text-color-gradient')
      // const stop0 = lg.append('stop')
      //   .attr('stop-color', '#FFF')
      //   .attr('offset', '0%')
      //   .attr('stop-opacity', '0%')
      // const stop1 = lg.append('stop')
      //   .attr('stop-color', '#FFF')
      //   .attr('offset', '50%')
      //   .attr('stop-opacity', '100%')
      // const stop2 = lg.append('stop')
      //   .attr('stop-color', '#FFF')
      //   .attr('offset', '100%')
      //   .attr('stop-opacity', '0%')

      const filterShadow = defs.append('filter').attr('id','filter-shadow-maze-text')
      
      const dropShadow = filterShadow.append('feDropShadow')
        .attr('dx',0).attr('dy',0).attr('stdDeviation', 10)
        .attr('flood-color','#777')

      defs.append('clipPath').attr('id','clip-mask-circle-bg')
        .append('circle')
          .attr('cx', w*0.5).attr('cy', h*0.5).attr('r', w*0.48)
          .attr('fill','#000')

      const gridScale = d3.scaleLinear().domain([0,gridSize]).range([0,w])
      const halfGridScale = gridScale(0.5)
  
      const gParent = svg.append('g').attr('transform', `translate(${halfGridScale} ${halfGridScale})`)
        // .attr('clip-path', 'url(#clip-mask-circle-bg)')

      const gText = svg.append('g').attr('transform', `translate(${w*0.5} ${h*0.444})`)
        .attr('filter', 'url(#filter-shadow-maze-text)')

      const fontSize = w*0.2
      gText.append('text').text('LOADING')
        .attr('x', 0).attr('y', 0).attr('dy', '-.1em')
        .attr('font-size', fontSize)
        .attr('fill', '#FFF')
        .attr('font-weight', 700)
        .attr('text-anchor', 'middle')
      gText.append('text').text('DATA')
        .attr('x', 0).attr('y', 0).attr('dy', '.68em')
        .attr('font-size', fontSize*1.97)
        .attr('fill', '#FFF')
        .attr('font-weight', 700)
        .attr('letter-spacing',-20)
        .attr('text-anchor', 'middle')

      const multi = 1.4

      const lines = []
      const linesObject = {}

      d3.range(gridSize).forEach(x=>{
        d3.range(gridSize).forEach(y=>{
          const pos = { x: gridScale(x), y: gridScale(y) }
          const gLocal = gParent.append('g').attr('transform', `translate(${pos.x} ${pos.y})`)

          const line = gLocal.append('line')
            .datum({x,y})
            .attr('transform', Math.random() > 0.5 ? 'rotate(45)' : 'rotate(-45)')
            .attr('x1', 0).attr('y1', -halfGridScale * multi).attr('x2', 0).attr('y2', halfGridScale * multi)
            .attr('stroke', '#FFF').attr('stroke-width', strokeWidthMulti*(w/gridSize)).attr('stroke-linecap', 'round')

          if(linesObject[x-(gridSize/2)] === undefined) {
            linesObject[x-(gridSize/2)] = {}
          }
          linesObject[x-(gridSize/2)][y-(gridSize/2)] = line

          lines.push(line)
        })
      })
      const self = this
      function transitionAll () {
        if(self.componentWillUnmountFlag) {
          return
        }
        lines.forEach(line=>{
          const p = line.datum()
          const delay = Math.sqrt( Math.pow((gridSize/2)-p.x,2) + Math.pow((gridSize/2)-p.y,2) )
          line.transition().delay(d=>delay*waveDelay).duration(1)
            .attr('stroke', '#FFF')
            .attr('stroke-width', strokeWidthMulti*(w/gridSize) * 0.25)
            .transition().delay(0).duration(1500).ease(easeFn)//.ease(d3.easeBounce)
            .attr('transform', Math.random() > 0.5 ? 'rotate(45)' : 'rotate(-45)')
            .attr('stroke', '#a6cee3')
            .attr('stroke-width', strokeWidthMulti*(w/gridSize))
            .on('end', (d)=>{
              if(d.x === (gridSize-1) && d.y === (gridSize-1)) {
                transitionAll()
              }
            })
        })  
      }
      transitionAll()
    }

    componentWillUnmount () {
      this.componentWillUnmountFlag = true
    }

    render () {
      return (
        <div style={{ textAlign:'center' }}>
          <svg ref={this.svgRef}/>
        </div>
      )
    }

}