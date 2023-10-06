import { it, expect, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import Search from '@/components/Search/Search.vue'

describe('Search Component unit', async () => {
    it('should mount the Component',  async () => {
        const wrapper = mount(Search)
        expect(wrapper.element).toBeDefined
    })

    it('should emit a search event when form is submitted', async() => {

        const wrapper = mount(Search)
        const termo = 'Termo de busca'
        expect(wrapper.find('input[type="search').setValue(termo))
        expect(wrapper.find('form').trigger('submit'))

        expect(wrapper.emitted().doSearch).toBeTruthy()
        expect(wrapper.emitted().doSearch.length).toBe(1)
        expect(wrapper.emitted().doSearch[0]).toEqual([termo])
    })

    it('should emit doSearch event when input field has been cleared',  async() => {
        const wrapper = mount(Search)
        const termo = 'Termo de busca'

        await expect(wrapper.find('input[type="search"]').setValue(termo))
        await expect(wrapper.find('input[type="search"]').setValue(''))
       
        expect(wrapper.emitted().doSearch).toBeTruthy()
        expect(wrapper.emitted().doSearch.length).toBe(1)
        expect(wrapper.emitted().doSearch[0]).toEqual([''])
    })
})