import { it, expect, describe, vi, } from 'vitest'
import { mount } from '@vue/test-utils'

import axios from 'axios'

import ProductList from '@/views/HomeView.vue'
import Search from '@/components/Search/Search.vue'

const productsMock = [{id:1, title:'', body:''}]

vi.spyOn(axios, 'get')

describe('ProductList - integration', () => {
    it('should mount  the component', () => {
        const wrapper = mount(ProductList)
        expect(wrapper.vm).toBeDefined()
    })

    it('shoud mount Search as a child', () => {
        const wrapper = mount(ProductList)
        expect(wrapper.findComponent(Search)).toBeDefined()
    })
    it('should call axios get when component is mounted',  async () => {
        mount(ProductList)    
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')

    })
    it('should mount the ProductiCard componenete 10 times', async () => {
        const wrapper = mount(ProductList)
        const cards = wrapper.findAllComponents(ProductList)

        expect(cards).toHaveLength(10)
    })
})