'use client'

import { useRouter } from 'next/navigation'
import React, { useState, useCallback , useEffect } from 'react';
import { ReactFlow,Handle  , useNodesState, useEdgesState, Position } from '@xyflow/react';
import styles from "./styles.module.css";

import '@xyflow/react/dist/style.css';
import zIndex from '@mui/material/styles/zIndex';

interface NodeData {
  label: string;
}

// TODO: Put this in other file
const LeftConnection = ({ data } : {data : NodeData}) => (
  <div className={styles.graphNode}>
    <Handle type="source" position={Position.Left} id="a"  />
    <div>{data.label}</div>
    <Handle type="target" position={Position.Left} id="b"  />
  </div>
);
const RightConnection = ({ data } : {data : NodeData}) => (
  <div className={styles.graphNode}>
    <Handle type="source" position={Position.Right} id="a"  />
    <div>{data.label}</div>
    <Handle type="target" position={Position.Right} id="b"  />
  </div>
);

const nodeTypes = {
  left: LeftConnection ,
  right: RightConnection,
};

export default function Graph () {
  // TODO: Move this to a utils folder:
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const width = window.innerHeight
const height =  window.innerWidth;

    if (width < 768 && height < 500) console.log("True")
    else console.log("False")
    if (width < 768 && height < 500) return setIsMobile(true)
    else setIsMobile(false)
  }, [])
    const { push } = useRouter();

  const baseX = 100
  const horizontalShift = 150

const initialNodesDesktop = [
  { id: '1',  data: { label: 'Leaders' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Mechanics' }, position: { x: baseX + 0.75 * horizontalShift , y: 200 } },
  { id: '3', data: { label: 'Eletronics' }, position: { x: baseX + 2*horizontalShift , y: 200 } },
  { id: '4', data: { label: 'Software' }, position: { x: baseX - 0.75 * horizontalShift , y: 200 } },
  { id: '5', data: { label: 'Business' }, position: { x: baseX - 2*horizontalShift , y: 200 } },
];


  const baseY = 200
  const verticalShift = 50
  const baseXMobile = -250

const initialNodesMobile = [
  { id: '1', type: 'right', data: { label: 'Leaders' }, position: { x: -450, y:  200  } },
  { id: '2',       type: 'left', data: { label: 'Mechanics' }, position: { x: baseXMobile, y: baseY + 0.75 * verticalShift } },
  { id: '3',       type: 'left', data: { label: 'Eletronics' }, position: { x: baseXMobile, y: baseY + 2 * verticalShift } },
  { id: '4',       type: 'left', data: { label: 'Software' }, position: { x: baseXMobile , y: baseY - 0.75 * verticalShift } },
  { id: '5',       type: 'left', data: { label: 'Business' }, position: { x: baseXMobile , y: baseY - 2 * verticalShift } },
];
const initialNodes = isMobile ? initialNodesMobile : initialNodesDesktop

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
      nodeTypes={nodeTypes}
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