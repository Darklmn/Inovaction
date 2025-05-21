
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import './style.css'

export default function App() {
  const { scene } = useGLTF('https://cdn.jsdelivr.net/gh/openai-public-cdn/assets/tropical_island.glb')
  return (
    <div className="container">
      <aside className="kanban">
        <h2>Inovaction - Kanban</h2>
        <div className="column">📌 To Do</div>
        <div className="column">⚙️ In Progress</div>
        <div className="column">✅ Done</div>
      </aside>
      <Canvas className="canvas">
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} />
        <primitive object={scene} scale={0.5} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
