<template>
	<div class="botlist">
		<BotData
			v-for="bot in bots"
			:key="bot.id"
			:bot="bot"
			@removeBot="removeBot(bot.id)"
			@refactorBot="refactorBot(bot.id)"
		/>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import BotData from './BotData.vue'

	export default {
		name: 'BotList',
		components: {
			BotData,
		},
		computed: {
			...mapGetters({ bots: 'botList' }),
		},
		beforeCreate() {
			this.$store.dispatch('getBotList')
		},
		methods: {
			removeBot(key) {
				this.$store.dispatch('deleteBot', key)
			},
			refactorBot(key) {
				const bot = this.bots.find(i => i.id === key)
				this.$store.dispatch('putBot', bot)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.botlist {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 0.5em;
	}
</style>
