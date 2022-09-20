import React, {useState} from 'react'


function Sidebaritems({item}) {
    const [active, setActive] = useState(false) 
  if(item.children) {
return (
        <div className={active ? "sidebar-item active" : "sidebar-item"}>
          <div className='sidebar-title'>
          <span>
          {item.icon && <i class={item.icon}></i>}
            {item.text}       
            </span>
            <i class="bi bi-chevron-down" onClick={() => setActive(!active) }></i>
        </div>
        <div className='sidebar-content'>
        {item.children.map((child, index) => <Sidebaritems key={index} item={child}/>)}
          </div>
        </div>
        )
  } else {
    return (
        <a href={item.href} className='sidebar-item' style={{color:'#fff', textDecoration:'none'}}>
          <div className='sidebar-title'>
          <span>
          {item.icon && <i className={item.icon}></i>}
          {item.text}        
            </span>
            
        </div>
        
        </a>
      )
  }
}

export default Sidebaritems
