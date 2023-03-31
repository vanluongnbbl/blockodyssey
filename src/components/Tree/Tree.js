import React, { useState } from 'react';
import './styles.css'

function TreeNode({ node }) {
    const [expanded, setExpanded] = useState(true);

    // support expand/collapse 
    const handleToggle = () => {
      setExpanded(!expanded);
    }

    return (
        <li>
        <div>
          {node.name}
          {
            node.childs && 
              <button 
                className='toggle-btn'
                style={{
                  cursor: node.childs ? 'pointer' : ''
                }}
                onClick={handleToggle}
              >
                  {expanded ? '-' : ' +'}
              </button>
          }
        </div>
        {node.childs && expanded && (
          <ul>
            {node.childs.map((child) => (
              <TreeNode key={child.name} node={child} />
            ))}
          </ul>
        )}
      </li>
    )
}
  

function Tree({ data }) {
  return (
    <ul>
    {data.map((node) => (
      <TreeNode key={node.name} node={node} />
    ))}
  </ul>
  )
}

export default Tree

