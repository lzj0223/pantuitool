<template>
    <div class="common-layout">
        <div class="header">
            <div class="header-back">
                <el-icon>
                    <ArrowLeftBold />
                </el-icon>
            </div>
            <div class="header-search">
                <input class="el-input__inner" type="text" autocomplete="off" placeholder="请输入关键词">
                <span class="el-input__suffix">
                    <span class="el-input__suffix-inner">
                        <el-icon>
                            <Search />
                        </el-icon>
                    </span>
                </span>
            </div>
        </div>

        <div class="container">
            <div class="container-list">
                <div class="container-list-item">
                    <div class="title">
                        <img src="data:image/png;base64,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"
                            class="img-folder">
                        <div class="file-title">
                            架构师文集100本
                        </div>
                        <img src="https://cdn-pocket-cloud.sns.sohu.com/public/icon/img_logo_aliyun.png"
                            class="img_sourceicon">
                        <div class="search_title_source"> 阿里云盘 </div><!---->
                    </div>
                    <div class="info">
                        <div class="info-text"> 提取码：xhjk </div>
                        <div class="info-text"> 大小：556.29MB </div>
                        <div class="info-text"> 2023-6-16 </div>
                    </div>
                    <div class="files">
                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师-大前端.pdf-3.63MB</div>
                        </div>

                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师-大数据平台架构.pdf-2.60MB
                            </div>
                        </div>

                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师-机器学习实践.pdf-12.46MB
                            </div>
                        </div>
                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">架构师4月刊.pdf-13.93MB</div>
                        </div>
                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师特刊-QCon-SH2018.pdf-6.35MB</div>
                        </div>
                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师特刊-区块链生态技术谈.pdf-4.34MB</div>
                        </div>
                        <div class="file-item">
                            <img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师特刊-微服务与DevOps技术内参.pdf-10.20MB</div>
                        </div>
                        <div class="file-item"><img width="17px" height="20px"
                                src="https://cdn-pocket-cloud.sns.sohu.com/public/file_icon/ic_pdf@3x.png">
                            <div class="file-text">
                                架构师-揭秘双11背后的技术交流.pdf-41.27MB
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Search, ArrowLeftBold } from '@element-plus/icons-vue'
</script>

<style scoped>
.common-layout {
    /* width: 80vh;
    margin: 0 auto;
    max-width: 600px;
    min-width: 300px; */
}

@media screen and (min-width: 600px) {
    .header-search {
        width: 80vw;
        border-radius: 1vw;
        padding: 1vw 3vw;
    }

    .container-list-item {
        padding: 2vw;
        border-radius: 1vw;
    }


    .container-list-item .info .info-text {
        font-size: 15px;
        font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
        font-weight: 400;
        color: #96a0ab;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 20px;
    }

    .container-list-item .info .info-text {
        margin-right: 20px;
    }
}

@media screen and (max-width: 599px) {
    .header-search {
        width: 86vw;
        border-radius: 2vw;
        padding: 3vw 4vw;
    }

    .container-list-item {
        padding: 4vw 3vw;
        border-radius: 2vw;
    }

    .container-list-item .info .info-text {
        margin-right: 10px;
        font-size: 14px;
    }
}

.header {
    display: flex;
    align-items: center;

    padding: 10px;
}



.header-back {
    font-size: 16px;
    cursor: pointer;
}

.header-search {
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(214, 214, 214, .5);
    min-width: 150px;
    max-width: 600px;
    display: flex;
    align-items: center;
}

.header-search input {
    font-size: 16px;
    border: none;
    outline: none;
    /* width: 90%; */
}

.header-search .el-input__suffix {
    cursor: pointer;
}


.container {
    padding: 10px;
}

.container-list {
    min-width: 250px;
    max-width: 700px;

    margin: 10px auto;
}



.container-list-item {
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(214, 214, 214, .5);
}

.container-list-item:hover {
    box-shadow: 0 0 5px rgba(214, 214, 214, .8);
}

.container-list-item .title {
    /* display: inline-flex; */

    display: flex;
    flex-direction: row;
}

.container-list-item .file-title {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-left: 10px;
    font-size: 16px;
    color: #253a51;
    margin-top: .02667rem;

    line-height: 100%;
}

.container-list-item .img-folder {
    min-width: 18px;
    min-height: 15px;

    width: 1vw;
    height: 1vw;
}

.container-list-item .info {
    /* display: flex; */
    margin-top: 5px;
    margin-left: .77333rem;
    width: 100%;

    display: flex;
    flex-direction: row;
}

.container-list-item .info .info-text {
    font-family: Alibaba-PuHuiTi-R, Alibaba-PuHuiTi;
    font-weight: 400;
    color: #96a0ab;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.container-list-item .info .info-text:end {
    text-align: right;
}




.container-list-item .files {
    /* display: flex;
    flex-direction: row; */
    margin-top: .18667rem;
    margin-left: .77333rem;
}

.container-list-item .files .file-item {
    display: flex;
    flex-direction: row;
    margin: 10px auto;

    height: 22px;
    line-height: 22px;
}

.container-list-item .files .file-item .file-text {
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    font-size: .77333rem;
    color: #70757e;

    margin-left: .26667rem;
    margin-bottom: .29333rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;


}


.img_sourceicon {
    min-width: 18px;
    min-height: 15px;

    width: 1vw;
    height: 1vw;
    margin-left: 10px;
}

.search_title_source {
    margin-left: 5px;
    font-size: 16px;
    line-height: 100%;
    color: #adb4bb;
}
</style>