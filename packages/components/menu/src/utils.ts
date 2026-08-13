export interface MenuItem {
	id: string | number
	label: string
	icon?: string
	path?: string
	disabled?: boolean
	children?: MenuItem[]
}

/**
 * 在菜单树中查找目标节点，返回从根节点到目标节点的完整路径。
 * 未找到时返回空数组。
 */
export function findMenuPath(menus: MenuItem[], id: string | number): MenuItem[] {
	for (const item of menus) {
		if (item.id === id) {
			return [item]
		}
		if (item.children && item.children.length) {
			const childPath = findMenuPath(item.children, id)
			if (childPath.length) {
				return [item, ...childPath]
			}
		}
	}
	return []
}
