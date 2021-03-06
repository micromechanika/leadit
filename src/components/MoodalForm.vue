<template>
	<div class="modalForm" @click.stop.self="changeBot">
		<form>
			<div class="formMarkup">
				<div
					:class="[
						bot.preview.size > 0 ? 'removePlaceholder' : '',
						'logo',
					]"
					@drop.prevent.stop="uploadFile"
					@dragover.prevent.stop
					@dragenter.prevent.stop
					@dragleave.prevent.stop
				>
					<div
						:class="[
							bot.preview.size > 0
								? 'imageInfo'
								: 'removeImageInfo',
						]"
					>
						<p
							>{{ bot.preview.name }} ({{
								formatBytes(bot.preview.size, 3)
							}})</p
						>
						<button
							class="removeImageButton"
							type="button"
							title="remove image"
							@click="remove"
							><p>x</p>
						</button>
					</div>

					<div class="botLogo">
						<img
							:class="[
								bot.preview.size > 0
									? 'imageBorder'
									: 'removeImageBorderRadius',
							]"
							:src="bot.preview.src"
						/>
					</div>

					<label class="choceFile" for="file">
						<input
							id="file"
							ref="upload"
							type="file"
							accept="image/*"
							name="botlogo"
							@change="loadFile"
						/>
						<p>Choose a file</p>
					</label>
				</div>
				<div class="folders">
					<input
						v-model="bot.name"
						type="text"
						name="botname"
						placeholder="enter bot name"
					/>
					<input
						v-model="bot.description"
						type="text"
						name="botdescription"
						placeholder="enter bot descriptions"
					/>
					<Datepicker
						v-model="bot.date"
						wrapper-class="inputs"
						:monday-first="true"
						input-class="dpinput"
						format="dd MMMM yyyy"
						name="botdate"
						placeholder="enter bot date"
					/>
				</div>
			</div>
			<div class="buttons">
				<button class="saveBotInfo" type="button" @click="saveNewBot">
					<p>Save</p>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
	import Datepicker from 'vuejs-datepicker'

	export default {
		name: 'MoodalForm',
		components: {
			Datepicker,
		},
		data() {
			return {
				filelist: [],
			}
		},
		computed: {
			...mapGetters(['changes', 'refBot', 'newBot']),
			bot() {
				return this.changes ? this.refBot : this.newBot
			},
		},
		methods: {
			...mapMutations({
				togleModal: 'openModal',
			}),
			formatBytes(bytes, decimals = 2) {
				if (bytes === 0) return '0 Bytes'

				const k = 1024
				const dm = decimals < 0 ? 0 : decimals
				const sizes = [
					'Bytes',
					'KB',
					'MB',
					'GB',
					'TB',
					'PB',
					'EB',
					'ZB',
					'YB',
				]

				const i = Math.floor(Math.log(bytes) / Math.log(k))

				// eslint-disable-next-line no-restricted-properties
				return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
					sizes[i]
				}`
			},
			saveNewBot() {
				if (this.changes === false) {
					this.$store.dispatch('postBot', this.bot)
				}
			},
			changeBot() {
				this.togleModal()
				this.$store.dispatch('putBot', this.bot)
			},
			loadFile() {
				this.filelist = [...this.$refs.upload.files]

				this.bot.image = {
					src: this.filelist[0],
					name: this.filelist[0].name,
					size: this.filelist[0].size,
				}

				this.bot.preview = {
					src: URL.createObjectURL(this.filelist[0]),
					name: this.filelist[0].name,
					size: this.filelist[0].size,
				}
			},
			uploadFile(e) {
				this.$refs.upload.files = e.dataTransfer.files
				this.loadFile()
			},
			remove() {
				this.filelist = []
				this.bot.image = {}
				this.bot.preview = {}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.modalForm {
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: 1000;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: $modal_form_background_color;
	}

	form {
		width: 60vw;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: $form_background_color;
		border: 0.1em solid $form_border_color;
	}

	.formMarkup {
		display: flex;
		flex-direction: row;
	}

	.logo {
		width: 50vw;
		margin: 0.5em;
		border: 0.1em dashed black;
		background-color: #b8e8d8;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.removeImageInfo {
		display: none;
	}

	.removePlaceholder {
		border: 0.1em solid black;
		background-color: transparent;
	}

	.removeImageBorderRadius {
		width: 0;
		height: 0;
		border: none;
	}

	.imageInfo {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		p {
			margin: 0.5em;
		}
	}

	.botLogo {
		width: 20vmax;
		height: 20vmax;
	}

	.imageBorder {
		width: 100%;
		height: 100%;
		border: none;
		object-fit: cover;
		border-radius: 50%;
	}

	.choceFile {
		width: 10vw;
		margin: 1em;

		input[type='file'] {
			display: none;
		}

		display: inline-block;
		@include button(
			$file_button_color,
			$file_button_border_color,
			$file_button_text_color,
			$file_button_hover_color
		);

		p {
			@include centryfy_row;
		}
	}

	.dpinput {
		width: 100%;
		background-color: white;
	}

	.folders {
		width: 50vw;
		display: flex;
		padding: 0 0.5em;
		flex-direction: column;

		.inputs {
			margin: 0.5em;
		}

		input {
			margin: 0.5em;
		}
	}

	.buttons {
		position: absolute;
		right: 2vw;
		bottom: 2vw;
	}

	.saveBotInfo {
		width: 10vw;
		@include button(
			$save_button_color,
			$save_button_border_color,
			$save_button_text_color,
			$save_button_hover_color
		);

		p {
			@include centryfy_row;
		}
	}

	.removeImageButton {
		width: 2vw;
		height: 2vw;
		margin: 0.5em;
		padding: 0;
		font-size: 0.8em;
		line-height: 0;
		@include button(
			$remove_image_button_color,
			$remove_image_button_border_color,
			$remove_image_button_text_color,
			$remove_image_button_hover_color
		);

		p {
			@include centryfy_row;
		}
	}
</style>
