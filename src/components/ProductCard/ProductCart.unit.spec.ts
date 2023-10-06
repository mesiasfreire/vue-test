import { it, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard/ProductCard.vue'

const mountProdutCardComponent = () => {
    const product = {
        id: 1,
        title: 'Titulo 1',
        body: 'Descricao 1'
      }

    return {
        wrapper: mount(ProductCard, { props: { product }}),
        product: product
    }
}


describe('Product card Unit', ()=> {

    it('shoud match snapshot', () => { 
        const {wrapper} = mountProdutCardComponent()
        expect(wrapper.element).toMatchSnapshot()
    })
    it('should mount the component',async () => {
        const {wrapper} = mountProdutCardComponent()
        
        //console.log(wrapper.html())
        await expect(wrapper.vm).toBeDefined
        await expect(wrapper.text()).toContain('Titulo 1')
        await expect(wrapper.text()).toContain('Descricao 1')
    })

    it('should emit addToCart when the button clicked', async () => {
        const {wrapper, product} = mountProdutCardComponent()

        expect(wrapper.find('button').trigger('click'))
        expect(wrapper.emitted().addToCart).toBeTruthy()
        expect(wrapper.emitted().addToCart[0]).toEqual([product])
    })

}) 