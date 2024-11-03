'use client'

import { useRouter } from 'next/navigation'
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

export default function Graph () {
  const router = useRouter()
const initialNodes = [
  { id: '1', data: { label: 'Pessoa 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 200 } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

console.log("AQUI!!!")

  return <div style={{ height: 300 ,width: 300 }}>
 <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      minZoom={0.2}
      maxZoom={4}
      attributionPosition="bottom-left"
      fitView
      fitViewOptions={{ padding: 0.5 }}
    ></ReactFlow>

   </div>;
}