<template>
    <div class="box">
        <div class="container">
            <img :src="dataUrl" v-if="hasimg" class="preview-img" @click="previewclick">
            <div class="cover-center"><p class="cover-p">点击添加图片</p></div>
            <div class="cover-bottom"><p class="cover-p">点击修改图片</p></div>
        </div>
        <input class="preview-img-input"
            ref="inputer"
            :id="inputId" 
            type="file"
            :name="name"
            :accept="accept"
            capture="video"
            @change="handleFileChange"/>
        <label :for="inputId"></label>
        {{errTxt}}{{fileName}}
    </div>
</template>

<style scoped>
    *{
        margin:0;padding:0;
    }
    .box, .container{
        width: 200px;
        height: 80px;
        position: relative;
    }
    .img-cover{
        z-index: 2;
        border:1px solid red;
    }
    input{
        position: absolute;
        left: -9999px;
    }
    label {
        transition: 0.3s all;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: #efeeee;
        border: 1px solid #efeeee;
    }
        .preview-img:hover, label:hover {
            transition: 0.3s all;
            transform: scale(1.015);
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        }
    .preview-img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        z-index: 3;
        position: absolute;
    }
    .cover-center, .cover-bottom{
        width:100%;
        z-index: 4;
        height: 23px;
        position:absolute;
        text-align: center;
    }
    .cover-center{
        top:50%;
        margin-top:-10px;
    }
    .cover-bottom{
        bottom:0;
        background: #000;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .cover-center p, .cover-bottom p{
        font-size: 12px;
        line-height: 23px;
        font-weight: 500;
        color:#ccc;
    }
    .box img {
        border-radius: 5px;
    }
</style>

<script>
    export default{
        data () {
        	return  {
        		inputId: 'upload',
                hasimg: false,
	            name: 'image',
	            accept: '',
	            video: '',
	            errTxt: '',
	            maxSize: 2000,
	            // dataUrl: require('../assets/upload.png'),
                dataUrl: '',
                fileName: ''
        	}
        },
        methods: {
            handleFileChange (e) {
                if (typeof e.target === 'undefined') this.file = e[0];
                else this.file = e.target.files[0];
                let size = Math.floor(this.file.size / 1024);
                if (size > this.maxSize) {
                    this.errTxt = '文件最大不能超过2M';
                }
                let accept = this.accept.split(',');
                this.onChange && this.onChange(this.file, e.target.value);
                this.imgPreview(this.file);
                this.fileName = this.file.name;
                this.hasimg = true;
            },
            previewclick () {
                document.getElementById(this.inputId).click();
            },
            imgPreview (file) {
                let self = this;
                if (!file || !window.FileReader) return;
                if (/^image/.test(file.type)) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onloadend = function () {
                        self.dataUrl = this.result;
                    }
                }
            }
        }
    }
</script>
