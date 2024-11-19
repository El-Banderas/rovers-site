'use client'

import { useRouter } from 'next/navigation'
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import styles from "./styles.module.css";

import '@xyflow/react/dist/style.css';

export default function Graph () {
  const router = useRouter()
const initialNodes = [
  { id: '1', data: { label: 'Pessoa 1' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Departamento 1' }, position: { x: 0, y: 200 } },
  { id: '3', data: { label: 'Departamento 2' }, position: { x: 200, y: 200 } },
  { id: '4', data: { label: 'Departamento 3' }, position: { x: 150, y: 200 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
];

const disabled = true
  return <div className={styles.graphContainer}>
  <div className={styles.graphContainer}  style={{ height: 300 ,width: 300 }}>
 <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      attributionPosition="bottom-left"
      fitView
      fitViewOptions={{ padding: 0.5 }}
      nodesDraggable={!disabled}
  nodesConnectable={!disabled}
  nodesFocusable={!disabled}
  draggable={!disabled}
  panOnDrag={!disabled}
  
  // Optional if you also want to lock zooming
  zoomOnDoubleClick={!disabled}
  minZoom={disabled ? 1 : 0.5}
  maxZoom={disabled ? 1 : 3}
    ></ReactFlow>

   </div></div>;
}