// eslint-disable-next-line no-unused-vars
import { ROUTES, instance } from '../axiosProps'

const modalState = () => ({
	openModal: false,
	changes: false,
})

const modal = {
	state: modalState(),
	getters: {
		openModal: state => state.openModal,
		changes: state => state.changes,
	},
	mutations: {
		resetModalState: state => {
			Object.assign(state, modalState())
		},
		openModal: state => {
			state.openModal = !state.openModal
		},
		changes: (state, payload) => {
			state.changes = payload
		},
	},
	actions: {},
}

export default modal
