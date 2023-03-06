function h(tag, props, children) {
  return {
    tag,
    props,
    children
  }
}

function mount(vNode, container) {
  // 1. 创建真实Dom，并赋值给vNode
  const el = vNode.el = document.createElement(vNode.tag)
  // 2. 将属性方法设置到节点上
  if (vNode.props) {
    for (const key in vNode.props) {
      const value = vNode.props[key]
      if (key.startsWith('on')) {
        el[`on${key.slice(2).toLowerCase()}`] = value
      } else {
        el.setAttribute(key, value)
      }
    }
  }
  // 3. 将创建子节点并挂载到el上
  if (typeof vNode.children === 'string') {
    el.textContent = vNode.children
  } else if (Array.isArray(vNode.children)) {
    vNode.children.forEach(element => {
      mount(element, el)
    });
  }
  container.appendChild(el)
}

function patch(n1, n2) {
  const el = n2.el = n1.el
  // 1. 先比较两个节点的标签是否相同
  const oldTag = n1.tag
  const newTag = n2.tag
  if (oldTag !== newTag) {
    parentEl = el.parentNode
    parentEl.innerHTML = ''
    mount(n2, parentEl)
  } else {
    // 2. 节点不同，比较属性
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    for (const key in newProps) {
      const newValue = newProps[key]
      if (key in oldProps) {
        const oldValue = oldProps[key]
        if (oldValue !== newValue) {
          if(key.startsWith('on')){
            el[`on${key.slice(2).toLowerCase()}`] = newValue
          }else {
            el.setAttribute(key, newValue)
          }
        }
      } else {
        el.setAttribute(key, newValue)
      }
    }
    for (const key in oldProps) {
      if (!(key in oldProps)) {
        el.removeAttribute(key)
      }
    }

    const oldChildren = n1.children || []
    const newChildren = n2.children || []
    // 3. 比较子节点
    if (typeof newChildren === 'string') {
      if (typeof oldChildren === 'string') {
        if (oldChildren !== newChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = ''
        el.textContent = newChildren
      }
    } else if(Array.isArray(newChildren)) {
      if (typeof oldChildren === 'string') {
        el.innerHTML = ''
        newChildren.forEach(element => {
          mount(element, el)
        });
      }else {
        const minLength = Math.min(oldChildren.length, newChildren.length)
        for (let index = 0; index < minLength; index++) {
          patch(oldChildren[i],newChildren[i])
        }
        if(newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach(element => {
            mount(element, el)
          });
        }else if(newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach(element => {
            el.removeChild(element)
          });
        }
      }
      
    }

  }

}
