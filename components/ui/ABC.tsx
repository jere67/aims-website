import React, { useEffect } from 'react'
import { motion, useAnimate } from 'framer-motion'

const AnimatedLogo: React.FC = () => {
  const [scope, animate] = useAnimate()

  // Define the neural network structure
  const layers = [
    { nodes: 3, x: 250 },
    { nodes: 5, x: 325 },
    { nodes: 4, x: 400 },
    { nodes: 5, x: 475 },
    { nodes: 1, x: 550 }
  ]

  useEffect(() => {
    const animateSequence = async () => {
      // Animate neural network layer by layer
      for (let layerIndex = 0; layerIndex < layers.length; layerIndex++) {
        // Animate nodes in current layer
        const nodePromises = Array.from({ length: layers[layerIndex].nodes }, (_, i) =>
          animate(`#node-${layerIndex}-${i}`, { opacity: 1 }, { duration: 0.2 })
        )
        await Promise.all(nodePromises)

        // Animate connections to next layer if it exists
        if (layerIndex < layers.length - 1) {
          const connectionPromises = []
          for (let fromNode = 0; fromNode < layers[layerIndex].nodes; fromNode++) {
            for (let toNode = 0; toNode < layers[layerIndex + 1].nodes; toNode++) {
              connectionPromises.push(
                animate(
                  `#connection-${layerIndex}-${fromNode}-${toNode}`,
                  { pathLength: 1 },
                  { duration: 0.1 }
                )
              )
            }
          }
          await Promise.all(connectionPromises)
        }
      }

      // Animate AIMS letters
      await animate('#letter-a', { opacity: 1, scale: 1 }, { duration: 0.4 })
      await animate('#letter-i', { opacity: 1, scale: 1 }, { duration: 0.4 })
      await animate('#letter-m', { opacity: 1, scale: 0.5 }, { duration: 0.4 })
      await animate('#letter-s', { opacity: 1, scale: 1 }, { duration: 0.4 })

      // Animate description
      await animate('#description-line1', { opacity: 1 }, { duration: 0.5 })
    }

    animateSequence()
  }, [animate])

  return (
    <motion.svg
      ref={scope}
      width="1400"
      height="600"
      viewBox="0 0 775 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Neural Network */}
      <g id="neural-network" stroke="#cccccc" strokeWidth="1">
        {/* Generate nodes for each layer */}
        {layers.map((layer, layerIndex) => (
          <g key={`layer-${layerIndex}`}>
            {Array.from({ length: layer.nodes }, (_, nodeIndex) => {
              const y = 120 + (nodeIndex - (layer.nodes - 1) / 2) * 30
              return (
                <circle
                  key={`node-${layerIndex}-${nodeIndex}`}
                  id={`node-${layerIndex}-${nodeIndex}`}
                  cx={layer.x}
                  cy={y}
                  r="4"
                  fill="#cccccc"
                  opacity="0"
                />
              )
            })}
          </g>
        ))}

        {/* Generate connections between layers */}
        {layers.slice(0, -1).map((layer, layerIndex) => {
          const nextLayer = layers[layerIndex + 1]
          return Array.from({ length: layer.nodes }, (_, fromNode) =>
            Array.from({ length: nextLayer.nodes }, (_, toNode) => {
              const fromY = 120 + (fromNode - (layer.nodes - 1) / 2) * 30
              const toY = 120 + (toNode - (nextLayer.nodes - 1) / 2) * 30
              return (
                <motion.path
                  key={`connection-${layerIndex}-${fromNode}-${toNode}`}
                  id={`connection-${layerIndex}-${fromNode}-${toNode}`}
                  d={`M${layer.x},${fromY} L${nextLayer.x},${toY}`}
                  strokeDasharray="0 1"
                  initial={{ pathLength: 0 }}
                />
              )
            })
          )
        })}
      </g>

      <g id="aims-text" transform="translate(250, 150)">
        <motion.text
          id="letter-a"
          x="-30"
          y="0"
          fill="#00274c"
          fontFamily="serif"
          fontSize="100"
          initial={{ opacity: 0, scale: 0.5 }}
        >
          A
        </motion.text>
        <motion.text
          id="letter-i"
          x="60"
          y="0"
          fill="#00274c"
          fontFamily="serif"
          fontSize="100"
          initial={{ opacity: 0, scale: 0.5 }}
        >
          I
        </motion.text>
        
        {/* University of Michigan Block M - same size as other letters */}
        <motion.path
  id="letter-m"
  d="M95 -92.5 L140 -92.5 L192.5 -17.5 L245 -92.5 L290 -92.5 L290 57.5 L245 57.5 L245 -32.5 L192.5 42.5 L140 -32.5 L140 57.5 L95 57.5 Z"
  fill="#00274c"
  stroke="#ffcb05"
  strokeWidth="4.5"
  initial={{ opacity: 0, scale: 0 }}
/>
        
        <motion.text
          id="letter-s"
          x="270"
          y="0"
          fill="#00274c"
          fontFamily="serif"
          fontSize="100"
          initial={{ opacity: 0, scale: 0.5 }}
        >
          S
        </motion.text>
      </g>

      {/* Description */}
      <motion.text
        id="description-line1"
        x="400"
        y="200"
        fontFamily="serif"
        fontSize="32"
        fill="#00274c"
        textAnchor="middle"
        initial={{ opacity: 0 }}
      >
        Artificial Intelligence &amp; Multiphysics Simulations
      </motion.text>
    </motion.svg>
  )
}

export default AnimatedLogo
