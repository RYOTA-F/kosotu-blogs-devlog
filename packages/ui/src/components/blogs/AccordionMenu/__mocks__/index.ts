import { AccordionMenuProps } from '../AccordionMenu.types'

export const accordionMenuMock: AccordionMenuProps = {
  label: 'フロントエンド',
  path: '/category/front-end',
  menuList: [
    { label: 'React', path: '/category/react' },
    { label: 'Vue.js', path: '/category/vue' },
  ],
}
