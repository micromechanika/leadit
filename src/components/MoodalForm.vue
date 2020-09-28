<template>
  <div class="modalForm">
    <form enctype="multipart/form-data">
      <div class="formMarkup">
        <div class="logo"
             @drop.prevent.stop="uploadFile"
             @dragover.prevent.stop
             @dragenter.prevent.stop
             @dragleave.prevent.stop
        >
          <div class="botLogo">
            <p v-for="f in filelist" :key="f.name">{{f.name}} ( {{f.size/1e6 }} mb )</p>
          </div>
          <label class="choceFile" for="file">
            <input
                   ref="file"
                   multiple
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
            type="text"
            name="botname"
            placeholder="enter bot name"
            :value=bot.name>

          <input
            type="text"
            name="botdescription"
            placeholder="enter bot descriptions"
            :value=bot.description>

          <input
            type="text"
            name="botdate"
            placeholder="enter bot date"
            :value=bot.date>
        </div>
      </div>
      <div class="buttons">
        <button class="saveBotInfo"><p>Save</p></button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MoodalForm',
  props: {
    bot: {
      type: Object,
      default() {
        return {
          name: '',
          description: '',
          image: '../img/logo.jpg',
          date: '',
        };
      },
    },
  },
  data() {
    return {
      filelist: [],
    };
  },
  methods: {
    loadFile() {
      this.filelist = [...this.$refs.file.files];
    },
    uploadFile(e) {
      this.$refs.file.files = e.dataTransfer.files;
      this.loadFile();
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
    height: 40vh;
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
  }

  .botLogo {
    /*width: 20vw;*/
    /*height: 20vw;*/
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /*border-radius: 50%;*/
      border: none;
    }
  }

  .folders {
    width: 50vw;
    display: flex;
    padding: 0 0.5em;
    flex-direction: column;

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

</style>
