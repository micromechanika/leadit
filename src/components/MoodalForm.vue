<template>
  <div class="modalForm">
    <form enctype="multipart/form-data">
      <div class="formMarkup">
        <div :class="[filelist.length>0?'removePlaceholder':'','logo']"
             @drop.prevent.stop="uploadFile"
             @dragover.prevent.stop
             @dragenter.prevent.stop
             @dragleave.prevent.stop
        >

          <div :class="[filelist.length>0?'imageInfo':'removeImageInfo']">
            <p>{{bot.image.name}} ({{bot.image.size/1e6}} mb)</p>
            <button class="removeImageButton"
                    type="button"
                    @click="remove(filelist.indexOf(bot.name))"
                    title="remove image"><p>x</p>
            </button>
          </div>

          <div class="botLogo">
            <img
              :class="[filelist.length>0?'imageBorder':'removeImageBorderRadius']"
              :src=bot.image.src>
          </div>

          <label class="choceFile" for="file">
            <input
              ref="upload"
              type="file"
              accept="image/*"
              id="file"
              @change="loadFile"
            />
            <p>Choose a file</p>
          </label>

        </div>
        <div class="folders">
          <input
            class="inputs"
            type="text"
            name="botname"
            placeholder="enter bot name"
            :value=bot.name>
          <input
            class="inputs"
            type="text"
            name="botdescription"
            placeholder="enter bot descriptions"
            :value=bot.description>
          <Datepicker class="inputs"
            name = "botdate"
            v-model="bot.date"
            placeholder="enter bot date" />
        </div>
      </div>
      <div class="buttons">
        <button class="saveBotInfo"
                type="button">
          <p>Save</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'MoodalForm',
  props: {
    bot: {
      type: Object,
      default() {
        return {
          name: '',
          description: '',
          image: {
            src: '',
            name: '',
            size: 0,
          },
          date: '',
        };
      },
    },
  },
  components: {
    Datepicker,
  },
  data() {
    return {
      filelist: [],
    };
  },
  computed: {
    parseSize() {
      return 'asdasd';
    },
  },
  methods: {
    loadFile() {
      this.filelist = [...this.$refs.upload.files];
      this.bot.image.src = URL.createObjectURL(this.filelist[0]);
      this.bot.image.name = this.filelist[0].name;
      this.bot.image.size = this.filelist[0].size;
    },
    uploadFile(e) {
      this.$refs.upload.files = e.dataTransfer.files;
      this.loadFile();
    },
    remove(i) {
      this.filelist.splice(i, 1);
      this.bot.image = {
        src: '',
        name: '',
        size: 0,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .modalForm {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: $modal_form_background_color;
    z-index: 1000;
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

    input[type="file"] {
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

  .folders {
    width: 50vw;
    display: flex;
    padding: 0 0.5em;
    flex-direction: column;

    .inputs {
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
