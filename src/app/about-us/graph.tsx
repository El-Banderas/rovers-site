'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import styles from "./styles.module.css";

import '@xyflow/react/dist/style.css';

export default function Graph () {
    const { push } = useRouter();

  const baseX = 100
  const shift = 150
const initialNodes = [
  { id: '1', data: { label: 'Leaders' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Mechanics' }, position: { x: baseX + 0.75 * shift, y: 200 } },
  { id: '3', data: { label: 'Electronics' }, position: { x: baseX + 2*shift, y: 200 } },
  { id: '4', data: { label: 'Software' }, position: { x: baseX - 0.75 * shift, y: 200 } },
  { id: '5', data: { label: 'Business' }, position: { x: baseX - 2*shift, y: 200 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e1-5', source: '1', target: '5' },
];

const styles = {
  background: 'whitesmoke',
  width: '300%'
};
const proOptions = { hideAttribution: true };

const onNodeClick = (event : EventTarget , node : any) => {console.log('click node', node.data.label); 
   push(`#${node.data.label}%20Department`);
};

const disabled = true
  return <div style={{ height: 400 ,width: '100%' }}  >
 <ReactFlow
      style={styles}
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
        proOptions={proOptions}
              onNodeClick={ onNodeClick }
  
  // Optional if you also want to lock zooming
  zoomOnDoubleClick={!disabled}
  minZoom={disabled ? 1 : 0.5}
  maxZoom={disabled ? 1 : 3}
    ></ReactFlow>

   </div>;
}