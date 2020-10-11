<template>
	<div class="botData">
		<div class="botName" @click="refactorBot"
			><p>{{ bot.name }}</p></div
		>
		<button class="deleteBot" @click="removeBot"><p>remove bot</p></button>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'BotData',
		props: {
			bot: {
				type: Object,
				default() {
					return {
						id: '',
						name: '',
						description: '',
						image: {},
						preview: {},
						date: '',
					}
				},
			},
		},
		computed: {
			...mapGetters({ changes: 'changes' }),
		},
		methods: {
			removeBot() {
				this.$emit('removeBot', this.key)
			},
			refactorBot() {
				this.$emit('refactorBot', this.key)
				this.$store.commit('changes', true)
				this.$store.commit('openModal')
			},
		},
	}
</script>

<style lang="scss" scoped>
	.botData {
		width: 100%;
		height: 100%;
		margin: 0.5em 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 1em;
		border: 0.1em solid black;
	}

	.botName {
		width: 90vw;
		margin: 1em;

		p {
			@include centryfy_row;
		}
	}

	.deleteBot {
		width: 10vw;
		margin: 1em;

		@include button(
			$delete_button_color,
			$delete_button_border_color,
			$delete_button_text_color,
			$delete_button_hover_color
		);

		p {
			@include centryfy_row;
		}
	}
</style>
