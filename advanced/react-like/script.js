function MyComponent(props) {
    return `<div style=${props.style}>Hello, ${props.name}</div>`
}

function render(component, container) {
    const output = component()
    container.innerHTML = output
}


const container = document.getElementById('root');
render(() => MyComponent({name: 'World!', style: "color: red"}), container)