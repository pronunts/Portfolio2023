import mockStore from '../store_mock'
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyExperience from '../../components/MyExperience.vue'
import my_experience from '../../langs/my_experience'

describe('components/MyExperience.vue', () => {
    const wrapper = mount(MyExperience, {
        global: {
            plugins: [mockStore],
        }
    })

    it('It should render', async () => {
        const h1 = wrapper.get('h1') // Change this line to get 'h1' element
        expect(h1.text()).to.equal(my_experience['es'].my_exp)
    })
})
