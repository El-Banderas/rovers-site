'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState, Position } from '@xyflow/react';
import styles from "./styles.module.css";
import { isMobile } from '../utils/screenSize';

import '@xyflow/react/dist/style.css';
import zIndex from '@mui/material/styles/zIndex';

export default function Graph () {
    const { push } = useRouter();

  const baseX = 100
  const horizontalShift = 150

  const baseY = 200
  const verticalShift = 50
const initialNodesDesktop = [
  { id: '1',  data: { label: 'Leaders' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Mechanics' }, position: { x: baseX + 0.75 * horizontalShift , y: 200 } },
  { id: '3', data: { label: 'Eletronics' }, position: { x: baseX + 2*horizontalShift , y: 200 } },
  { id: '4', data: { label: 'Software' }, position: { x: baseX - 0.75 * horizontalShift , y: 200 } },
  { id: '5', data: { label: 'Business' }, position: { x: baseX - 2*horizontalShift , y: 200 } },
];

const initialNodesMobile = [
  { id: '1', data: { label: 'Leaders' }, position: { x: 10, y:  200  } },
  { id: '2', data: { label: 'Mechanics' }, position: { x: 250, y: baseY + 0.75 * verticalShift } },
  { id: '3', data: { label: 'Eletronics' }, position: { x: 250, y: baseY + 2 * verticalShift } },
  { id: '4', data: { label: 'Software' }, position: { x: 250 , y: baseY - 0.75 * verticalShift } },
  { id: '5', data: { label: 'Business' }, position: { x: 250 , y: baseY - 2 * verticalShift } },
];
const initialNodes = isMobile() ? initialNodesMobile : initialNodesDesktop

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

const onNodeClick = (event : React.MouseEvent<Element, MouseEvent>, node : any) => {console.log('click node', node.data.label); 
   push(`#${node.data.label}%20Department`);
};

const disabled = true
  return <div style={{ height: 400 ,width: '100%' }}  >
 <ReactFlow
 className="nowheel"
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