import { createServer } from 'miragejs'

export function makeServer({environment= 'development'}= {}) {
    let server = createServer({
        environment,
        routes() {
            this.namespace = 'api',
            this.get("products", () => {
                return {
                    products: [
                        {title: "Titulo do produto 1", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 2", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 3", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 4", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 5", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 6", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 7", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                        {title: "Titulo do produto 8", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus sapiente enim neque facilis'},
                    ]
                }
            })
        },
    })
}
